<template>
  <div class="container">
    <nav>
      <button class="btn-nav">主页</button>
      <button class="btn-nav">我创建的</button>
      <button class="btn-nav">我管理的</button>
      <button class="btn-nav">我加入的</button>
    </nav>
    <menu> 萌新1 </menu>

    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 28px 1fr;
  height: 100vh;
  text-align: center;
  font-weight: bold;
}
menu {
  background-color: #a5d8ff;
  color: #fff;
  grid-column: 2/-1;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 40px;
}
nav {
  padding-top: 24px;
  gap: 24px;
  background-color: #bac8ff;
  color: #fff;
  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
}

button {
  display: inline-block;
  font-size: 12px;
  font-weight: bold;

  border: none;
  cursor: pointer;
  color: #fff;
  padding: 8px 12px;
}
.btn-nav {
  margin: 0 11px;
  text-align: center;
  height: 55px;
  width: auto;
  background-color: #868e96;
}
.btn-nav:first-child {
  background-color: #4c6ef5;
}
</style>
