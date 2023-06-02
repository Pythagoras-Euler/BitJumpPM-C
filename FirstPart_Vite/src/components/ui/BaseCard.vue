<template>
  <div :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: "card",
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.flat {
  border-radius: 12px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
}
</style>
