<template>
  <form @submit.prevent="submitForm" novalidate>
    <BaseDialog :show="!formIsValid" @close="confirmError" title="无效输入">
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
    <label for="id">
      <span> 账号 </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="icon"
        :class="{ invalid: !id.isValid }"
      >
        <path
          fill-rule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
          clip-rule="evenodd"
        />
      </svg>
    </label>
    <input
      type="text"
      id="id"
      name="id"
      placeholder=" 账号（请填写您的手机号，11位数字）"
      v-model.trim="id.val"
      required
      pattern="\d{11}"
      ref="id"
      @blur="validateId"
    />
    <p class="error-msg" v-if="!id.isValid">输入不合法，请检查长度和字符类型</p>
    <div v-else class="white-space"></div>
    <label for="email">
      <span> 邮箱 </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="icon"
      >
        <path
          d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
        />
        <path
          d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
        />
      </svg>
    </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder=" 邮箱"
      v-model.trim="email.val"
      required
      @blur="validateEmail"
      ref="email"
    />

    <p class="error-msg" v-if="!email.isValid">输入不合法，请检查邮箱格式</p>
    <div v-else class="white-space"></div>

    <label for="password">
      <span> 密码 </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="icon"
      >
        <path
          fill-rule="evenodd"
          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
          clip-rule="evenodd"
        />
      </svg>
    </label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder=" 密码（8~16位，至少包含字母和数字,可有英文符号）"
      v-model.trim="password.val"
      pattern="(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{8,16}$"
      required
      ref="password"
      @blur="validatePassword"
    />
    <p class="error-msg" v-if="!password.isValid">
      输入不合法，请检查长度和字符类型
    </p>
    <div v-else class="white-space"></div>
    <label for="confirmPassword">
      <span> 确认密码 </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="icon"
      >
        <path
          fill-rule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clip-rule="evenodd"
        />
      </svg>
    </label>
    <input
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      placeholder=" 确认密码"
      v-model.trim="confirmPassword.val"
      required
      @blur="validateConfirmPassword"
    />
    <p class="error-msg" v-if="!confirmPassword.isValid">
      输入不合法，应与输入密码相同
    </p>
    <div v-else class="white-space"></div>

    <BaseButton class="base-button">注册</BaseButton>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],

  props: ["submitSuccess"],
  data() {
    return {
      id: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      password: {
        val: "",
        isValid: true,
      },
      confirmPassword: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  watch: {
    submitSuccess() {
      //reset
      if (this.submitSuccess) {
        this.id.val = "";
        this.email.val = "";
        this.password.val = "";
        this.confirmPassword.val = "";
      }
    },
  },
  methods: {
    validateForm() {
      if (
        this.validateId() &&
        this.validateEmail() &&
        this.validatePassword() &&
        this.validateConfirmPassword()
      ) {
        return true;
      } else {
        this.formIsValid = false;
        return false;
      }
    },

    submitForm() {
      if (this.validateForm()) {
        const fromData = {
          id: this.id.val,
          email: this.email.val,
          password: this.password.val,
        };
        this.$emit("save-data", fromData);
      }
    },

    confirmError() {
      this.formIsValid = true;
    },
    validateId() {
      if (!this.$refs.id.checkValidity()) {
        this.id.isValid = false;
        return false;
      } else {
        this.id.isValid = true;
        return true;
      }
    },
    validateEmail() {
      if (!this.$refs.email.checkValidity()) {
        this.email.isValid = false;
        return false;
      } else {
        this.email.isValid = true;
        return true;
      }
    },
    validatePassword() {
      if (!this.$refs.password.checkValidity()) {
        this.password.isValid = false;
        return false;
      } else {
        this.password.isValid = true;
        return true;
      }
    },
    validateConfirmPassword() {
      if (this.confirmPassword.val !== this.password.val) {
        this.confirmPassword.isValid = false;
        return false;
      } else {
        this.confirmPassword.isValid = true;
        return true;
      }
    },
  },
};
</script>

<style scoped>
.message-button {
  border-radius: 6px;
  font-size: 1vw;
}
form {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 0.3fr 1fr 0.3fr 1fr 0.3fr 1fr 0.3fr 1fr;

  align-items: center;
  /* column-gap: 0.8rem; */
  column-gap: 0.6vw;

  /* padding: 32px; */
  /* padding-left: 0; */

  /* -------------------------------------------------------------------------- */
  flex: 7.4 7.4 auto;
  max-height: 74%;
  /* margin: 1.3rem 0; */
  /* padding: 0.95vw 0; */
  /* margin-right: 6rem; */
  margin-right: 5vw;
  /* margin-left: 1.5rem; */
  margin-left: 1.5vw;
}
.icon {
  /* width: 24px; */
  width: 1.8vw;
}

.white-space {
  /* height: 32px; */
  grid-column: 1/-1;
  /* -------------------------------------------------------------------------- */
}
input {
  /* height: 32px; */
  /* font-size: 12px; */
  /* -------------------------------------------------------------------------- */
  font-size: 1vw;
  height: 75%;
}
label {
  justify-self: end;
  display: flex;
  align-items: center;
  /* gap: 0.2rem; */
  gap: 0.2vw;
  font-size: 1vw;
}
.base-button {
  grid-column: 2/-1;
  align-self: end;
}

.error-msg {
  grid-column: 2/-1;
  /* margin-bottom: 20px; */
  color: #e6fcf5;
  /* -------------------------------------------------------------------------- */
  padding-bottom: auto;
  align-self: start;
  font-size: 0.05rem;
}
</style>
