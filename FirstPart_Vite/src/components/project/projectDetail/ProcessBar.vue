<script>
export default {
  props: ["process"],
};
</script>

<template>
  <div class="progress-bar" :title="'进度：' + this.process + '%'">
    <div class="progress" :style="{ width: process.toString() + '%' }"></div>
  </div>
</template>

<style scoped>
.progress-bar {
  background-color: #f0f0f0;
  box-shadow: 3px 3px 3px #888888;
  width: 80%;
  overflow: hidden;
  border-radius: 20px;
  height: 2.5vw;
  margin: 1vw;
}
/* .progress-bar {
  height: 25px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
  width: 80%;
  box-shadow: 3px 3px 3px #888888;
} */

.progress {
  height: 100%;
  background-color: #009dff;
}
</style>
