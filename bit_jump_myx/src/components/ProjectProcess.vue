<script>
import {computed, reactive} from "vue";
import PopupAddTask from "@/components/PopupAddTask.vue";
import PopupReject from "@/components/PopupReject.vue";
import PopupSubmit from "@/components/PopupSubmit.vue";

    export default {
        components: {
            PopupSubmit,
            PopupReject,
            PopupAddTask,
        },

        props: {
            projectId: Number,
            processData: Array,
            membersData: Array,
            isManager:Boolean
        },

        setup(props) {
            let data = reactive({
                sortOrder: 0,
                isPopupRejectOpen: false,
                isPopupAddTask: false,
                isPopupSubmitOpen: false,
                itemClicked: null
            })

            let sortedData = computed(() => {
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

            function reject(item) {
                data.itemClicked = item
                data.isPopupRejectOpen = true
            }

            function submit(item) {
                data.itemClicked = item
                data.isPopupSubmitOpen = true
            }

            function addTask() {
                data.isPopupAddTask = true
            }

            return {
                data,
                sortedData,
                handleSortOrderChange,
                reject,
                submit,
                addTask
            }
        }
    }
</script>

<template>
    <h2>项目进展</h2>
    <br>
    <div class="div-style">
        <div class="align-inline">
            <button v-if="isManager" class="create-button" @click="addTask">添加</button>
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
                <td>动作</td>
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
                    <button v-if="isManager && data.isFinished" class="reject-button" @click="reject(data)">驳回</button>
<!--                    todo 这里还应该有个判断条件：责任人必须是自己才显示提交按钮-->
                    <button v-if="!isManager && data.isFinished" class="submit-button" @click="submit(data)">提交</button>
                </td>
            </tr>
        </table>
    </div>
    <PopupAddTask :is-popup-open="data.isPopupAddTask" :project-id="this.projectId" @cancel="data.isPopupAddTask=false" :members-data="membersData"></PopupAddTask>
    <PopupReject :is-popup-open="data.isPopupRejectOpen" :project-id="this.projectId" :item="data.itemClicked" @cancel="data.isPopupRejectOpen=false" @open="data.isPopupRejectOpen=true"></PopupReject>
    <PopupSubmit :is-popup-open="data.isPopupSubmitOpen" :project-id="this.projectId" :item="data.itemClicked" @cancel="data.isPopupSubmitOpen=false" @open="data.isPopupSubmitOpen=true"></PopupSubmit>
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

    .create-button {
        background-color: purple;
        color: white;
        padding: 6px 12px;
        font-size: 14px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 20px;
    }

    .reject-button {
        background-color: darkred;
        color: white;
        border: none;
        padding: 6px 10px;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
        width: 50px;
    }

    .submit-button {
        background-color: darkblue;
        color: white;
        border: none;
        padding: 6px 10px;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
        width: 50px;
    }
</style>