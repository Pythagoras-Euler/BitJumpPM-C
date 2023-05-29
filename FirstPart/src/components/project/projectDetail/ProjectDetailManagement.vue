<script setup>
import ProjectIntroduction from "./ProjectIntroduction.vue";
import ProjectProcess from "./ProjectProcess.vue";
import ProcessBar from "./ProcessBar.vue";
import ProjectMembers from "./ProjectMembers.vue";

import { reactive } from "vue";

//todo 通信，这部分需要替换为通信取到的特定项目信息
//方便调试，把项目信息拆为三部分
//特定项目信息的第一部分
let introductionData = reactive({
  projectId: 1,
  projectUrl: "https://via.placeholder.com/300",
  projectName: "123",
  leaderName: "myx",
  budget: "1000",
  introduction: "dolor nulla do exercitation nostrud",
  process: 49,
});

//成员部分
let membersData = reactive({
  members: [
    {
      userId: 1,
      name: "myx",
      photoUrl: "https://via.placeholder.com/30",
      post: "123",
      process: 50,
    },
    {
      userId: 2,
      name: "sda",
      photoUrl: "https://via.placeholder.com/30",
      post: "42412",
      process: 58,
    },
    {
      userId: 3,
      name: "hgf",
      photoUrl: "https://via.placeholder.com/30",
      post: "234",
      process: 21,
    },
  ],
});
//进展表部分
let processData = reactive({
  processTable: [
    {
      tableItemId: 1,
      beginTime: "1:00",
      endTime: "2:00",
      ownerId: 1,
      ownerName: "myx",
      isFinished: true,
      finishTime: "12:00",
      description: "123",
    },
    {
      tableItemId: 2,
      beginTime: "2:00",
      endTime: "9:00",
      ownerId: 2,
      ownerName: "lll",
      isFinished: false,
      finishTime: "",
      description: "123",
    },
    {
      tableItemId: 3,
      beginTime: "0:00",
      endTime: "0:00",
      ownerId: 3,
      ownerName: "myx",
      isFinished: false,
      finishTime: "",
      description: "123",
    },
    {
      tableItemId: 4,
      beginTime: "12:00",
      endTime: "21:00",
      ownerId: 4,
      ownerName: "xxx",
      isFinished: false,
      finishTime: "",
      description: "12321312321312321321",
    },
  ],
});

// function returnArrow() {
//   //todo 返回项目预览页
//   this.$router.go(-1);
// }
</script>

<template>
  <!--    返回按钮-->
  <router-link class="arrow-button" to="/manage"></router-link>
  <ProjectIntroduction :data="introductionData"></ProjectIntroduction>
  <br />
  <ProjectProcess
    :project-id="introductionData.projectId"
    :process-data="processData.processTable"
    :members-data="membersData.members"
    :is-manager="true"
  ></ProjectProcess>
  <br />
  <ProcessBar :process="introductionData.process"></ProcessBar>
  <ProjectMembers
    :project-id="introductionData.projectId"
    :members="membersData.members"
    :isManager="true"
  ></ProjectMembers>
</template>

<style scoped>
.arrow-button {
  width: 50px;
  height: 50px;
  background-image: url(@/assets/arrow.svg);
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: fixed;
  top: 10px;
  left: 10px;
  transition: background-color 0.5s ease;
  cursor: pointer;
}

.arrow-button:hover {
  background-color: darkgray;
}
</style>
