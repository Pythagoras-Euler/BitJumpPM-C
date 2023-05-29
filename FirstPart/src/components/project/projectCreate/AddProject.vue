<template>
  <BaseDialog
    class="container"
    :show="isAdding"
    :setDefaultHeaderStyle="false"
    :setDefaultBodyStyle="false"
    :setDefaultBoxStyle="false"
    :setDefaultMenuStyle="false"
    :setFormStyle="true"
  >
    <template #header>
      <div class="header-box">
        <span class="mainheader">添加项目</span>
        <span class="subheader">辅助信息填写</span>
      </div>
    </template>
    <template #default>
      <form class="form-box" @submit.prevent="submitData">
        <div class="img-container">
          <div class="img-box">
            <img
              class="img-preview"
              :src="projectUrl"
              v-if="projectUrl"
              alt="项目图片"
            />
          </div>
          <label class="custom-file-upload">
            <input
              type="file"
              ref="fileInput"
              accept="image/*"
              @change="handleFileChange"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="icon-img"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </label>
        </div>
        <label for="name">项目名</label>
        <input
          type="text"
          id="name"
          name="name"
          class="input-name-box"
          v-model.trim="projectName"
        />

        <label for="intro" class="intro-label">项目简介</label>
        <textarea
          id="intro"
          name="intro"
          rows="5"
          class="input-intro-box"
          v-model.trim="introduction"
        />
      </form>
    </template>
    <template #action>
      <div class="button-box">
        <BaseButton class="btn" mode="outline" @click="cancelAdd"
          >取消</BaseButton
        >
        <BaseButton class="btn" @click="submitData">提交</BaseButton>
      </div>
    </template>
  </BaseDialog>
  <BaseDialog
    :show="!formIsValid"
    @close="confirmError"
    title="无效输入"
    :setFormBackdrop="true"
  >
    <template #default>
      <p>抱歉，检测到输入数据至少有一个不符合规范</p>
      <p>请再次检查输入</p>
    </template>
    <template #action>
      <BaseButton mode="outline" class="message-button" @click="confirmError"
        >确定</BaseButton
      >
    </template>
  </BaseDialog>
</template>

<script>
export default {
  props: ["isAdding"],
  data() {
    return {
      projectName: "",
      introduction: "",
      projectUrl: "",

      formIsValid: true,
    };
  },
  inject: ["cancelAdd"],
  methods: {
    handleFileChange() {
      const file = this.$refs.fileInput.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.projectUrl = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitData() {
      if (this.validateForm()) {
        const fromData = {
          projectName: this.projectName,
          Introduction: this.introduction,
          projectUrl: this.projectUrl,
        };
        //todo: 通信
        alert(fromData);
        this.clearData();
      }
    },
    clearData() {
      this.projectName = "";
      this.introduction = "";
      this.projectUrl = "";
    },
    validateForm() {
      if (this.validateName() && this.validateIntro() && this.validateUrl()) {
        return true;
      } else {
        this.formIsValid = false;
        return false;
      }
    },
    confirmError() {
      this.formIsValid = true;
    },
    validateName() {
      return this.projectName.length > 0;
    },
    validateIntro() {
      return this.introduction.length > 0;
    },
    validateUrl() {
      return this.projectUrl.length > 0;
    },
  },
};
</script>

<style scoped>
.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 1vw;
}

.mainheader {
  font-size: 1.3vw;
  margin-top: 0.5vw;
  color: #555;
}

.subheader {
  font-size: 1vw;
  color: #999;
  align-self: end;
  margin-bottom: 2px;
}

.form-box {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 35% 10% auto;
  row-gap: 1vw;
  column-gap: 1vw;

  /* border: 1px solid #ccc; */
  height: 100%;
  margin: 0 2vw;
  padding-top: 1vw;
  padding-bottom: 2vw;
}

.img-container {
  grid-column: 2/-1;
  display: flex;
  height: 100%;
  max-width: 25%;
  gap: 1vw;
}
.img-box {
  flex: 8 8 80%;
  border: 1px solid #aaa;
  border-radius: 200px;

  overflow: hidden;

  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}
.img-preview {
  max-width: 100%;
  max-height: 100%;
}
.custom-file-upload {
  flex: 2 2 20%;
  align-self: flex-end;
  height: fit-content;

  /* border: 1px solid black; */

  cursor: pointer;
  justify-self: start;
  display: flex;
  align-items: center;
}

.custom-file-upload input[type="file"] {
  display: none;
}
.custom-file-upload span {
  font-size: 1vw;
}
.intro-label {
  align-self: start;
  margin-top: 0.3vw;
}
.input-name-box {
  width: 30%;
  border: 1px solid #bbb; /* 设置边框样式和颜色 */
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}

.input-intro-box {
  height: 100%;
  width: 80%;
  border: 1px solid #bbb; /* 设置边框样式和颜色 */
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}
label {
  justify-self: end;
  font-size: 1vw;
  color: #555;
  align-self: center;
}

.icon-img {
  width: 24px;
  stroke: #a5d8ff;
}

.button-box {
  height: 100%;
  display: flex;
  justify-content: end;
  gap: 12px;
  padding-right: 1vw;
}

.btn {
  border-radius: 6px;
  height: 80%;
}

.message-button {
  border-radius: 8px;
  font-size: 1vw;
}
</style>
