<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"> </component>
    </transition>
  </router-view>
</template>

<script>
export default {};
</script>

<style>
/*全局css样式设置*/
/*
--------------------------------------------------------------------------
--- 01 TYPOGRAPHY SYSTEM 【字体设置】
- Font sizes(px): 【字体大小】
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
- Font Weight:【字体粗细】
Default:400
- Line Height: 【行高】
Default:1
--------------------------------------------------------------------------
--- 02 COLORS 【颜色系统】
- Primary【主颜色】

- Greys:  【灰色】
#555
- Tints:  【浅色系】
- Shades: 【深色系】
- Acents: 【其他颜色】
--------------------------------------------------------------------------
--- 03 SHADOWS 【阴影设置】  
--------------------------------------------------------------------------
--- 04 BORDER-RADIUS 【边界圆润度】
--------------------------------------------------------------------------
--- 05 WHITESPACE 【空格等级】
- SPACEING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Noto Sans SC", sans-serif;
}

html {
  /* Set rem */
  /* percentage of user-browser setting */
  font-size: 62.5%;
}

body {
  /* ------------------------------ Initial setup ----------------------------- */

  line-height: 1;
  font-weight: 400;
  color: #555;
  overflow: hidden;
  /* -------------------------------------------------------------------------- */
}

@media (max-width: 768px) {
  html {
    /* Set rem */
    /* percentage of user-browser setting */
    font-size: 50%;
  }
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
