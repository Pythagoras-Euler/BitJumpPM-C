<template>
  <BaseCard class="card">
    <h1>页面不存在</h1>
    <p>
      抱歉，页面不存在，可能您是想访问我们的<router-link to="/"
        >主页</router-link
      >
    </p>
  </BaseCard>
</template>

<style scoped>
.card {
  position: fixed;
  top: 20vh;
  width: 30%;
  height: 30%;
  left: 35%;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 36px;
}
p {
  font-size: 16px;
}
</style>
