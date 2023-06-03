<template>
  <MainBackground @toggleLoading="handleLoad">
    <router-view v-slot="slotProps">
      <transition name="project" mode="out-in">
        <component :is="slotProps.Component" :isLoading="isLoading">
        </component>
      </transition>
    </router-view>
  </MainBackground>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    handleLoad() {
      this.isLoading = !this.isLoading;
      //  console.log("projectPage", this.isLoading);
    },
  },
};
</script>

<style scoped>
.project-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.project-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.project-enter-to,
.project-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.project-enter-active {
  transition: all 0.3s ease-out;
}

.project-leave-active {
  transition: all 0.3s ease-in;
}
</style>
