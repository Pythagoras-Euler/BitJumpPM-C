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
  <div class="align-inline align-center div-style">
    <div style="margin: 50px">
      <img class="img-round" :src="data.projectUrl" alt="无法加载图片" />
    </div>
    <div class="div-style" style="background-color: rgba(109,192,192,0.82)">
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
.img-round {
    border: 2px solid #beffff; /* 添加圆形边框 */
    box-shadow: 1px 1px 1px #888888;
}

.align-inline {
  display: flex;
}

.align-center {
  display: flex;
  align-items: center;
    width: fit-content;
}

textarea {
  border-radius: 0;
  resize: none;
  padding: 5px;
  border: 1px solid #ccc;
  font-size: 20px;
  height: 40px;
    overflow-y: auto;
}

textarea::-webkit-scrollbar {
    width: 0; /* 隐藏滚动条的宽度 */
    height: 0; /* 隐藏滚动条的高度 */
}

.div-style {
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    max-width: 80%;
    background-color: #dbffff;
    box-shadow: 2px 2px 2px #888888;
    padding: 20px;
}

h2 {
    color: white;
}


</style>
