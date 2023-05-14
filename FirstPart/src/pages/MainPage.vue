<template>
  <MainBackground>
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
        <BaseButton class="add-button">添加项目</BaseButton>
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
          ></ProjectItem>
        </ul>
        <BaseCard v-else class="prompt"
          >现在还没有关联项目，赶快创建/加入一个吧！</BaseCard
        >
      </transition>
    </div>
  </MainBackground>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
import ProjectItem from "../components/project/ProjectItem.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  components: {
    ProjectItem,
    BaseButton,
    BaseCard,
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
.button-box {
  display: flex;
  gap: 8px;
}
.prompt {
  padding: 24px;
}
.add-button {
  border-color: #be4bdb;
  background-color: #be4bdb;
  border-radius: 8px;
  align-self: flex-start;
  color: #fff;
  padding: 3px 8px;
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
  gap: 12px;
}
.content-box {
  display: flex;
  flex-direction: column;
  padding: 12px 36px;
  padding-bottom: 52px;
  margin-right: 50px;
  gap: 12px;
  overflow: auto;
}
.spinner {
  margin-top: 32px;
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
