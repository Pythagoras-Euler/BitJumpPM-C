<template>
  <BaseDialog title="确认删除" :show="checkDelete">
    <template #default>
      <form class="form-box" @submit.prevent="submitData">
        <label for="password">请输入密码，确认操作</label>
        <input
          id="password"
          name="password"
          class="input-password-box"
          v-model.trim="password"
        />
      </form>
    </template>
    <template #action>
      <div class="button-box">
        <BaseButton class="btn" mode="outline" @click="cancel2Delete"
          >取消</BaseButton
        >
        <BaseButton class="btn" @click="submitData">确定</BaseButton>
      </div>
    </template>
  </BaseDialog>
  <BaseDialog
    :show="!formIsValid"
    @close="confirmError"
    title="无效输入"
    :setDialogBackdrop="true"
    :setHigherZ="true"
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
  props: ["checkDelete"],
  data() {
    return {
      password: "",
      formIsValid: true,
    };
  },
  inject: ["cancel2Delete"],
  methods: {
    submitData() {
      if (this.validateForm()) {
        const fromData = {
          password: this.password,
        };
        //todo: 通信
        alert(fromData);
        this.clearData();
      }
    },
    clearData() {
      this.password = "";
    },
    validateForm() {
      if (this.validatePassword()) {
        return true;
      } else {
        this.formIsValid = false;
        return false;
      }
    },
    confirmError() {
      this.formIsValid = true;
    },
    validatePassword() {
      return this.password.length > 0;
    },
  },
};
</script>

<style scoped>
.form-box {
  display: flex;
  flex-direction: column;
  gap: 0.8vw;
  margin: 0.5vw 0;
  /* border: 1px solid #ccc; */
}

.input-password-box {
  border: 1px solid #bbb; /* 设置边框样式和颜色 */

  /* box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1); */
}

label {
  font-size: 1vw;
  color: #555;
  align-self: flex-start;
}

.button-box {
  height: 100%;
  display: flex;
  justify-content: end;
  gap: 12px;
}

.btn {
  border-radius: 6px;
}

.message-button {
  border-radius: 8px;
  font-size: 1vw;
}
</style>
