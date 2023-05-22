<script>

export default {
    props: {
        isPopupOpen:Boolean
    }
}
</script>

<template>
    <transition name="modal" style="z-index: 999">
        <div v-if="isPopupOpen" class="modal-overlay">
            <div class="modal-dialog">
                <div class="modal-content">
                    <h2>提示</h2>
                    <br>
                        <p class="label">请输入密码确认操作：</p>
                        <input placeholder="输入密码">
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