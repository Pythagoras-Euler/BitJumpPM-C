<script>
    export default {
        props:{
            data:String
        },
    }
</script>

<template>
    <div class="progress-bar">
        <div class="progress" :style="{width: data}"></div>
    </div>
</template>

<style scoped>
    .progress-bar {
        width: 800px;
        height: 20px;
        background-color: #f0f0f0;
        border-radius: 10px;
        overflow: hidden;
    }

    .progress {
        height: 100%;
        background-color: #009DFF;
    }
</style>