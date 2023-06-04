<template>
  <ConfirmManage
    :fromData="fromData"
    :confirmPassword="confirmPassword"
  ></ConfirmManage>
  <BaseDialog
    class="container"
    :show="isManaging"
    :setDefaultHeaderStyle="false"
    :setDefaultBodyStyle="false"
    :setDefaultBoxStyle="false"
    :setDefaultMenuStyle="false"
    :setFormStyle2="true"
  >
    <template #header>
      <div class="header-box">
        <span class="mainheader">增删管理员</span>
      </div>
    </template>
    <template #default>
      <form class="form-box" @submit.prevent="submitData">
        <label for="name">姓名</label>
        <input
          id="name"
          name="name"
          class="input-name-box"
          v-model.trim="name"
        />
        <label for="id">工号</label>
        <input id="id" name="id" class="input-id-box" v-model.trim="userId" />
      </form>
    </template>
    <template #action>
      <div class="button-box">
        <BaseButton class="btn" mode="outline" @click="cancelManage"
          >取消</BaseButton
        >
        <div class="right-btn-box">
          <BaseButton class="btn delete-btn" @click="submitDeleteData()"
            >删除</BaseButton
          >

          <BaseButton class="btn" @click="submitSetData()">增加</BaseButton>
        </div>
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
import ConfirmManage from "./ConfirmManage.vue";
export default {
  props: ["isManaging", "projectId"],
  components: {
    ConfirmManage,
  },
  provide() {
    return {
      cancelConfirm: this.cancelConfirm,
    };
  },
  data() {
    return {
      name: "",
      userId: "",
      fromData: null,
      formIsValid: true,
      confirmPassword: false,
    };
  },
  inject: ["cancelManage"],
  methods: {
    submitData(isUp) {
      if (this.validateForm()) {
        const fromData = {
          projectId: this.projectId,
          name: this.name,
          userId: this.userId,
          isUp: isUp,
        };
        this.fromData = fromData;
        this.confirmPassword = true;
        this.clearData();
        this.cancelManage();
      }
    },
    cancelConfirm() {
      this.confirmPassword = false;
    },
    submitSetData() {
      this.submitData(true);
    },
    submitDeleteData() {
      this.submitData(false);
    },
    clearData() {
      this.userId = "";
      this.name = "";
    },
    validateForm() {
      if (this.validateId() && this.validateName()) {
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
    validateName() {
      return this.name.length > 0;
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
  padding-top: 0.5vw;
}

.mainheader {
  font-size: 1.2vw;
  /* margin-top: 0.5vw; */
  color: #555;
}

.form-box {
  display: grid;
  grid-template-columns: auto 1fr;

  row-gap: 1.5vw;
  column-gap: 1vw;

  /* border: 1px solid #ccc; */
  height: 100%;
  margin: 0 2vw;
  padding-top: 2.5vw;
  padding-bottom: 2.5vw;
}

.input-id-box,
.input-name-box {
  width: 90%;
  height: 100%;
  border: 1px solid #bbb; /* 设置边框样式和颜色 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

label {
  justify-self: end;
  font-size: 1vw;
  color: #555;
  align-self: center;
}

.button-box {
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 0 1vw;
}

.right-btn-box {
  display: flex;
  gap: 12px;
}

.btn {
  border-radius: 6px;
  height: 80%;
  display: flex;
  align-items: center;
}

.message-button {
  border-radius: 8px;
  font-size: 1vw;
}

.delete-btn {
  background-color: #ffc9c9;
  border-color: #ffc9c9;
}

.delete-btn:hover,
.delete-btn:active {
  background-color: #ff6b6b;
  border-color: #ff6b6b;
  color: #fff;
}
</style>
