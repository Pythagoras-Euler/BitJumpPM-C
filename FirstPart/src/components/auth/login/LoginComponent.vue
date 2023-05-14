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
        <p>登录成功，前往主页!</p>
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
    <img alt="Logo" src="../../../assets/card-pic.png" />
    <div class="content">
      <h1>BIT JUMP 项目管理系统</h1>
      <LoginForm
        @save-data="saveData"
        :submitSuccess="submitSuccess"
      ></LoginForm>
      <div class="footer-button-box">
        <BaseButton
          mode="transparent"
          @click="switchPage('ChangePasswordComponent')"
        >
          修改密码
        </BaseButton>
        <BaseButton mode="transparent" @click="switchPage('SignupComponent')">
          还没有账号?去注册
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import LoginForm from "./LoginForm.vue";

export default {
  components: { LoginForm },
  inject: ["switchPage"],
  data() {
    return {
      isLoading: false,
      submitSuccess: false,
      error: null,
    };
  },
  methods: {
    async saveData(data) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("login", data);
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
      this.$router.replace("/main");
    },
  },
};
</script>

<style scoped>
.box {
  position: fixed;
  left: 32%;
  top: 20%;

  width: 57%;
  height: 60%;

  display: flex;
  gap: 10px;
  justify-content: space-between;

  border: 1px solid #fff;

  background-image: linear-gradient(
    rgba(185, 185, 185, 0.55),
    rgba(157, 157, 157, 0.5)
  );
}

img {
  border-radius: 12px 0 0 12px;
  width: 43%;
}
.content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  padding: 36px;
  padding-bottom: 24px;
  justify-content: space-between;
  align-items: stretch;
}
.footer-button-box {
  display: flex;

  justify-content: center;
}

.message-button {
  border-radius: 6px;
}

h1 {
  font-size: 3rem;
  align-self: center;
  margin-bottom: 32px;
  margin-top: 12px;
}
</style>
