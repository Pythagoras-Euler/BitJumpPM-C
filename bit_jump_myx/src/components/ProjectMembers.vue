<script>
    import {reactive} from "vue";

    export default {
        props: {
            members: Array,
            isManager:Boolean
        },

        setup() {
            let data = reactive({
                visibleTooltip: null
            })

            function showTooltip(cardId) {
                data.visibleTooltip = cardId;
            }

            function hideTooltip() {
                data.visibleTooltip = null;
            }

            //前往项目成员
            function gotoProjectMembers() {}

            return {
                data,
                showTooltip,
                hideTooltip,
                gotoProjectMembers
            }
        }


    }
</script>

<template>
    <div class="card-list">
        <button class="card" style="height: 50px" @click="gotoProjectMembers">项目成员</button>
        <div class="card" v-for="member of members">
            <div class="align-inline" @mouseover="showTooltip(member.userId)" @mouseout="hideTooltip">
                <img :src=member.photoUrl style="border-radius: 50%" alt="crack">
                <h3 style="padding: 5px">{{member.name}}</h3>
            </div>
            <div class="tooltip" v-if="data.visibleTooltip === member.userId">
                <h4 style="font-weight: bold">项目角色</h4>
                <div style="height: 1px; background-color: #cccccc"></div>
                <p>岗位：{{member.post}}</p>
                <p>进度：{{member.process}}%</p>
            </div>
        </div>
        <div class="align-inline" v-if="isManager">
            <img class="img-button" src="@/assets/plus.svg" alt="加" title="点击增加成员">
            <img class="img-button" src="@/assets/minus.svg" alt="减" title="点击删除成员">
            <img class="img-button" src="@/assets/pencil.svg" alt="改" title="点击调岗">
        </div>
    </div>
</template>

<style scoped>
.card-list {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 20px;
    right: 20px;
}

.card {
    background-color: #f2f2f2;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    height: 60px;
    width: 100px;
    transition: background-color 0.5s ease;
}

.card:hover {
    background-color: darkgray;
}

.align-inline {
     display: flex;
     align-content: center;
 }

.tooltip {
    position: relative;
    left: -220px; /* 初始化时将浮窗移到卡片左边以外 */
    top: 50%;
    transform: translateY(-100%);
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 4px;
    width: 200px;
}

.tooltip::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #f0f0f0;
}

.img-button {
    padding: 5px;
}
</style>