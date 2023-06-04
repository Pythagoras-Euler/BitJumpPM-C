<script>
import { reactive } from "vue";
import { getProjInfo } from "../../../web/func/project_new/projManage.js";
import { rejectItem } from "../../../web/func/project_new/projContent.js";

export default {
  props: {
    isPopupOpen: Boolean,
    projectId: Number,
    item: null,
  },

  setup(props, context) {
    let data = reactive({
      reason: null,
    });
    async function submit() {
      console.log(
        //项目id
        props.projectId,
        //表项id
        props.item.tableItemId,
        //驳回理由
        data.reason
      );
      //先发送数据
      try {
        const response = await rejectItem(
          props.projectId,
          props.item.tableItemId,
          data.reason
        );
        // console.log(response);
        alert("提交成功");
      } catch {
        //error = "抱歉，加载出错，请重试";
        alert("提交请求失败");
      }

      context.emit("cancel");
    }

    return {
      data,
      submit,
    };
  },
};
</script>

<template>
  <transition name="modal" style="z-index: 999">
    <div v-if="isPopupOpen" class="modal-overlay">
      <div class="modal-dialog">
        <div class="modal-content">
          <h2>驳回</h2>
          <br />
          <div class="container">
            <p class="label">驳回理由：</p>
            <textarea v-model="data.reason"></textarea>
          </div>
          <div class="modal-actions">
            <button class="cancel-button" @click="$emit('cancel')">取消</button>
            <button class="submit-button" @click="submit">提交</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
