<template>
  <MainBackground>
    <router-view v-slot="slotProps">
      <transition name="project" mode="out-in">
        <component :is="slotProps.Component"> </component>
      </transition>
    </router-view>
  </MainBackground>
</template>

<script>
export default {};
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
