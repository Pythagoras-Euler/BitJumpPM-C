<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import PopupDeleteMember from "./PopupDeleteMember.vue";

import PopupAddMember from "./PopupAddMember.vue";
import PopupChangePost from "./PopupChangePost.vue";

export default {

    components: {
        PopupChangePost,
        PopupAddMember,

        PopupDeleteMember,
    },

    props: {
        projectId: Number,
        members: Array,
        isManager: Boolean,
    },

    setup() {
        const router = useRouter("router");
    const route = useRoute("router");
        let data = reactive({
            visibleTooltip: null,
            isPopupAddMemberOpen: false,
            isPopupDeleteMemberOpen: false,
            isPopupChangePostOpen: false,
            memberDeleted: null,
            memberChanged: null,
            tooltipTop: 0
        });

        function showTooltip(cardId, event) {
            console.log(event)
            data.tooltipTop = event.target.getBoundingClientRect().top - 50
            if (data.visibleTooltip === null) {
                data.visibleTooltip = cardId;
            } else {
                data.visibleTooltip = null
            }
        }

        function hideTooltip(userId) {
            data.visibleTooltip = null;
      

      const rpath = route.path + `/${userId}`;
      router.push(rpath);
        }

        //前往项目成员
        function gotoProjectMembers() {
            //todo 跳转到项目人员页面
        }

        function addMember() {
            data.isPopupAddMemberOpen = true;
        }

        function deleteMember(member) {
            data.isPopupDeleteMemberOpen = true;
            data.memberDeleted = member;
        }

        function changePost(member) {
            data.isPopupChangePostOpen = true;
            data.memberChanged = member;
        }

        return {
            data,
            showTooltip,
            hideTooltip,
            gotoProjectMembers,
            addMember,
            deleteMember,
            changePost,
        };
    },

};
</script>

<template>

    <div class="card-container">
        <button class="card" style="height: 50px; color: white" @click="gotoProjectMembers">
            项目成员
        </button>
        <div class="divider"></div>
        <div class="card-list">
            <div class="card" v-for="member of members" :key="member.userId" @click="showTooltip(member.userId, $event)">
                <div class="align-inline" >
                    <img :src="member.photoUrl" style="border-radius: 50%" alt="crack" />
                    <h3 style="padding: 5px">{{ member.name }}</h3>
                </div>
                <div
                        class="tooltip"
                        v-if="data.visibleTooltip === member.userId"
                        @click="hideTooltip(member.userId)"
                        :style="{top: (data.tooltipTop + 'px')}"
                >
                    <h4 style="font-weight: bold">项目角色</h4>
                    <div style="height: 1px; background-color: #cccccc; margin:5px"></div>
                    <p>岗位：{{ member.post }}</p>
                    <p>进度：{{ member.process }}%</p>
                    <img
                            v-if="this.isManager"
                            class="img-button"
                            src="@/assets/minus.svg"
                            alt="减"
                            title="点击删除成员"
                            @click="deleteMember(member)"
                            @cancel="data.isPopupDeleteMemberOpen = false"
                    />
                    <img
                            v-if="this.isManager"
                            class="img-button"
                            src="@/assets/pencil.svg"
                            alt="改"
                            title="点击调岗"
                            @click="changePost(member)"
                            @cancel="data.isPopupChangePostOpen = false"
                    />
                </div>
            </div>
        </div>
        <div class="align-inline" v-if="isManager">
            <img
                    class="img-button"
                    src="@/assets/plus.svg"
                    alt="加"
                    title="点击增加成员"
                    @click="addMember"
                    @open="data.isPopupAddMemberOpen = true"
            />
        </div>

    </div>
    <PopupAddMember
            :is-popup-open="data.isPopupAddMemberOpen"
            :project-id="this.projectId"
            @cancel="data.isPopupAddMemberOpen = false"
            @open="data.isPopupAddMemberOpen = true"
    ></PopupAddMember>
    <PopupDeleteMember
            :is-popup-open="data.isPopupDeleteMemberOpen"
            :project-id="this.projectId"
            :member="data.memberDeleted"
            @cancel="data.isPopupDeleteMemberOpen = false"
            @open="data.isPopupDeleteMemberOpen = true"
    ></PopupDeleteMember>
    <PopupChangePost
            :is-popup-open="data.isPopupChangePostOpen"
            :project-id="this.projectId"
            :member="data.memberChanged"
            @cancel="data.isPopupChangePostOpen = false"
            @open="data.isPopupChangePostOpen = true"
    ></PopupChangePost>
</template>

<style scoped>
.card-container {
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    max-width: 100%;
    max-height: 50%;
    background-color: #dbffff;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 20px;
    right: 20px;
    box-shadow: 2px 2px 2px #888888;
}

.card-list {
    width: inherit;
    height: 400px;
    overflow-y: auto;
}

.card-list::-webkit-scrollbar {
    width: 0; /* 隐藏滚动条的宽度 */
    height: 0; /* 隐藏滚动条的高度 */
}

.card {
    background-color: #f2f2f2;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    height: 60px;
    width: 100px;
    transition: background-color 0.5s ease;
    cursor: pointer;
    box-shadow: 3px 3px 3px #888888;
    background-color: rgba(113, 196, 196, 0.82)
}

.card:hover {
    background-color: #07afaf;
}

.align-inline {
    display: flex;
    align-content: center;
    align-items: center;
}

.tooltip {
    position: absolute;
    left: -150px;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 4px;
    width: 150px;
    box-shadow: 2px 2px 2px #888888;
}

.img-button {
    padding: 5px;
    color: black;
}

.divider {
    height: 1px;
    background-color: #ccc;
    margin: 5px;
}

h3 {
    color: white;
}
</style>
