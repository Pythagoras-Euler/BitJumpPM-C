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
      placeholder=" 账号"
      v-model.trim="id.val"
      required
      pattern="\d{11}"
      ref="id"
      @blur="validateId"
    />
    <p class="error-msg" v-if="!id.isValid">输入不合法，请检查长度和字符类型</p>
    <div v-else class="white-space"></div>

    <label for="password">
      <span> 旧密码 </span>
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
      id="oldPassword"
      name="oldPassword"
      placeholder=" 旧密码"
      v-model.trim="oldPassword.val"
      pattern="(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{8,16}$"
      required
      ref="oldPassword"
      @blur="validateOldPassword"
    />
    <p class="error-msg" v-if="!oldPassword.isValid">
      输入不合法，请检查长度和字符类型
    </p>
    <div v-else class="white-space"></div>
    <label for="password">
      <span> 新密码 </span>
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
      id="newPassword"
      name="newPassword"
      placeholder=" 与旧密码相异，8~16位，至少包含字母和数字，可有英文符号"
      v-model.trim="newPassword.val"
      pattern="(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{8,16}$"
      required
      ref="newPassword"
      @blur="validateNewPassword"
    />
    <p class="error-msg" v-if="!newPassword.isValid">
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
      oldPassword: {
        val: "",
        isValid: true,
      },
      newPassword: {
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
        this.oldPassword.val = "";
        this.newPassword.val = "";
        this.confirmPassword.val = "";
      }
    },
  },
  methods: {
    validateForm() {
      if (
        this.validateId() &&
        this.validateOldPassword() &&
        this.validateNewPassword() &&
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
          oldPassword: this.oldPassword.val,
          newPassword: this.newPassword.val,
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

    validateOldPassword() {
      if (!this.$refs.oldPassword.checkValidity()) {
        this.oldPassword.isValid = false;
        return false;
      } else {
        this.oldPassword.isValid = true;
        return true;
      }
    },

    validateNewPassword() {
      if (
        !this.$refs.newPassword.checkValidity() ||
        this.oldPassword.val === this.newPassword.val
      ) {
        this.newPassword.isValid = false;
        return false;
      } else {
        this.newPassword.isValid = true;
        return true;
      }
    },
    validateConfirmPassword() {
      if (this.confirmPassword.val !== this.newPassword.val) {
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
}
form {
  display: grid;
  grid-template-columns: auto 1fr;

  align-items: center;
  column-gap: 8px;

  padding: 36px;
  padding-left: 0;
}
.icon {
  width: 24px;
}

.white-space {
  height: 32px;
  grid-column: 1/-1;
}
input {
  height: 36px;
  font-size: 14px;
}
label {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 2px;
}
.base-button {
  grid-column: 2/-1;
}

.error-msg {
  grid-column: 2/-1;
  margin-bottom: 20px;
  color: #e6fcf5;
}
</style>
