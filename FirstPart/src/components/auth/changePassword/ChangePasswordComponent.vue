<template>
  <BaseCard class="box">
    <base-dialog :show="!!error" title="错误" @close="confirmError">
      <template #default>
        <p>{{ error }}</p>
      </template>
      <template #action>
        <BaseButton mode="outline" class="message-button" @click="confirmError"
          >确定</BaseButton
        >
      </template>
    </base-dialog>
    <base-dialog :show="submitSuccess" title="成功" @close="confirmSuccess">
      <template #default>
        <p>密码修改成功，现在去登录吧!</p>
      </template>
      <template #action>
        <BaseButton
          mode="outline"
          class="message-button"
          @click="confirmSuccess"
          >确定</BaseButton
        >
      </template>
    </base-dialog>
    <base-dialog fixed :show="isLoading" title="验证中...">
      <base-spinner></base-spinner>
    </base-dialog>
    <h1>修改密码</h1>
    <ChangePasswordForm
      @save-data="saveData"
      :submitSuccess="submitSuccess"
    ></ChangePasswordForm>
    <BaseButton
      class="footer-button"
      mode="transparent"
      @click="switchPage('LoginComponent')"
      >返回登陆</BaseButton
    >
  </BaseCard>
</template>

<script scoped>
import ChangePasswordForm from "./ChangePasswordForm.vue";
export default {
  components: { ChangePasswordForm },
  data() {
    return {
      error: null,
      submitSuccess: false,
      isLoading: false,
    };
  },
  inject: ["switchPage"],
  methods: {
    async saveData(data) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("changePassword", data);
        this.submitSuccess = true;
      } catch (error) {
        this.error = new Error(error.message);
      }
      this.isLoading = false;
    },
    confirmError() {
      this.error = null;
    },
    confirmSuccess() {
      this.submitSuccess = false;
      this.switchPage("LoginComponent");
    },
  },
};
</script>
<style scoped>
.message-button {
  border-radius: 6px;
  font-size: 1vw;
}
.box {
  position: fixed;
  left: 31%;
  top: 11%;
  /* 
  width: 40%;
  height: 80%; */
  width: 40vw;
  height: 38vw;

  background-image: linear-gradient(
    rgba(215, 215, 215, 0.55),
    rgba(215, 215, 215, 0.5)
  );
  border: 1px solid #e3e3e3;
  display: flex;
  flex-direction: column;

  /* padding: 36px 0;
  padding-left: 20px;
  padding-right: 28px; */
  /* -------------------------------------------------------------------------- */
  overflow: auto;
}

h1 {
  align-self: center;
  /* margin-bottom: 13px; */
  /* font-size: 2.8rem; */
  /* -------------------------------------------------------------------------- */
  flex: 1.6 1.6 16%;
  display: flex;
  align-items: center;
  font-size: 2vw;
  margin-top: 0.5vw;
}

.footer-button {
  flex: 1 1 10%;
}
</style>
