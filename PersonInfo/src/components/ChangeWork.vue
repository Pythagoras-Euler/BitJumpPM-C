

<template>
    <div class="form-group">
        <label for="phone">姓名:</label>
        <input type="tel" id="phone" v-model="UserName" placeholder="请输入员工姓名">
    </div>
    <div class="form-group">
        <label for="phone">部门:</label>
        <input type="tel" id="phone" v-model="department" placeholder="请输入员工部门">
    </div>
    <div class="form-group">
        <label for="phone">工号:</label>
        <input type="tel" id="id" v-model="workID" placeholder="请输入员工工号">
    </div>
    <div class="form-group">
        <label for="phone">电话:</label>
        <input type="tel" id="phone" v-model="phone" placeholder="请输入联系电话">
    </div>
  <!--            TODO 多经历-->
    <el-divider content-position="left">离职信息</el-divider>
    <div class="form-group">
        <label for="phone">离职类型:</label>
        <el-dropdown>
            <el-select v-model="leaveType" placeholder="请选择离职原因">
                <el-option
                    v-for="item in leaveTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-dropdown>
    </div>
  <!--            TODO 多职称-->
    <div class="form-group">
        <label for="phone">离职原因:</label>
        <input type="text" id="phone" v-model="leaveReason" placeholder="请输入联系电话">
    </div>
    <div class="form-group">
        <label for="phone">离职日期:</label>
        <el-date-picker
            v-model="leaveDate"
            type="date"
            placeholder="Pick a day"
            :size="size"
        />
    </div>
    <div class="form-group">
        <label for="phone">结余工资:</label>
        <input type="tel" id="phone" v-model="leftMoney" placeholder="请输入结余工资">
    </div>
    <div id="buttons">
        <el-button type="default" class="celBtn" @click="cancelSub">取消</el-button>
        <el-button type="default" class="btn" @click="submitFullForm">确认</el-button>
    </div>
</template>

<script lang = "ts" setup>
// import myUpload from 'vue-image-crop-upload'
// import { mapGetters } from 'vuex'
// import { getToken } from '@/utils/auth'
// import store from '@/store'
// import Avatar from '@/assets/images/avatar.png'
import { ref } from 'vue'

import { ElConfigProvider } from 'element-plus'
let size = ref<'default' | 'large' | 'small'>('default')
let UserName: string = ''

let workID : string = ''
let department : string = ''
let leaveType : string =''
let leaveReason : string =''
let leaveDate : string =''
let leftMoney : string = ''
let phone: string = ''
let others : string = ''


const leaveTypes = [
    {
        value: '自愿',
        label: '个人原因'
    }, {
        value: '违纪',
        label: '违纪辞退'
    }, {
        value: '裁员',
        label: '公司裁员'
    }, {
        value: '调岗',
        label: '岗位调整'
    }, {
        value: '其他',
        label: '其他'
    }, {
        value: '保密',
        label: '保密'
    }]
//可以给所有项目赋个初值
function Init()
{

    size = ref<'default' | 'large' | 'small'>('default')
    UserName = ''
    workID = ''
    department = ''
    phone = ''
    leaveType  =''
    leaveReason  =''
    leaveDate =''
    leftMoney  = ''
    others = ''
}

function cancelSub()
{
    UserName = ''
    workID = ''
    department = ''
    phone = ''
    leaveType  =''
    leaveReason  =''
    leaveDate =''
    leftMoney  = ''
    others = ''
}
function submitFullForm()
{
    // 处理表单提交逻辑
    console.log('提交表单', UserName, workID, phone,leaveType, leaveReason, leaveDate, leftMoney,  others)
    // 清空表单
    UserName = ''
    workID = ''
    department = ''
    phone = ''
     leaveType  =''
     leaveReason  =''
     leaveDate =''
     leftMoney  = ''
     others = ''
}

</script>


<style scoped>

</style>