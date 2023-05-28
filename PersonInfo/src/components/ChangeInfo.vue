<template>
    <div class="form-container">
        <h2>信息录入</h2>
<!--        <div>-->
<!--            <div style="text-align: center">-->
<!--                <div class="el-upload">-->
<!--                    <myUpload-->

<!--                        v-model="showDialog"-->
<!--                        :headers="headers"-->
<!--                        :url="baseApi+'/api/user/updateAvatar'"-->
<!--                        @crop-upload-success="cropUploadSuccess"-->
<!--                    />-->
<!--                    <img-->
<!--                        :src="-->
<!--                    user.avatarUrl-->
<!--                      ? baseApi + '/file/' + user.avatarUrl-->
<!--                      : Avatar-->
<!--                  "-->
<!--                        title="点击上传头像"-->
<!--                        class="avatar"-->
<!--                        @click="toggleShow"-->
<!--                    >-->
<!--                    ...-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

        <div id="app">
            <div class="item_bock head_p">
                <div class="head_img">
                    <img :src="userInfo.avatar" alt="icon"/>
<!--                    <&#45;&#45;图片地址动态绑定&ndash;&gt;-->
                </div>
                <div class="setting_right" @click.stop="uploadHeadImg">
                    <div class="caption">更改头像</div>
                </div>
                <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
            </div>
        </div>

        <form>
            <div class="form-group">
                <label for="name">姓名:</label>
                <input type="text" id="name" v-model="name" placeholder="请输入姓名">
            </div>
            <div class="form-group">
                <label for="age">工号:</label>
                <input type="number" id="age" v-model.number="age" placeholder="请输入工号">
            </div>
            <div class="form-group">
                <label for="email">邮箱:</label>
                <input type="email" id="email" v-model="email" placeholder="请输入邮箱">
            </div>
            <div class="form-group">
                <label for="phone">电话:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入电话">
            </div>
            <div id="buttons">
                <el-button>取消</el-button>
                <el-button>确认</el-button>
            </div>

            <el-divider content-position="left">详细信息</el-divider>
            <div class="form-group">
                <label for="email">学历:</label>
                <input type="email" id="email" v-model="email" placeholder="请输入学历">
            </div>
            <div class="form-group">
                <label for="phone">籍贯:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入籍贯">
            </div>
            <div class="form-group">
                <label for="phone">民族:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入民族">
            </div>
<!--            TODO 下拉框-->
            <div class="form-group">
                <label for="phone">婚姻状况:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="已婚/未婚/离异">
            </div>
            <div class="form-group">
                <label for="phone">生日:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入生日">
            </div>
            <div class="form-group">
                <label for="phone">年龄:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入年龄">
            </div>
            <div class="form-group">
                <label for="phone">血型:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入血型">
            </div>
            <div class="form-group">
                <label for="phone">政治面貌:</label>
                <el-dropdown>
                    <el-button type="primary">
                        请选择政治面貌
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>党员</el-dropdown-item>
                            <el-dropdown-item>预备党员</el-dropdown-item>
                            <el-dropdown-item>入党积极分子</el-dropdown-item>
                            <el-dropdown-item>共青团员</el-dropdown-item>
                            <el-dropdown-item>民主党派人士</el-dropdown-item>
                            <el-dropdown-item>无党派人士</el-dropdown-item>
                            <el-dropdown-item>群众</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <el-divider content-position="left">通讯信息</el-divider>
            <div class="form-group">
                <label for="phone">QQ:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入QQ号">
            </div>
            <div class="form-group">
                <label for="phone">微信:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入微信ID">
            </div>
<!--            TODO 多邮箱-->
            <div class="form-group">
                <label for="phone">常用邮箱:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入常用邮箱">
            </div>
            <div class="form-group">
                <label for="phone">通讯地址:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入通讯地址">
            </div>
<!--            TODO 长学历-->
            <el-divider content-position="left">教育信息</el-divider>
            <div class="form-group">
                <label for="phone">最高学历:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入最高学历">
            </div>
            <div class="form-group">
                <label for="phone">毕业院校:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入毕业院校">
            </div>
            <div class="form-group">
                <label for="phone">所学专业:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入所学专业">
            </div>
<!--            TODO 多经历-->
            <el-divider content-position="left">从业信息</el-divider>
            <div class="form-group">
                <label for="phone">从业经历:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入从业经历">
            </div>
<!--            TODO 多职称-->
            <div class="form-group">
                <label for="phone">职称:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入最高职称">
            </div>
            <div class="form-group">
                <label for="phone">竞业限制:</label>
                <input type="tel" id="phone" v-model="phone" placeholder="请输入受竞业限制">
            </div>
            <button type="button" class="btn" @click="submitForm">修改</button>
        </form>
    </div>
</template>

<script>
// import myUpload from 'vue-image-crop-upload'
// import { mapGetters } from 'vuex'
// import { getToken } from '@/utils/auth'
// import store from '@/store'
// import Avatar from '@/assets/images/avatar.png'

export default {
    data() {

        return {
            userInfo: {
                avatar: 'F://ITJump//BitJumpPM-C//PersonInfo//src//assets//laziIcon.jpg'
            },
            name: '',
            age: '',
            email: '',
            phone: ''
        }
    },
    methods: {
        uploadHeadImg: function () {
            this.$el.querySelector('.hiddenInput').click()
        },
        // 将头像显示
        handleFile: function (e) {
            let $target = e.target || e.srcElement
            let file = $target.files[0]
            var reader = new FileReader()
            reader.onload = (data) => {
                let res = data.target || data.srcElement
                this.userInfo.avatar = res.result
            }
            reader.readAsDataURL(file)
        },
        submitForm() {
            // 处理表单提交逻辑
            console.log('提交表单', this.name, this.age, this.email, this.phone)
            // 清空表单
            this.name = ''
            this.age = ''
            this.email = ''
            this.phone = ''
        }
    }
}
</script>

<style>
.form-container {
    //max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}


.form-group {
    margin-bottom: 10px;
}

label {
    display: inline-block;
    width: 80px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #2d8cf0;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
#buttons{
    display: flex;
    justify-content: center;

}
button:hover {
    background-color: #1c7ed6;
}
</style>