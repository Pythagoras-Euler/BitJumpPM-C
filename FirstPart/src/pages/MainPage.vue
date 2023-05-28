<template>
  <MainBackground>
    <BaseCard class="card">
      <h1>页面正在开发中</h1>
      <p>
        抱歉，页面正在开发中，可以先访问我们的<router-link to="/manage"
          >管理页面</router-link
        >
      </p>
    </BaseCard>
  </MainBackground>
</template>
<style scoped>
.card {
  position: fixed;
  top: 20vh;
  width: 32vw;
  height: 15vw;
  left: 32%;
  /* padding: 3.6rem; */
  padding: 2vw;

  display: flex;
  flex-direction: column;
  /* gap: 3.6rem; */
  gap: 2.5vw;
}
p {
  /* font-size: 1.6rem; */
  font-size: 1.2vw;
}
h1 {
  font-size: 1.6vw;
}
</style>
