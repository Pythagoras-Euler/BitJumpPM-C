<template>
  <div class="container">
    <Suspense>
      <component :is="activePage"></component>
    </Suspense>
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
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  /* background-color: rgb(245, 245, 245); */
  /* background-color: #99e9f2; */
  background: linear-gradient(to right, #c3fae8, #a5d8ff);
}
</style>
