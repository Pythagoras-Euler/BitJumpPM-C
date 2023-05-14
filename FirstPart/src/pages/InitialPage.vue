<template>
  <InitialBackground>
    <KeepAlive>
      <transition name="compo" mode="out-in">
        <component :is="activePage"> </component>
      </transition>
    </KeepAlive>
  </InitialBackground>
</template>

<script>
import LoginComponent from "../components/auth/login/LoginComponent.vue";
import SignupComponent from "../components/auth/signup/SignupComponent.vue";
import ChangePasswordComponent from "@/components/auth/changePassword/ChangePasswordComponent.vue";

export default {
  components: { LoginComponent, SignupComponent, ChangePasswordComponent },
  data() {
    return {
      activePage: "LoginComponent",
    };
  },
  methods: {
    switchPage(target) {
      this.activePage = target;
    },
  },
  provide() {
    return {
      switchPage: this.switchPage,
    };
  },
};
</script>

<style scoped>
.compo-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.compo-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.compo-enter-to,
.compo-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.compo-enter-active {
  transition: all 0.3s ease-out;
}

.compo-leave-active {
  transition: all 0.3s ease-in;
}
</style>
