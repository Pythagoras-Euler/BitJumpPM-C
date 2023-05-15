<script>
    export default {
        props: {
            data: Array,
            isManager:Boolean
        },

        mounted() {
            console.log(this.data)
        }
    }
</script>

<template>
    <h2>项目进展</h2>
    <br>
    <div>
        <div class="align-inline">
            <button v-if="isManager" style="margin-right: 20px">添加</button>
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
            <tr v-for="(data, index) of data" :key="index">
                <td>{{data.processTable}}</td>
                <td>{{data.beginTime}}</td>
                <td>{{data.endTime}}</td>
                <td>{{data.ownerId}}</td>
                <td>{{data.ownerName}}</td>
                <td>{{data.isFinished}}</td>
                <td>{{data.finishTime}}</td>
                <td>{{data.description}}</td>
                <td>
                    <button v-if="isManager && data.isFinished">驳回</button>
                    <button v-if="!isManager && data.isFinished">提交</button>
                </td>
            </tr>
        </table>
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
</style>