<script>
export default {
  props: ["projectUrl", "projectName", "leaderName", "budget", "introduction"],
  data() {
    return {
      data: {
        projectUrl: this.projectUrl,
        projectName: this.projectName,
        leaderName: this.leaderName,
        introduction: this.introduction,
        budget: this.budget,
      },
    };
  },
};
</script>

<template>
  <div class="align-inline align-center">
    <div style="margin: 50px">
      <img :src="data.projectUrl" alt="无法加载图片" />
    </div>
    <div style="width: 800px">
      <div class="align-inline">
        <h2>&emsp;项目名：</h2>
        <textarea readonly v-model="data.projectName"></textarea>
      </div>
      <br />
      <div class="align-inline">
        <h2>&emsp;负责人：</h2>
        <textarea readonly v-model="data.leaderName"></textarea>
      </div>
      <br />
      <div class="align-inline">
        <h2>项目预算：</h2>
        <textarea readonly v-model="data.budget"></textarea>
      </div>
      <br />
      <div class="align-inline">
        <h2>项目简介：</h2>
        <textarea
          readonly
          v-model="data.introduction"
          style="width: 400px; height: 100px"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
.align-inline {
  display: flex;
  align-content: center;
}

.align-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

textarea {
  border-radius: 0;
  resize: none;
  padding: 5px;
  border: 1px solid #ccc;
  font-size: 20px;
  height: 40px;
}
</style>
