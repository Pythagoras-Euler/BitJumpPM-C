<template>
  <div class="container">
    <BaseButton link mode="flat" to="/project" class="btn-router"
      >返回主页</BaseButton
    >
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

  data() {
    return {
      isLoading: false,
      error: "",
    };
  },
  computed: {
    token() {
      return this.$store.getters["token"];
    },
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
    personalData() {
      this.$store.getters["projects/personalData"];
    },
  },
  methods: {
    async loadPersonalData() {
      //获取项目列表的函数
      this.isLoading = true;
      try {
        await this.$store.dispatch("projects/loadPersonalData", {
          token: this.token,
          userId: this.currentUserId,
        });
      } catch (error) {
        this.error = error.message || "抱歉，加载出错，请重试";
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadPersonalData();
    //   console.log(this.personalData);
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

.btn-router {
  width: 7vw;
  height: 3vw;
  position: fixed;
  left: 0;
  top: 0;
  color: #e9ecef;
  display: flex;
  align-items: center;
}

.btn-router:active,
.btn-router:hover {
  background-color: #22b8cf;
  color: #fff;
}
</style>
