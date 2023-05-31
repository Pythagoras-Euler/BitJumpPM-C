<script>
import {defineComponent, ref} from 'vue'
import {zhCn} from "element-plus/es/locale/index";
// import ConfigProvider from "@/components/ConfigProvider.vue";


export default defineComponent({
    name: "mainDatePage",
    methods: {
        zhCn() {
            return zhCn
        },
    },
    data() {
        return {
            value: new Date(),
            //TODO 接收ddl相关信息
            scheduleDataEnd: [
                {
                    workingDay: "02",
                    content: "土方开挖",
                },
                {
                    workingDay: "03",
                    content: "地基验坑",
                },
                {
                    workingDay: "04",
                    content: "地基回填",
                },
                {
                    workingDay: "05",
                    content: "基础垫层模",
                },
                {
                    workingDay: "06",
                    content: "基础垫层混凝土浇筑",
                },
                {
                    workingDay: "07",
                    content: "基础钢筋绑扎",
                },
            ],
            scheduleDataStart: [
                {
                    workingDay: "02",
                    content: "土方开挖",
                },
                {
                    workingDay: "03",
                    content: "地基验坑",
                },
                {
                    workingDay: "04",
                    content: "地基回填",
                },
                {
                    workingDay: "05",
                    content: "基础垫层模",
                },
                {
                    workingDay: "06",
                    content: "基础垫层混凝土浇筑",
                },
                {
                    workingDay: "07",
                    content: "基础钢筋绑扎",
                },
            ],
        };

    },
})

</script>
<template>



<!--    <config-provider>-->
    <el-config-provider :locale=zhCn()>
        <el-calendar>
            <template #date-cell="{ data }">
                <p :class="data.isSelected ? 'is-selected' : ''">
                    {{ data.day.split('-').slice(1).join('-') }}
<!--                    {{ data.isSelected ? '✔️' : '' }}-->
                </p>
                <div style="width:100%;" v-for="item in scheduleDataStart" :key="item">
                    <el-tag type="danger" v-if="(item.workingDay).indexOf(data.day.split('-').slice(2).join('-'))!==-1">
                        {{item.content}}
                    </el-tag>
                </div>
                <div style="width:100%;" v-for="item in scheduleDataEnd" :key="item">
                    <el-tag type="warning" v-if="(item.workingDay).indexOf(data.day.split('-').slice(2).join('-'))!==-1">
                        {{item.content}}
                    </el-tag>
                </div>

            </template>
        </el-calendar>
    </el-config-provider>
<!--    </config-provider>-->
</template>
<style>
.is-selected {
    color: #1989fa;
}
</style>
<style scoped>

</style>