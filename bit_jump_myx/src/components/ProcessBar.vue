<script>
    export default {
        props:{
            process:Number
        },
    }
</script>

<template>
    <div class="progress-bar">
        <div class="progress" :style="{width: this.process.toString()+'%'}"></div>
    </div>
</template>

<style scoped>
    .progress-bar {
        width: 800px;
        height: 20px;
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