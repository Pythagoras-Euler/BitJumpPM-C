<template>
  <div class="container">
    <base-dialog :show="!!error" title="加载错误" @close="confirmError">
      <template #default>
        <p>{{ error }}</p>
      </template>
      <template #action>
        <BaseButton mode="outline" class="message-button" @click="confirmError"
          >确定</BaseButton
        >
      </template>
    </base-dialog>
    <div class="content-box">
      <div class="button-box">
        <BaseButton class="add-button" @click="refresh">刷新</BaseButton>
      </div>
      <transition name="projects" mode="out-in">
        <div v-if="isLoading" class="spinner">
          <BaseSpinner></BaseSpinner>
        </div>
        <ul v-else-if="hasProject" class="project-box">
          <ProjectItem
            class="project-item"
            v-for="project in projects"
            :key="project.projectId"
            :projectId="project.projectId"
            :leaderId="project.leaderId"
            :projectName="project.projectName"
            :leaderName="project.leaderName"
            :projectUrl="project.projectUrl"
            :process="project.process"
            :buttons="buttons"
          ></ProjectItem>
        </ul>
        <BaseCard v-else class="prompt"
          >现在还没有关联项目，赶快创建/加入一个吧！</BaseCard
        >
      </transition>
    </div>
  </div>
</template>

<script>
import ProjectItem from "../../components/project/ProjectItem.vue";
export default {
  data() {
    return {
      isLoading: false,
      error: null,
      buttons: ["详情"],
    };
  },
  components: {
    ProjectItem,
  },

  computed: {
    projects() {
      return this.$store.getters["projects/projects"];
    },
    userId() {
      return this.$store.getters["userId"];
    },
    hasProject() {
      return this.$store.getters["projects/hasProject"];
    },
  },

  methods: {
    async loadProjects(mode) {
      //获取项目列表的函数
      this.isLoading = true;
      try {
        await this.$store.dispatch("projects/loadProjects", {
          mode: mode,
          userId: this.userId,
        });
      } catch (error) {
        this.error = error.message || "抱歉，加载出错，请重试";
      }
      this.isLoading = false;
    },
    confirmError() {
      this.error = null;
    },
    refresh() {
      this.loadProjects("1");
    },
  },
  created() {
    this.loadProjects("1");
  },
};
</script>

<style scoped>
.container {
  overflow: auto;
}
.button-box {
  display: flex;
  /* gap: 0.8rem; */
  gap: 0.6vw;
}
.prompt {
  /* padding: 2.4rem; */
  padding: 2vw;
}
.add-button {
  border-color: #be4bdb;
  background-color: #be4bdb;
  border-radius: 8px;
  align-self: flex-start;
  color: #fff;
  /* padding: 0.3rem 0.8rem; */
  padding: 0.2vw 0.6vw;
}

.add-button:active,
.add-button:hover {
  border-color: #9c36b5;
  background-color: #9c36b5;
}
.project-box {
  list-style: none;
  display: flex;
  flex-direction: column;
  /* gap: 1.2rem; */
  gap: 1vw;
}
.content-box {
  display: flex;
  flex-direction: column;
  /* padding: 1.2rem 3.6rem; */
  padding: 1vw 2.9vw;
  /* padding-bottom: 5.2rem; */
  padding-bottom: 4.5vw;
  /* margin-right: 5rem; */
  margin-right: 4.2vw;
  /* gap: 1.2rem; */
  gap: 1vw;
}
.spinner {
  /* margin-top: 3.2rem; */
  margin-top: 3vw;
}

.projects-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.projects-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.projects-enter-to,
.projects-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.projects-enter-active {
  transition: all 0.3s ease-out;
}

.projects-leave-active {
  transition: all 0.3s ease-in;
}
</style>
