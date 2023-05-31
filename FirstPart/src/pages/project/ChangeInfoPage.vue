<template>
  <div class="container">
    <ChangeInfo></ChangeInfo>
  </div>
</template>

<script>
import ChangeInfo from "@/components/project/personalInfo/ChangeInfo.vue";
export default {
  components: {
    ChangeInfo,
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  overflow: auto;
  height: 100vh;
  width: 100vw;

  background-color: white;
}
</style>
