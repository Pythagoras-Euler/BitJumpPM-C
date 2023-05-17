<script>

    export default {
        props: {
            isPopupOpen:Boolean
        }
    }
</script>

<template>
    <div class="popup" v-if="this.isPopupOpen">
        <h2>驳回</h2>
        <br>
        <div class="container">
            <p class="label">驳回理由：</p>
            <input class="input">
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        align-items: baseline; /* 基线对齐 */
    }

    .input {
        padding: 5px;
        border: 1px solid #ccc;
        font-size: 14px;
        vertical-align: top; /* 文字与首行对齐 */
    }

    .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(14, 14, 14, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>