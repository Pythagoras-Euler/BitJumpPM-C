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
        <p>验证通过，登录成功</p>
      </template>
      <template #action>
        <BaseButton
          mode="outline"
          class="message-button success-button"
          @click="confirmSuccess"
          >前往主页!</BaseButton
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
        //console.log(data);
        // console.log("111", this.$store.getters.token);
        await this.$store.dispatch("vxLogin", data);

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
      this.$router.replace("/project");
    },
  },
};
</script>

<style scoped>
.box {
  /* position: fixed;
  left: 32%;
  top: 20%;

  width: 57%;
  height: 60%; */

  display: flex;
  /* gap: 1rem; */
  /* justify-content: space-between; */

  border: 1px solid #fff;

  background-image: linear-gradient(
    rgba(185, 185, 185, 0.55),
    rgba(157, 157, 157, 0.5)
  );

  /* -------------------------------------------------------------------------- */
  position: fixed;
  left: 32%;
  top: 20%;
  width: 57vw;
  height: 30vw;
}

img {
  border-radius: 12px 0 0 12px;

  /* width: 43%;
  height: auto; */

  /* -------------------------------------------------------------------------- */
  flex: 4 4 auto;
  max-width: 43%;
}
.content {
  /* 作为子元素的flex设置 */
  flex: 6 6 auto;
  /* 作为父元素的flex设置 */
  display: flex;
  flex-direction: column;
  /* 
  padding: 3.2rem;
  padding-bottom: 2.4rem;

  justify-content: space-between; */
  /* align-items: stretch; */

  /* -------------------------------------------------------------------------- */
  overflow: auto;
}
.footer-button-box {
  display: flex;

  justify-content: center;

  align-items: center;

  /* -------------------------------------------------------------------------- */
  flex: 1 1 20%;
}

.message-button {
  border-radius: 6px;
  font-size: 1vw;
}
/* .success-button {
  justify-content: center;
} */

h1 {
  /* font-size: 2.6rem; */
  align-self: center;
  /* margin-bottom: 3.5rem;
  margin-top: 1.2rem; */

  /* -------------------------------------------------------------------------- */
  flex: 2 2 30%;
  display: flex;
  align-items: center;
  font-size: 2.05vw;
}
</style>
