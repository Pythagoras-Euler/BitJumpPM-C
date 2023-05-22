<script>
    import {reactive} from "vue";
    import PopupAddTask from "@/components/PopupAddTask.vue";
    import PopupDeleteMember from "@/components/PopupDeleteMember.vue";
    import PopupRejection from "@/components/PopupRejection.vue";
    import PopupAddMember from "@/components/PopupAddMember.vue";
    import PopupChangePost from "@/components/PopupChangePost.vue";

    export default {
        components: {PopupChangePost, PopupAddMember, PopupRejection, PopupDeleteMember, PopupAddTask},

        props: {
            members: Array,
            isManager:Boolean
        },

        setup() {
            let data = reactive({
                visibleTooltip: null,
                isPopupAddMemberOpen:false,
                isPopupDeleteMemberOpen:false,
                isPopupChangePostOpen:false,
                memberDeleted: null,
                memberChanged: null
            })

            function showTooltip(cardId) {
                data.visibleTooltip = cardId;
            }

            function hideTooltip() {
                data.visibleTooltip = null;
            }

            //前往项目成员
            function gotoProjectMembers() {}

            function addMember() {
                data.isPopupAddMemberOpen = true
            }

            function deleteMember(member) {
                data.isPopupDeleteMemberOpen = true
                data.memberDeleted = member
            }

            function changePost(member) {
                data.isPopupChangePostOpen = true
                data.memberChanged = member
            }

            return {
                data,
                showTooltip,
                hideTooltip,
                gotoProjectMembers,
                addMember,
                deleteMember,
                changePost
            }
        }


    }
</script>

<template>
    <div class="card-list">
        <button class="card" style="height: 50px" @click="gotoProjectMembers">项目成员</button>
        <div class="card" v-for="member of members">
            <div class="align-inline" @click="showTooltip(member.userId)">
                <img :src=member.photoUrl style="border-radius: 50%" alt="crack">
                <h3 style="padding: 5px">{{member.name}}</h3>
            </div>
            <div class="tooltip" v-if="data.visibleTooltip === member.userId" @click="hideTooltip">
                <h4 style="font-weight: bold">项目角色</h4>
                <div style="height: 1px; background-color: #cccccc"></div>
                <p>岗位：{{member.post}}</p>
                <p>进度：{{member.process}}%</p>
                <img class="img-button" src="@/assets/minus.svg" alt="减" title="点击删除成员" @click="deleteMember(member)" @cancel="data.isPopupDeleteMemberOpen=false">
                <img class="img-button" src="@/assets/pencil.svg" alt="改" title="点击调岗" @click="changePost(member)" @cancel="data.isPopupChangePostOpen=false">
            </div>
        </div>
        <div class="align-inline" v-if="isManager">
            <img class="img-button" src="@/assets/plus.svg" alt="加" title="点击增加成员" @click="addMember">
        </div>
    </div>
    <PopupAddMember :is-popup-open="data.isPopupAddMemberOpen" @cancel="data.isPopupAddMemberOpen=false"></PopupAddMember>
    <PopupDeleteMember :is-popup-open="data.isPopupDeleteMemberOpen" :member="data.memberDeleted" @cancel="data.isPopupDeleteMemberOpen=false"></PopupDeleteMember>
    <PopupChangePost :is-popup-open="data.isPopupChangePostOpen" :member="data.memberChanged" @cancel="data.isPopupChangePostOpen=false"></PopupChangePost>
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
        cursor: pointer;
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
        left: -180px; /* 初始化时将浮窗移到卡片左边以外 */
        top: 50%;
        transform: translateY(-110px);
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 4px;
        width: 150px;
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
        color: black;
    }
</style>