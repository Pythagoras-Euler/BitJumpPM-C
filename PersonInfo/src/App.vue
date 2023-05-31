<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ChangeInfo from './components/ChangeInfo.vue'
import ChangeWork from "@/components/ChangeWork.vue";
import MainDatePage from "@/components/mainDatePage.vue";
// import InfoCards from "@/components/InfoCards.vue";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div>
<!--      <HelloWorld msg="You did it!" />-->
<!--<info-cards/>-->
<!--        <el-button> My Button </el-button>-->
<!--        <change-info />-->
<!--        <change-work/>?-->

    </div>
  </header>

  <main>
<!--    <TheWelcome />-->
<!--      <change-info />-->
      <main-date-page/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
