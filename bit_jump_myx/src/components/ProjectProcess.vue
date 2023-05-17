<script>
import {computed, reactive} from "vue";
import PopupRejection from "@/components/PopupRejection.vue";

    export default {
        components: {
            PopupRejection
        },

        props: {
            processData: Array,
            isManager:Boolean
        },

        setup(props) {
            let data = reactive({
                sortOrder:0,
                isPopupRejectionOpen:false
            })

            let sortedData = computed(() => {
                console.log(props.processData)
                switch (data.sortOrder) {
                    case 0:
                        return props.processData.slice().sort((a, b) => {
                            return a.beginTime.localeCompare(b.beginTime)
                        })
                    case 1:
                        return props.processData.slice().sort((a, b) => {
                            return a.endTime.localeCompare(b.endTime)
                        })
                    case 2:
                        return props.processData.slice().sort((a, b) => {
                            return a.ownerName.localeCompare(b.ownerName)
                        })
                    case 3:
                        return props.processData.slice().sort((a, b) => {
                            return a.finishTime.localeCompare(b.finishTime)
                        })
                }
            })

            function handleSortOrderChange(event) {
                switch (event.target.value) {
                    case "optionTimeStart":
                        data.sortOrder = 0
                        break
                    case "optionTimeEnd":
                        data.sortOrder = 1
                        break
                    case "optionLeaderName":
                        data.sortOrder = 2
                        break
                    case "optionTimeSubmit":
                        data.sortOrder = 3
                        break
                }
            }

            function reject() {
                data.isPopupRejectionOpen = true
                console.log(1)
            }

            return {
                data,
                sortedData,
                handleSortOrderChange,
                reject
            }
        }
    }
</script>

<template>
    <h2>项目进展</h2>
    <br>
    <div class="div-style">
        <div class="align-inline">
            <button v-if="isManager" style="margin-right: 20px">添加</button>
            <select @change="handleSortOrderChange">
                <option value="optionTimeStart">按照开始时间排序</option>
                <option value="optionTimeEnd">按照结束时间排序</option>
                <option value="optionLeaderName">按照负责人姓名排序</option>
                <option value="optionTimeSubmit">按照提交时间排序</option>
            </select>
        </div>
        <br>
        <table class="table-style">
            <tr class="tr-bold">
                <td>序号</td>
                <td>任务说明</td>
                <td>开始时间</td>
                <td>结束时间</td>
                <td>责任人</td>
                <td>是否完成</td>
                <td>完成时间</td>
                <td>提交说明</td>
                <td></td>
            </tr>
            <tr v-for="(data, index) of sortedData" :key="index">
                <td>{{data.tableItemId}}</td>
                <td>{{data.description}}</td>
                <td>{{data.beginTime}}</td>
                <td>{{data.endTime}}</td>
                <td>{{data.ownerName}}</td>
                <td>{{data.isFinished}}</td>
                <td>{{data.finishTime}}</td>
                <td>{{data.description}}</td>
                <td>
                    <button v-if="isManager && data.isFinished" @click="reject">驳回</button>
                    <button v-if="!isManager && data.isFinished">提交</button>
                </td>
            </tr>
        </table>
    </div>
    <PopupRejection :isPopupOpen=data.isPopupRejectionOpen></PopupRejection>
</template>

<style scoped>
    .align-inline {
        display: flex;
        align-content: center;
    }

    td {
        text-align: center;
    }

    .div-style {
        border: 2px solid lightgray;
        border-radius: 10px;
        padding: 10px;
    }

    .table-style {
        border-collapse: collapse;
        width: 100%;
    }

    .table-style tr:nth-child(even) {
        background-color: #e3e3e3;
    }

    .table-style tr:nth-child(odd) {
        background-color: white;
    }

    .table-style td {
        border: 1px solid lightgray;
        padding: 8px;
    }

    .tr-bold td {
        font-weight: bold;
    }
</style>