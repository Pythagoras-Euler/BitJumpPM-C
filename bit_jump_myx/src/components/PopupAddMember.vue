<script>
    import {reactive} from "vue";
    import PopupConfirm from "@/components/PopupConfirm.vue";

    export default {
        components: {PopupConfirm},

        props: {
            projectId: Number,
            isPopupOpen:Boolean
        },

        setup(props, context) {
            let data = reactive({
                //todo 测试的members数据，来自于获取所有人员列表
                membersEG: [
                    {
                        userId: 112233,
                        name: '韦斯利福法纳',
                        photoUrl: 'https://via.placeholder.com/30'
                    },

                    {
                        userId: 112244,
                        name: '赛科福法纳',
                        photoUrl: 'https://via.placeholder.com/30'
                    },

                    {
                        userId: 112255,
                        name: '戴维福法纳',
                        photoUrl: 'https://via.placeholder.com/30'
                    },

                    {
                        userId: 112266,
                        name: '尤素福福法纳',
                        photoUrl: 'https://via.placeholder.com/30'
                    }
                ],

                //下面是需要保留的部分
                memberClicked: null,
                isPopupConfirmOpen: false,
                members: null,
                searchName: null,
                postInput: null
            })

            function cardClicked(member) {
                if (data.memberClicked !== member) {
                    data.memberClicked = member
                } else {
                    data.memberClicked = null
                }
            }

            function openConfirm() {
                if (data.memberClicked === null) {
                    alert('请选择成员！')
                    return
                }

                if (data.postInput=== null) {
                    alert('请输入完整信息！')
                    return
                }

                data.isPopupConfirmOpen = true
                context.emit('cancel')
            }

            function confirm() {
                data.isPopupConfirmOpen = false
                context.emit('cancel')
                //todo 通信
                console.log(
                    //项目id
                    props.projectId,
                    //账号
                    data.memberClicked.userId,
                    //岗位
                    data.postInput
                )
            }

            function notConfirm() {
                data.isPopupConfirmOpen = false
                context.emit('open')
            }

            function search() {
                if (data.searchName) {
                    alert('请输入信息后搜索！')
                    return
                }

                //todo 搜索字符串
                console.log(data.searchName)
                //返回值填入members
            }

            return {
                data,
                cardClicked,
                openConfirm,
                confirm,
                notConfirm,
                search,
            }
        }
    }
</script>

<template>
    <transition name="modal" style="z-index: 999">
        <div v-if="isPopupOpen" class="modal-overlay">
            <div class="modal-dialog">
                <div class="modal-content">
                    <h2>添加项目成员</h2>
                    <br>
                    <div class="container">
                        <p style="margin-right: 20px">员工姓名</p>
                        <input style="margin-right: 20px; height: 30px" type="text" placeholder="搜索..." v-model="data.searchName">
                        <button class="search-button" @click="search">搜索</button>
                    </div>
                    <div class="card" :class="{'card-dark': data.memberClicked === member, 'card-light': data.memberClicked !== member}" v-for="member of data.membersEG" @click="cardClicked(member)">
                        <div class="align-inline">
                            <img :src="member.photoUrl" style="border-radius: 50%; margin: 5px" alt="crack">
                            <div>
                                <p>工号：{{member.userId}}</p>
                                <p>姓名：{{member.name}}</p>
                            </div>
                        </div>
                        <div class="container" style="margin: 5px" v-if="data.memberClicked === member">
                            <p style="margin-right: 20px">请输入岗位</p>
                            <input style="margin-right: 20px; height: 30px" type="text" placeholder="岗位" @click.stop v-model="data.postInputS">
                        </div>
                    </div>
                    <div class="modal-actions">
                        <button class="cancel-button" @click="$emit('cancel')">取消</button>
                        <button class="submit-button" @click="openConfirm">确定</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
    <PopupConfirm :is-popup-open="data.isPopupConfirmOpen" @cancel="notConfirm" @submit="confirm"></PopupConfirm>
</template>

<style scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
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
    }

    .submit-button {
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 8px 16px;
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

    .search-button {
        background-color: #07afaf;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 14px;
        cursor: pointer;
        transform: translateY(-5px) ;
    }

    .search-button:hover {
        background-color: darkcyan;
    }

    .align-inline {
        display: flex;
        align-content: center;
    }

    .card {
        border-radius: 8px;
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
        transition: background-color 0.5s ease;
        cursor: pointer;
    }

    .card-light {
        background-color: #f2f2f2;
    }

    .card-dark {
        background-color: #989898;
    }

    .card-light:hover {
        background-color: lightgray;
    }
</style>