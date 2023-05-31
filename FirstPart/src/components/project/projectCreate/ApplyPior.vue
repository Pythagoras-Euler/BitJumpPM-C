<template>
  <BaseDialog
    class="container"
    :show="isApplying"
    :setDefaultHeaderStyle="false"
    :setDefaultBodyStyle="false"
    :setDefaultBoxStyle="false"
    :setDefaultMenuStyle="false"
    :setFormStyle="true"
  >
    <template #header>
      <div class="header-box">
        <span class="mainheader">申请称为Boss</span>
        <span class="subheader">辅助信息填写</span>
      </div>
    </template>
    <template #default>
      <form class="form-box" @submit.prevent="submitData">
        <label for="id">用户账号</label>
        <input id="id" name="id" class="input-id-box" v-model.trim="userId" />
        <label for="description" class="des-label">申请说明</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          class="input-des-box"
          v-model.trim="description"
        />
      </form>
    </template>
    <template #action>
      <div class="button-box">
        <BaseButton class="btn" mode="outline" @click="cancelApply"
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
  props: ["isApplying"],
  data() {
    return {
      userId: "",
      description: "",

      formIsValid: true,
    };
  },
  inject: ["cancelApply"],
  methods: {
    submitData() {
      if (this.validateForm()) {
        const fromData = {
          userId: this.userId,
          description: this.description,
        };
        //todo: 通信
        alert(fromData);
        this.clearData();
      }
    },
    clearData() {
      this.userId = "";
      this.description = "";
    },
    validateForm() {
      if (this.validateId() && this.validateDes()) {
        return true;
      } else {
        this.formIsValid = false;
        return false;
      }
    },
    confirmError() {
      this.formIsValid = true;
    },
    validateId() {
      return this.userId.length > 0;
    },
    validateDes() {
      return this.description.length > 0;
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
  grid-template-rows: 10% auto;
  row-gap: 3vw;
  column-gap: 1vw;

  /* border: 1px solid #ccc; */
  height: 100%;
  margin: 0 2vw;
  padding-top: 3vw;
  padding-bottom: 5vw;
}

.des-label {
  align-self: start;
  margin-top: 0.3vw;
}
.input-id-box {
  width: 30%;
  border: 1px solid #bbb; /* 设置边框样式和颜色 */
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}

.input-des-box {
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
