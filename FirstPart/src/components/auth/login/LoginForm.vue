<template>
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
  <form @submit.prevent="submitData" novalidate>
    <label for="account"
      ><svg
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
      pattern="\d{11}"
      ref="id"
      required
      v-model.trim="id.val"
      :class="{ invalid: !id.isValid }"
      @blur="validateId"
    />
    <p class="error-msg" v-if="!id.isValid">输入不合法，请检查长度和字符类型</p>
    <div v-else class="white-space"></div>

    <label for="password"
      ><svg
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
      placeholder=" 密码"
      pattern="(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{8,16}$"
      required
      ref="password"
      v-model.trim="password.val"
      :class="{ invalid: !password.isValid }"
      @blur="validatePassword"
    />
    <p class="error-msg" v-if="!password.isValid">
      输入不合法，请检查长度和字符类型
    </p>
    <div v-else class="white-space"></div>
    <BaseButton class="base-button">登录</BaseButton>
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
      password: {
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
        this.password.val = "";
      }
    },
  },
  methods: {
    validateForm() {
      if (this.validateId() && this.validatePassword()) {
        return true;
      } else {
        this.formIsValid = false;
        return false;
      }
    },
    submitData() {
      if (this.validateForm()) {
        const fromData = {
          id: this.id.val,
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
    validatePassword() {
      if (!this.$refs.password.checkValidity()) {
        this.password.isValid = false;
        return false;
      } else {
        this.password.isValid = true;
        return true;
      }
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 12px;
}

.white-space {
  grid-column: 1/-1;
  height: 42px;
}

.base-button {
  grid-column: 1/-1;
}
.icon {
  width: 24px;
}
.error-msg {
  grid-column: 2/-1;
  margin-bottom: 30px;
  color: #e6fcf5;
}

.message-button {
  border-radius: 8px;
}
.invalid {
  /* border-color: #c92a2a; */
}
label {
  font-size: 1.5rem;
}
input {
  height: 36px;
  font-size: 15px;
}
</style>
