<template>
  <teleport to="body">
    <transition name="back">
      <div
        v-if="show"
        @click="tryClose"
        class="backdrop"
        :class="{ 'form-backdrop': setFormBackdrop }"
      ></div>
    </transition>
    <transition name="dialog">
      <dialog
        open
        v-if="show"
        :class="{ dialog: setDefaultBoxStyle, 'form-style': setFormStyle }"
      >
        <header
          :class="{
            header: setDefaultHeaderStyle,
            'form-header': setFormStyle,
          }"
        >
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
        </header>
        <section
          :class="{ text: setDefaultBodyStyle, 'form-body': setFormStyle }"
        >
          <slot></slot>
        </section>
        <menu
          v-if="!fixed"
          :class="{ menu: setDefaultMenuStyle, 'form-bottom': setFormStyle }"
        >
          <slot name="action">
            <BaseButton @click="tryClose">关闭</BaseButton>
          </slot>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    //控制窗口是否显示
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    //fixed为真时，窗口无法手动关闭
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    setDefaultBoxStyle: {
      type: Boolean,
      required: false,
      default: true,
    },
    setFormStyle: {
      type: Boolean,
      required: false,
      default: false,
    },
    setDefaultHeaderStyle: {
      type: Boolean,
      required: false,
      default: true,
    },
    setDefaultBodyStyle: {
      type: Boolean,
      required: false,
      default: true,
    },
    setDefaultMenuStyle: {
      type: Boolean,
      required: false,
      default: true,
    },
    setFormBackdrop: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    tryClose() {
      if (!this.fixed) {
        this.$emit("close");
      }
    },
  },
};
</script>

<style scoped>
/* 窗口动画 */
.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.back-enter-from,
.back-leave-to {
  opacity: 0;
}

.back-enter-to,
.back-leave-from {
  opacity: 1;
}

.back-enter-active {
  transition: all 0.3s ease-out;
}

.back-leave-active {
  transition: all 0.3s ease-in;
}
/* 背景黑色覆盖 */
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
.form-backdrop {
  z-index: 150;
}
.form-style {
  position: fixed;
  /* padding: 1vw; */
  top: 8vh;
  left: 18%;
  width: 65vw;
  height: 38vw;

  z-index: 100;
  border-radius: 3px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  /* gap: 1vw; */
}

.form-header {
  flex: 1 1 10%;

  border-bottom: 3px solid #a5d8ff;
}

.form-body {
  flex: 8 8 80%;

  overflow: auto;
}

.form-bottom {
  flex: 1 1 10%;
}
/* 其他正常设置 */
.dialog {
  position: fixed;
  padding: 1vw;
  top: 32vh;
  left: 38%;
  width: 26vw;

  z-index: 200;
  border-radius: 6px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 1vw;
}

.text {
  /* font-size: 10px; */
  font-size: 0.8vw;
  display: flex;
  flex-direction: column;
  /* gap: 8px; */
  gap: 0.8vw;
  color: #495057;
}
.header {
  color: #000;
  font-size: 11px;
  font-size: 0.9vw;

  /* padding-bottom: 6px; */
  padding-bottom: 0.5vw;
  /* margin-bottom: 4px; */
  margin-bottom: 0.3vw;
  border-bottom: 3px solid #a5d8ff;
}

.menu {
  display: flex;
  justify-content: flex-end;
}
</style>
