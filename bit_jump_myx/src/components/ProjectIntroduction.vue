<script setup>
  import {reactive} from "vue";

  export default {
      name:'ProjectIntroduction',
      setup() {
          let data = reactive({
              projectUrl:'http://http://rjpy.iq/ikuejpjy',
              projectName:'123',
              leaderName:'myx',
              budget:'1000',
              introduction:'dolor nulla do exercitation nostrud',
          })

          return {
              data
          }
      }
  }
</script>

<template>
  <h2>项目名：</h2>
  <
</template>

<style scoped>

</style>