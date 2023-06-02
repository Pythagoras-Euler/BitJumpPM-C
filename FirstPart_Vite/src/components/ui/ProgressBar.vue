<template>
  <div class="progress">
    <svg class="progress__svg" viewBox="0 0 100 100">
      <circle
        class="progress__circle"
        :stroke-dasharray="strokeDasharray"
        :stroke-dashoffset="strokeDashoffset"
        cx="50"
        cy="50"
        r="45"
      ></circle>
    </svg>
    <span class="progress__text">{{ progress }}%</span>
  </div>
</template>

<script>
export default {
  props: ["process"],
  data() {
    return {
      progress: 0, // 进度条百分比
      circumference: 2 * Math.PI * 45, // 圆形进度条的周长
      animationDuration: 1000, // 动画持续时间
      progressOffset: 0, // 动画起始偏移量
    };
  },
  computed: {
    strokeDasharray() {
      // 计算 stroke-dasharray 属性的值
      return `${this.circumference} ${this.circumference}`;
    },
    strokeDashoffset() {
      // 计算 stroke-dashoffset 属性的值
      const progress = this.progress / 100;
      return `${(1 - progress) * this.circumference}`;
    },
  },
  methods: {
    animateProgress(toProgress) {
      let start;
      const step = (timestamp) => {
        if (!start) {
          start = timestamp;
        }
        const progress = Math.min(
          (timestamp - start) / this.animationDuration,
          1
        );
        this.progress = Math.round(progress * toProgress);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    },
  },
  mounted() {
    // 启动动画
    this.animateProgress(this.process);
  },
};
</script>

<style scoped>
.progress {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.progress__svg {
}

.progress__circle {
  fill: none;
  stroke: #91a7ff;
  stroke-width: 5;
  stroke-linecap: round;
  transition: stroke-dashoffset 1s ease-in-out;
  transform-origin: center;
  transform: rotate(-90deg);
}

.progress__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: bold;
}
</style>
