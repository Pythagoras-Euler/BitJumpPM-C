<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="intro-content">
    <div class="img-box">
      <img class="img-round" :src="data.projectUrl" alt="无法加载图片" />
    </div>
    <div class="info-box">
      <h2>&emsp;项目名：</h2>
      <input readonly v-model="data.projectName" />

      <!-- <br /> -->

      <h2>&emsp;负责人：</h2>
      <input readonly v-model="data.leaderName" />

      <!-- <br /> -->

      <h2>项目预算：</h2>
      <input readonly v-model="data.budget" class="normal-text" />
      <!-- <br /> -->

      <h2 class="textarea-label">项目简介：</h2>
      <textarea rows="3" readonly v-model="data.introduction"></textarea>
    </div>
  </div>
</template>

<style scoped>
.intro-content {
  width: 60%;
  display: flex;
  /* background-color: #fff; */
  gap: 3vw;
  padding: 1vw;
  padding-left: 0;
  margin-top: 1vw;

  /* border-radius: 15px;
  box-shadow: 1px 1px 1px #888888; */
}
.img-box {
  flex: 2 2 20%;
  display: flex;
  align-items: center;
  /* padding-left: 3vw; */
}

.info-box {
  padding: 1vw;
  flex: 8 8 80%;
  background-color: rgba(109, 192, 192, 0.82);
  display: grid;
  grid-template-columns: 6vw 1fr;
  row-gap: 1vw;
  align-items: center;

  border-radius: 15px;
  box-shadow: 1px 1px 1px #888888;
}

/* .normal-entry {
  width: 60%;
} */
.img-round {
  border: 2px solid rgba(109, 192, 192, 0.82); /* 添加圆形边框 */
  border-radius: 15px;
  box-shadow: 1px 1px 1px #888888;
  height: 15vw;
  width: 15vw;
}

.textarea-label {
  align-self: self-start;
  padding-top: 0.5vw;
}

input {
  height: 100%;
  padding: 5px;
  color: black;
  font-size: 1.2vw;
  border: 1px solid #ccc;
  width: 60%;
}
textarea {
  resize: none;
  padding: 5px;
  border: 1px solid #ccc;
  font-size: 1.2vw;
  height: 100%;
  overflow-y: auto;
}

textarea::-webkit-scrollbar {
  width: 0; /* 隐藏滚动条的宽度 */
  height: 0; /* 隐藏滚动条的高度 */
}

h2 {
  flex: 2 2 20%;
  color: white;
}
</style>
