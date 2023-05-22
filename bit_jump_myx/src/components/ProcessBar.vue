<script>
    export default {
        props:{
            process: Number
        },
    }
</script>

<template>
    <div class="progress-bar" :title="'进度：' + this.process + '%'">
        <div class="progress" :style="{width: this.process.toString()+'%'}"></div>
    </div>
</template>

<style scoped>
    .progress-bar {
        height: 25px;
        background-color: #f0f0f0;
        border-radius: 10px;
        overflow: hidden;
        margin: 20px;
    }

    .progress {
        height: 100%;
        background-color: #009DFF;
    }
</style>