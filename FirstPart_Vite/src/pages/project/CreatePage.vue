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

    <base-dialog :show="isDeleting" title="提示">
      <template #default>
        <p>确认删除项目？</p>
      </template>
      <template #action>
        <div class="btn-box">
          <BaseButton
            mode="outline"
            class="message-button"
            @click="cancelDelete"
            >取消</BaseButton
          >
          <BaseButton class="message-button" @click="confirmDelete"
            >确定</BaseButton
          >
        </div>
      </template>
    </base-dialog>
    <ManageProject
      :isManaging="isManaging"
      :projectId="manageProjectId"
    ></ManageProject>
    <CheckDelete
      :checkDelete="checkDelete"
      :projectId="deleteProjectId"
    ></CheckDelete>
    <AddProject :isAdding="isAdding"></AddProject>
    <ApplyPior :isApplying="isApplying"></ApplyPior>
    <div class="content-box">
      <div class="button-box">
        <BaseButton class="add-button" @click="addProject">添加项目</BaseButton>

        <BaseButton class="add-button" @click="refresh">刷新</BaseButton>
        <BaseButton class="apply-button" @click="applyPior"
          >还没有权限？去申请</BaseButton
        >
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
            @delete-project="handleDelete"
            @manage-project="handleManage"
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
import AddProject from "../../components/project/projectCreate/AddProject.vue";
import ApplyPior from "../../components/project/projectCreate/ApplyPior.vue";
import CheckDelete from "../../components/project/projectCreate/CheckDelete.vue";
import ManageProject from "../../components/project/projectCreate/ManageProject.vue";
export default {
  data() {
    return {
      isLoading: false,
      error: null,
      buttons: ["管理", "删除"],
      isApplying: false,
      isAdding: false,
      isDeleting: false,
      isManaging: false,
      checkDelete: false,
      deleteProjectId: null,
      manageProjectId: null,
    };
  },
  provide() {
    return {
      cancelAdd: this.cancelAdd,
      cancelApply: this.cancelApply,
      cancel2Delete: this.cancel2Delete,
      cancelManage: this.cancelManage,
    };
  },
  components: {
    ProjectItem,
    AddProject,
    ApplyPior,
    CheckDelete,
    ManageProject,
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
    applyPior() {
      this.isApplying = true;
    },
    addProject() {
      this.isAdding = true;
    },

    handleDelete(projectId) {
      //console.log(projectId);
      this.deleteProjectId = projectId;
      this.isDeleting = true;
    },
    handleManage(projectId) {
      this.manageProjectId = projectId;
      //console.log(projectId);
      this.isManaging = true;
    },
    cancelManage() {
      this.isManaging = false;
    },
    confirmDelete() {
      this.isDeleting = false;
      this.checkDelete = true;
    },
    cancelDelete() {
      this.isDeleting = false;
    },
    cancel2Delete() {
      this.checkDelete = false;
    },
    cancelAdd() {
      this.isAdding = false;
    },
    cancelApply() {
      this.isApplying = false;
    },
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
      this.loadProjects("0");
    },
  },
  created() {
    console.log(this.$store.getters.token);
    this.loadProjects("0");
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
  font-size: 1vw;
}

.apply-button {
  color: #eebefa;
  align-self: flex-start;
  padding: 0.2vw 0.6vw;
  font-size: 0.8vw;
  background-color: transparent;
  border: none;
  align-self: center;
}

.apply-button:active,
.apply-button:hover {
  color: #da77f2;
  background-color: transparent;
  border: none;
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
.btn-box {
  display: flex;
  gap: 1vw;
}
.message-button {
  border-radius: 8px;
  font-size: 1vw;
}
</style>
