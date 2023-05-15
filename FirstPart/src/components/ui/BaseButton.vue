<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot> </slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  /* font-size: 14px; */
  font-size: 1.1vw;
  text-decoration: none;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #a5d8ff;
  border: 1px solid #a5d8ff;
  color: #636363;
  cursor: pointer;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #4dabf7;
  border-color: #4dabf7;
  color: #ffffff;
}

.transparent {
  /* font-size: 12px; */
  font-size: 0.9vw;
  background-color: transparent;
  border: none;
  color: #fff;
}
.transparent:hover,
.transparent:active {
  background-color: transparent;
  color: #a5d8ff;
}

.outline {
  background-color: transparent;
  border-color: #4dabf7;
  color: #4dabf7;
}

.flat {
  background-color: transparent;
  color: #a5d8ff;
  border: none;
}

.flat:hover,
.flat:active .outline:hover,
.outline:active {
  background-color: #a5d8ff;
}
</style>
