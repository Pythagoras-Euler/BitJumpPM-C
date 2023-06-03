<template>
  <div class="container">
    <div v-if="isLoading" class="spinner">
      <BaseSpinner></BaseSpinner>
    </div>
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
    <BaseButton link mode="flat" to="/project" class="btn-router"
      >返回主页</BaseButton
    >
    <ChangeInfo :isDisabled="isDisabled"></ChangeInfo>
  </div>
</template>

<script>
import ChangeInfo from "@/components/project/personalInfo/ChangeInfo.vue";

export default {
  props: ["userId"],
  components: {
    ChangeInfo,
  },

  data() {
    return {
      isLoading: false,
      error: "",
      isDisabled: true,
    };
  },
  computed: {
    token() {
      return this.$store.getters["token"];
    },
    currentUserId() {
      return this.$store.getters["userId"];
    },

    personalData() {
      this.$store.getters["projects/personalData"];
    },
  },
  methods: {
    // TODO: 这里有通信代码，获取个人详情的
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
    setReadMode() {
      const viewedId = this.userId;
      const userId = this.currentUserId;
      if (viewedId === userId) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    confirmError() {
      this.error = null;
    },
  },
  created() {
    this.loadPersonalData();
    this.setReadMode();
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

  background: linear-gradient(to right, #c3fae8, #a5d8ff);
}
.message-button {
  border-radius: 6px;
  font-size: 1vw;
}
.btn-router {
  width: 7vw;
  height: 3vw;
  position: fixed;
  left: 0;
  top: 0;
  color: #555;
  display: flex;
  align-items: center;
}

.btn-router:active,
.btn-router:hover {
  background-color: #22b8cf;
  color: #fff;
}
</style>
