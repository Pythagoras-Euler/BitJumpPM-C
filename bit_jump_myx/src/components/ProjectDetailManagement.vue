<script setup>
    import ProjectIntroduction from "@/components/ProjectIntroduction.vue";
    import ProjectProcess from "@/components/ProjectProcess.vue";
    import ProcessBar from "@/components/ProcessBar.vue";
    import ProjectMembers from "@/components/ProjectMembers.vue";

    import {computed, reactive} from "vue";
    //方便调试，把项目信息拆为三部分
    //特定项目信息的第一部分
    let introductionData = reactive({
        projectUrl: 'https://via.placeholder.com/300',
        projectName: '123',
        leaderName: 'myx',
        budget: '1000',
        introduction: 'dolor nulla do exercitation nostrud',
        process:49
    });

    //成员部分
    let membersData = reactive({
        members: [
            {
                userId:1,
                name:'myx',
                photoUrl:'https://via.placeholder.com/30',
                post:'123',
                process:50
            },
            {
                userId:2,
                name:'sda',
                photoUrl:'https://via.placeholder.com/30',
                post:'42412',
                process:58
            },
            {
                userId:3,
                name:'hgf',
                photoUrl:'https://via.placeholder.com/30',
                post:'234',
                process:21
            }
        ]
    })
    //进展表部分
    let processData = reactive({
        processTable: [
            {
                tableItemId:1,
                beginTime:'1:00',
                endTime:'2:00',
                ownerId:1,
                ownerName:'myx',
                isFinished:true,
                finishTime:'12:00',
                description:'123'},
            {
                tableItemId:2,
                beginTime:'2:00',
                endTime:'9:00',
                ownerId:2,
                ownerName:'lll',
                isFinished:false,
                finishTime:'',
                description:'123'},
            {
                tableItemId:3,
                beginTime:'0:00',
                endTime:'0:00',
                ownerId:3,
                ownerName:'myx',
                isFinished:false,
                finishTime:'',
                description:'123'},
            {
                tableItemId:4,
                beginTime:'12:00',
                endTime:'21:00',
                ownerId:4,
                ownerName:'xxx',
                isFinished:false,
                finishTime:'',
                description:'12321312321312321321'}
        ]
    })
/*
    let processPercentage = computed(() =>
        100 * processData.processTable.filter(tab => tab.isFinished === true).length /processData.processTable.length + '%'
    )*/
</script>

<template>
    <button class="arrow-button"></button>
    <ProjectIntroduction :data="introductionData"></ProjectIntroduction>
    <br>
    <ProjectProcess :processData="processData.processTable" :is-manager="true"></ProjectProcess>
    <br>
    <ProcessBar :process="introductionData.process"></ProcessBar>
    <ProjectMembers :members="membersData.members" :isManager="true"></ProjectMembers>
</template>

<style scoped>
.arrow-button {
    width: 50px;
    height: 50px;
    background-image: url(@/assets/arrow.svg);
    background-size: contain;
    background-repeat: no-repeat;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: fixed;
    top: 10px;
    left: 10px;
}

.arrow-button {
    /* 其他样式 */
    z-index: 9999;
}
</style>