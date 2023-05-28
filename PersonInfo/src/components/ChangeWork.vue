<script>
import {defineComponent} from 'vue'

export default defineComponent({
name: "ChangeWork"
})
</script>

<template>
    <div class="form-group">
        <label for="phone">姓名:</label>
        <input type="tel" id="phone" v-model="phone" placeholder="请输入最高学历">
    </div>
    <div class="form-group">
        <label for="phone">部门:</label>
        <input type="tel" id="phone" v-model="phone" placeholder="请输入毕业院校">
    </div>
    <div class="form-group">
        <label for="phone">入职时间:</label>
        <input type="tel" id="phone" v-model="phone" placeholder="请输入所学专业">
    </div>
  <!--            TODO 多经历-->
    <el-divider content-position="left">离职信息</el-divider>
    <div class="form-group">
        <label for="phone">离职类型:</label>
        <input type="tel" id="phone" v-model="phone" placeholder="请输入从业经历">
    </div>
  <!--            TODO 多职称-->
    <div class="form-group">
        <label for="phone">离职原因:</label>
        <input type="tel" id="phone" v-model="phone" placeholder="请输入最高职称">
    </div>
    <div class="form-group">
        <label for="phone">离职时间:</label>
        <input type="tel" id="phone" v-model="phone" placeholder="请输入受竞业限制">
    </div>
    <div class="form-group">
        <label for="phone">结余工资:</label>
        <input type="tel" id="phone" v-model="phone" placeholder="请输入受竞业限制">
    </div>
</template>

<style scoped>

</style>