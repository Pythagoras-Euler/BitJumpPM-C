<script>
import {computed, reactive} from "vue";

    export default {
        name:'ProjectProcess',
        setup() {
            let data = reactive({
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
                100 * data.processTable.filter(tab => tab.isFinished === true).length / data.processTable.length + '%'
            )

            return {
                data,
                processPercentage
            }
        }
    }
</script>

<template>
    <h2>项目进展</h2>
    <br>
    <div>
        <div class="align-inline">
            <button style="margin-right: 20px">添加</button>
            <select>
                <option value="optionTimeStart">按照开始时间排序</option>
                <option value="optionTimeEnd">按照结束时间排序</option>
                <option value="optionLeaderName">按照负责人姓名排序</option>
                <option value="optionTimeSubmit">按照提交时间排序</option>
            </select>
        </div>
        <br>
        <table>
            <tr>
                <td>序号</td>
                <td>任务名</td>
                <td>开始时间</td>
                <td>结束时间</td>
                <td>责任人</td>
                <td>是否完成</td>
                <td>完成时间</td>
                <td>提交说明</td>
                <td></td>
            </tr>
            <tr v-for="(data, index) of data.processTable" :key="index">
                <td>{{data.tableItemId}}</td>
                <td>{{data.beginTime}}</td>
                <td>{{data.endTime}}</td>
                <td>{{data.ownerId}}</td>
                <td>{{data.ownerName}}</td>
                <td>{{data.isFinished}}</td>
                <td>{{data.finishTime}}</td>
                <td>{{data.description}}</td>
                <td><button v-if="data.isFinished">驳回</button></td>
            </tr>
        </table>
    </div>
    <br>
    <div>
        <div class="progress-bar">
            <div class="progress" :style="{width: processPercentage}"></div>
        </div>
    </div>
</template>

<style scoped>
    .align-inline {
        display: flex;
        align-content: center;
    }

    td {
        text-align: center;
    }

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