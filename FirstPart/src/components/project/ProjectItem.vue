<template>
  <li>
    <BaseCard class="item-box" mode="flat">
      <div class="project-info">
        <img class="project-img" alt="项目图片" :src="projectUrl" />
        <div class="name-box">
          {{ projectName }}
        </div>
      </div>
      <div class="leader-box">
        <p>负责人：</p>
        <p class="name-box">{{ leaderName }}</p>
      </div>
      <div class="end-box">
        <div class="process-box">
          <ProgressBar :process="process"></ProgressBar>
        </div>
        <div class="button-box">
          <BaseButton
            class="button"
            v-for="button in buttons"
            :key="button"
            :link="isButtonRouter(button)"
            :to="routerPath"
            @click="setButtonAction(button)"
            >{{ button }}</BaseButton
          >
        </div>
      </div>
    </BaseCard>
  </li>
</template>

<script>
export default {
  props: [
    "projectId",
    "projectUrl",
    "leaderId",
    "leaderName",
    "projectName",
    "process",
    "buttons",
  ],
  data() {
    return {};
  },

  computed: {
    routerPath() {
      return this.$route.path + "/" + this.projectId;
    },
  },
  methods: {
    isButtonRouter(button) {
      if (button === "详情") {
        return true;
      } else {
        return false;
      }
    },
    setButtonAction(button) {
      if (button === "管理") {
        alert("管理");
      } else if (button === "删除") {
        alert("删除");
      }
    },
  },
};
</script>

<style scoped>
.item-box {
  display: flex;
  justify-content: left;
  border: 1px solid #aaaaaa;
  align-items: center;
  /* padding: 0 12px; */
  padding: 0 1vw;
  /* gap: 32px; */
  gap: 2.5vw;
}

.project-info {
  display: flex;
  width: 30%;
  align-items: center;
  /* gap: 24px; */
  gap: 1.8vw;
  /* border: 1px solid #aaaaaa; */
}

.project-img {
  width: 27%;
  border-radius: 12px;
}
.name-box {
  border: 1px solid #aaaaaa;
  border-radius: 12px;
  /* padding: 12px; */
  padding: 1vw;
  text-align: left;
  flex: 1 1 auto;
}

.leader-box {
  /* border: 1px solid #aaaaaa; */
  flex: 1 1 auto;
  text-align: left;
  display: flex;
  align-items: center;
}

.end-box {
  display: flex;
  align-items: center;

  /* gap: 8px; */
  gap: 0.6vw;
  width: 15%;
  /* padding: 6px 0; */
  padding: 0.5vw 0;
  /*
  border: 1px solid #aaaaaa; */
}
.process-box {
  width: 55%;
}
.button-box {
  /* border: 1px solid #aaaaaa; */
  display: flex;
  flex-direction: column;
  /* gap: 3px; */
  gap: 0.2vw;
}

.button {
  border-color: #be4bdb;
  background-color: #be4bdb;
  color: #fff;
  border-radius: 8px;
  padding: 0.7vw;
  /* font-size: 10px; */
  font-size: 0.8vw;
}

.button:active,
.button:hover {
  color: #fff;
  border-color: #9c36b5;
  background-color: #9c36b5;
}
</style>
