<script>
export default {
    props: {
        data:{
            projectUrl:String,
            projectName:String,
            leaderName:String,
            budget:String,
            introduction:String
        }
    },
};
</script>

<template>
    <div class="align-inline align-center">
        <div style="margin: 50px">
            <img :src=data.projectUrl alt="无法加载图片">
        </div>
        <div>
            <div class="align-inline">
                <h2>&emsp;项目名：</h2>
                <input readonly v-model="data.projectName">
            </div>
            <br>
            <div class="align-inline">
                <h2>&emsp;负责人：</h2>
                <input readonly v-model="data.leaderName">
            </div>
            <br>
            <div class="align-inline">
                <h2>项目预算：</h2>
                <input readonly v-model="data.budget">
            </div>
            <br>
            <div class="align-inline">
                <h2>项目简介：</h2>
                <input readonly v-model="data.introduction" style="width: 400px; height: 100px">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .align-inline {
        display: flex;
        align-content: center;
    }

    .align-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        border-radius: 0;
    }
</style>