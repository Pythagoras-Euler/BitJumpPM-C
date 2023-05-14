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
    <BaseButton mode="transparent" @click="switchPage('LoginComponent')"
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
}
.box {
  position: fixed;
  left: 31%;
  top: 10%;

  width: 40%;
  height: 80%;

  background-image: linear-gradient(
    rgba(215, 215, 215, 0.55),
    rgba(215, 215, 215, 0.5)
  );

  display: flex;
  flex-direction: column;

  padding: 42px 0;
  padding-left: 24px;
  padding-right: 32px;
}

h1 {
  align-self: center;
  margin-bottom: 16px;
  font-size: 3.2rem;
}
</style>
