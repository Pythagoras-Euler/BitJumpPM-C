<template>
  <div class="container">
    <component :is="activePage"></component>
  </div>
</template>

<script>
import ProjectDetailManagement from "../../components/project/projectDetail/ProjectDetailManagement.vue";
import ProjectDetailInvolved from "../../components/project/projectDetail/ProjectDetailInvolved.vue";

export default {
  components: {
    ProjectDetailManagement,
    ProjectDetailInvolved,
  },
  computed: {
    activePage() {
      const currentPath = this.$route.path; // 获取当前路由的路径
      const pathSegments = currentPath.split("/"); // 将路径按斜杠分割成数组
      const secondLastSegment = pathSegments[pathSegments.length - 2];
      console.log(secondLastSegment);
      if (secondLastSegment === "joined") {
        return "ProjectDetailInvolved";
      } else if (secondLastSegment === "manage") {
        return "ProjectDetailManagement";
      } else {
        return "";
      }
    },
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
