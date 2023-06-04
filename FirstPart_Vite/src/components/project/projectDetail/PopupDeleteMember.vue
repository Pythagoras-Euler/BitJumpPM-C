<script>
import { reactive } from "vue";
import PopupConfirm from "./PopupConfirm.vue";
import {addMember, deleteMember} from "../../../web/func/project_new/projMember.js";

export default {
  components: { PopupConfirm },
  props: {
    projectId: Number,
    isPopupOpen: Boolean,
    member: null,
  },

  setup(props, context) {
    let data = reactive({
      isPopupConfirmOpen: false,
    });

    function openConfirm() {
      data.isPopupConfirmOpen = true;
      context.emit("cancel");
    }

    async function confirm() {
        data.isPopupConfirmOpen = false;
        context.emit("cancel");
        //todo 通信
        console.log(
            //项目id
            props.projectId,
            //工号
            props.member.userId
        );

        try {
            const response = await deleteMember(props.projectId, props.member.userId)
                //console.log(response);
        } catch {
            this.error = "抱歉，加载出错，请重试";
        }
    }

    function notConfirm() {
      data.isPopupConfirmOpen = false;
      context.emit("open");
    }

    return {
      data,
      openConfirm,
      confirm,
      notConfirm,
    };
  },
};
</script>

<template>
  <transition name="modal" style="z-index: 999">
    <div v-if="isPopupOpen" class="modal-overlay">
      <div class="modal-dialog">
        <div class="modal-content">
          <h2>删除人员</h2>
          <br />
          <p class="label">确定要删除成员{{ this.member.name }}?</p>
          <div class="modal-actions">
            <button class="cancel-button" @click="$emit('cancel')">取消</button>
            <button class="submit-button" @click="openConfirm">确定</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <PopupConfirm
    :is-popup-open="data.isPopupConfirmOpen"
    @cancel="notConfirm"
    @submit="confirm"
  ></PopupConfirm>
</template>

<style scoped>
.container {
  display: flex;
  align-items: start; /* 基线对齐 */
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
</style>
