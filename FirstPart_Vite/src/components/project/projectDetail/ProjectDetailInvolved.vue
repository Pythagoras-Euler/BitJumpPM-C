<script setup>
import ProjectIntroduction from "./ProjectIntroduction.vue";
import ProjectProcess from "./ProjectProcess.vue";
import ProcessBar from "./ProcessBar.vue";
import { reactive } from "vue";
import ProjectMembers from "./ProjectMembers.vue";

//todo 通信，这部分需要替换为通信取到的特定项目信息
let data = reactive({
  introductionData: null,
  processData: null,
  membersData: null,
});
//path参数
const proid = 0;
//todo 通信
//query参数
const order = 0;
//无payload参数
try {
  const response = await fetch(
    "http://127.0.0.1:4523/m1/2693357-0-default/project/1"
  );
  const responseData = await response.json();

  if (!response.ok) {
    const error = new Error(responseData.message || "Failed to fetch");
    throw error;
  } else {
    console.log(responseData);
    //接到了数据，这里替换掉你原来直接硬编码进去的数据
    data.introductionData = {
      budget: responseData.data.budget,
      introduction: responseData.data.introduction,
      leaderName: responseData.data.leaderName,
      process: responseData.data.process,
      projectId: responseData.data.projectId,
      projectName: responseData.data.projectName,
      projectUrl: responseData.data.projectPhoto,
    };

    data.processData = responseData.data.table;

    data.membersData = responseData.data.members;

    console.log(data.introductionData);
    console.log(data.processData);
    console.log(data.membersData);
  }
} catch {
  this.error = "抱歉，加载出错，请重试";
}

// function returnArrow() {
//   //todo 返回项目预览页
// }
</script>

<template>
  <div class="content-box">
    <!--    返回按钮-->
    <router-link class="arrow-button" to="/project/joined"></router-link>
    <div class="intro-box">
      <ProjectIntroduction :data="data.introductionData"></ProjectIntroduction>
    </div>
    <div class="table-box">
      <ProjectProcess
        :project-id="data.introductionData.projectId"
        :processData="data.processData"
        :members-data="data.membersData"
        :is-manager="false"
      ></ProjectProcess>
    </div>
    <div class="process-box">
      <ProcessBar :process="data.introductionData.process"></ProcessBar>
    </div>
    <ProjectMembers
      :members="data.membersData"
      :isManager="false"
    ></ProjectMembers>
  </div>
</template>

<style scoped>
.content-box {
  position: fixed;
  height: 100vh;
  overflow: auto;

  /* padding: 50px; */
  display: flex;
  flex-direction: column;

  padding: 0 5vw;
}

.intro-box {
  flex: 3 3 30%;

  /* border: 1px solid black; */
}
.table-box {
  flex: 5 5 50%;
  /* border: 1px solid black; */
}

.process-box {
  flex: 2 2 20%;
  /* border: 1px solid black; */
}

/* -------------------------------------------------------------------------- */
.arrow-button {
  width: 50px;
  height: 50px;
  background-image: url(@/assets/arrow.svg);
  background-size: contain;
  background-repeat: no-repeat;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  position: fixed;
  top: 10px;
  left: 10px;
  transition: background-color 0.5s ease;
  cursor: pointer;
  border: none;
}

.arrow-button:hover {
  background-color: darkgray;
}
</style>
