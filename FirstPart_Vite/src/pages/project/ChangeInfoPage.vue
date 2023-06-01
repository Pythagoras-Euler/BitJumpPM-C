<template>
  <div class="container">
    <component :is="activePage"></component>
  </div>
</template>

<script>
import ChangeInfo from "@/components/project/personalInfo/ChangeInfo.vue";
import ViewInfo from "@/components/project/personalInfo/ViewInfo.vue";
export default {
  props: ["userId"],
  components: {
    ChangeInfo,
    ViewInfo,
  },
  computed: {
    currentUserId() {
      return this.$store.getters["userId"];
    },
    activePage() {
      const viewedId = this.userId;
      const userId = this.currentUserId;
      if (viewedId === userId) {
        return "ChangeInfo";
      } else {
        return "ViewInfo";
      }
    },
  },
};
</script>

<style scoped>
/* beffff */
.container {
  position: fixed;
  overflow: auto;
  height: 100vh;
  width: 100vw;

  background-color: rgba(109, 192, 192);
}
</style>
