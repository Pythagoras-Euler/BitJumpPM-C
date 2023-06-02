<template>
  <el-tag v-if="isShow" :type="tagType" size="small"> event </el-tag>
</template>

<script>
export default {
  props: ["msgType"],
  computed: {
    isShow() {
      if (this.msgType === "null") {
        return false;
      } else {
        return true;
      }
    },

    tagType() {
      if (this.msgType === "null") {
        return "info";
      } else {
        return this.msgType;
      }
    },
  },
};
</script>
