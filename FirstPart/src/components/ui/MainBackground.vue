<template>
  <div class="container">
    <nav>
      <BaseButton link mode="outline" to="/project/main" class="btn-nav"
        >主页</BaseButton
      >
      <BaseButton link mode="outline" to="/project/create" class="btn-nav"
        >我创建的</BaseButton
      >
      <BaseButton mode="outline" link to="/project/manage" class="btn-nav"
        >我管理的</BaseButton
      >
      <BaseButton mode="outline" link to="/project/joined" class="btn-nav"
        >我加入的</BaseButton
      >
    </nav>
    <menu> 萌新1 </menu>

    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 6vw 1fr;
  grid-template-rows: 2vw 1fr;
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
  /* padding: 0 40px; */
  padding: 0 3vw;
  font-size: 1vw;
}
nav {
  /* padding-top: 24px; */
  padding-top: 2vw;
  /* gap: 24px; */
  gap: 1.8vw;
  background-color: #bac8ff;
  color: #fff;
  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
}

/* button {
  display: inline-block;
  font-size: 12px;
  font-size: 0.9vw;
  font-weight: bold;

  border: none;
  cursor: pointer;
  color: #fff;

  padding: 8px 12px;
  padding: 0.2vw 0.2vw;
} */
.btn-nav {
  /* margin: 0 11px; */
  margin: 0 0.9vw;
  padding: 0.2vw 0.2vw;
  /* text-align: center; */
  /* height: 55px; */
  height: 3.5vw;
  width: auto;
  font-size: 1.1vw;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #868e96; */

  border-color: #fff;
  color: #fff;

  border-radius: 3px;
}

.btn-nav:hover,
.btn-nav:active,
.btn-nav.router-link-active {
  background-color: #be4bdb;
  border: none;
}
</style>
