<script>

import FlatPickr from 'vue-flatpickr-component';
export default {
    components: {
        FlatPickr
    },

    props: {
        isPopupOpen:Boolean,
        membersData:Array
    },

    data() {
        return {
            startTime: null,
            endTime: null,
            flatpickrConfig: {
                enableTime: true, // Enable time picker
                dateFormat: 'Y-m-d H:i', // Date and time format
            },
        };
    },
}
</script>

<template>
    <transition name="modal" style="z-index: 999">
        <div v-if="isPopupOpen" class="modal-overlay">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="container">
                        <h2 style="margin-right: 100px">添加任务</h2>
                        <h3 style="color: #cccccc">填写辅助信息</h3>
                    </div>
                    <div class="divider"></div>
                    <div>
                        <div class="align-inline">
                            <h3>&emsp;任务名：</h3>
                            <textarea style="width: 200px; height: 30px"></textarea>
                        </div>
                        <div class="align-inline">
                            <h3>开始时间：</h3>
                            <flat-pickr v-model="startTime" :config="flatpickrConfig"></flat-pickr>
                        </div>
                        <div class="align-inline">
                            <h3>结束时间：</h3>
                            <flat-pickr v-model="endTime" :config="flatpickrConfig"></flat-pickr>
                        </div>
                        <div class="align-inline">
                            <h3>&emsp;责任人：</h3>
                            <select>
                                <option v-for="member in membersData">{{member.name}}</option>
                            </select>
                        </div>
                        <div class="align-inline">
                            <h3>任务内容：</h3>
                            <textarea style="width: 400px; height: 200px"></textarea>
                        </div>
                    </div>
                    <div class="modal-actions">
                        <button class="cancel-button" @click="$emit('cancel')">取消</button>
                        <button class="submit-button">提交</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
}

textarea {
    padding: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
    height: 100px;
    width: 300px;
    resize: none;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-dialog {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.modal-content {
    padding: 20px;
}

button {
    margin-top: 10px;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.cancel-button {
    background-color: #fff;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 16px;
    margin-right: 10px;
    cursor: pointer;
}

.submit-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
}

button {
    transition: background-color 0.5s ease;
}

.cancel-button:hover {
    background-color: darkgray;
}

.submit-button:hover {
    background-color: darkblue;
}

.divider {
    height: 1px;
    background-color: #ccc;
    width: 800px;
    margin: 20px;
}

.align-inline {
    display: flex;
    align-content: center;
    margin: 20px;
}
</style>