<template>
  <div class="background">
    <slot></slot>
  </div>
</template>

<style scoped>
.background {
  height: 100vh;
  background-image: linear-gradient(
      rgba(62, 62, 62, 0.55),
      rgba(52, 52, 52, 0.5)
    ),
    url("../../assets/background.jpg");
  background-size: cover;
  color: #fff;
}
</style>
