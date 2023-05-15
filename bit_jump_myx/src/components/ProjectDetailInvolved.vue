<script setup>
import ProjectIntroduction from "@/components/ProjectIntroduction.vue";
import ProjectProcess from "@/components/ProjectProcess.vue";
import ProcessBar from "@/components/ProcessBar.vue";
import {computed, reactive} from "vue";

let introductionData = reactive({
    projectUrl: '',
    projectName: '123',
    leaderName: 'myx',
    budget: '1000',
    introduction: 'dolor nulla do exercitation nostrud',
});

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
            ownerName:'123',
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
            ownerName:'123',
            isFinished:false,
            finishTime:'',
            description:'12321312321312321321'}
    ]
})

let processPercentage = computed(() =>
    100 * processData.processTable.filter(tab => tab.isFinished === true).length /processData.processTable.length + '%'
)
</script>

<template>
    <ProjectIntroduction :data="introductionData"></ProjectIntroduction>
    <br>
    <ProjectProcess :data="processData.processTable" :is-manager="false"></ProjectProcess>
    <br>
    <ProcessBar :data="processPercentage"></ProcessBar>
</template>

<style scoped>

</style>