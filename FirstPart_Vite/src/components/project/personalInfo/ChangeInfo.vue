<template>
  <div class="form-container">
    <h2 class="title">{{ props.isDisabled ? "个人详情" : "本人详情" }}</h2>
    <form>
      <div class="form-group">
        <label for="name">姓名:</label>
        <input
          type="text"
          id="name"
          v-model="UserName"
          placeholder="请输入姓名"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="workID">工号:</label>
        <input
          type="text"
          id="workID"
          v-model="workID"
          placeholder="请输入工号"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="email">邮箱:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="email"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="phone">电话:</label>
        <input
          type="tel"
          id="phone"
          v-model="phone"
          placeholder="请输入手机号码"
          :disabled="props.isDisabled"
        />
      </div>
      <div id="buttons">
        <el-button
          type="default"
          @click.prevent="cancelSub"
          v-if="!props.isDisabled"
          color="#1098ad"
          >清空</el-button
        >
        <el-button
          type="default"
          class="btn"
          @click="submitSimpleForm"
          color="#1098ad"
          v-if="!props.isDisabled"
          >提交修改</el-button
        >
      </div>
      <el-divider content-position="left" class="divider"
        >组织内信息</el-divider
      >
      <div class="form-group">
        <label for="entryTime">入职时间:</label>
        <input
          type="text"
          id="entryTime"
          v-model="entryTime"
          placeholder="请输入入职时间"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="department">当前部门:</label>
        <input
          type="text"
          id="department"
          v-model="department"
          placeholder="请输入当前部门"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="entryTime">当前项目组:</label>
        <input
          type="text"
          id="projectTeam"
          v-model="projectTeam"
          placeholder="请输入当前项目组"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="entryTime">权限角色:</label>
        <input
          type="number"
          id="priv"
          v-model="priv"
          placeholder="当前权限角色"
          :disabled="props.isDisabled"
        />
      </div>
      <el-divider content-position="left" class="divider">详细信息</el-divider>
      <div class="form-group">
        <label for="education">学历:</label>
        <input
          type="text"
          id="education"
          v-model="education"
          placeholder="请输入学历"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="local">籍贯:</label>
        <input
          type="text"
          id="local"
          v-model="local"
          placeholder="请输入籍贯"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="nation">民族:</label>
        <input
          type="text"
          id="nation"
          v-model="nation"
          placeholder="请输入民族"
          :disabled="props.isDisabled"
        />
      </div>
      <!--            TODO 下拉框-->
      <div class="form-group">
        <label>婚姻状况:</label>
        <!--                <input type="tel" id="phone" v-model="marrige" placeholder="已婚/未婚/离异">-->
        <el-select
          v-model="marriage"
          placeholder="请选择婚姻状态"
          :disabled="props.isDisabled"
        >
          <el-option
            v-for="item in marriageOpts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="form-group">
        <label>生日:</label>
        <div class="demo-date-picker">
          <el-date-picker
            v-model="birthday"
            type="date"
            placeholder="Pick a day"
            :size="size"
            :disabled="props.isDisabled"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="age">年龄:</label>
        <input
          type="text"
          id="age"
          v-model="age"
          placeholder="请输入年龄"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label>血型:</label>
        <el-select
          v-model="blood"
          placeholder="请选择血型"
          :disabled="props.isDisabled"
        >
          <el-option
            v-for="item in bloodOpts"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="form-group">
        <label>政治面貌:</label>
        <el-dropdown>
          <el-select
            v-model="politicStatus"
            placeholder="请选政治面貌"
            :disabled="props.isDisabled"
          >
            <el-option
              v-for="item in politicsOpts"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-dropdown>
      </div>
      <el-divider content-position="left" class="divider">通讯信息</el-divider>
      <div class="form-group">
        <label for="QQNum">QQ:</label>
        <input
          type="text"
          id="QQNum"
          v-model="QQNum"
          placeholder="请输入QQ号"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="WeiXin">微信:</label>
        <input
          type="text"
          id="WeiXin"
          v-model="WeiXin"
          placeholder="请输入微信ID"
          :disabled="props.isDisabled"
        />
      </div>
      <!--            TODO 多邮箱-->
      <div class="form-group">
        <label for="PersonEmail">常用邮箱:</label>
        <input
          type="text"
          id="PersonEmail"
          v-model="PersonEmail"
          placeholder="请输入常用邮箱"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="address">通讯地址:</label>
        <input
          type="address"
          id="address"
          v-model="address"
          placeholder="请输入通讯地址"
          :disabled="props.isDisabled"
        />
      </div>
      <!--            TODO 长学历-->
      <el-divider content-position="left" class="divider">教育信息</el-divider>
      <div class="form-group">
        <label for="education">最高学历:</label>
        <input
          type="text"
          id="education"
          v-model="education"
          placeholder="请输入最高学历"
          :disabled="props.isDisabled"
        />
        <el-dropdown>
          <el-select
            v-model="education"
            placeholder="请选择学历"
            :disabled="props.isDisabled"
          >
            <el-option
              v-for="item in eduOpts"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-dropdown>
      </div>
      <div class="form-group">
        <label for="graduation">毕业院校:</label>
        <input
          type="text"
          id="graduation"
          v-model="graduation"
          placeholder="请输入毕业院校"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="major">所学专业:</label>
        <input
          type="text"
          id="major"
          v-model="major"
          placeholder="请输入所学专业"
          :disabled="props.isDisabled"
        />
      </div>
      <!--            TODO 多经历-->
      <el-divider content-position="left" class="divider">从业信息</el-divider>
      <div class="form-group">
        <label for="workExp">从业经历:</label>
        <input
          type="text"
          id="workExp"
          v-model="workExp"
          placeholder="请输入从业经历"
          :disabled="props.isDisabled"
        />
      </div>
      <!--            TODO 多职称-->
      <div class="form-group">
        <label for="Exp">职称:</label>
        <input
          type="text"
          id="Exp"
          v-model="Exp"
          placeholder="请输入最高职称"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="seniority ">工龄:</label>
        <input
          type="number"
          id="seniority"
          v-model="seniority"
          placeholder="请输入工龄"
          :disabled="props.isDisabled"
        />
      </div>
      <div class="form-group">
        <label for="workLmt">竞业限制:</label>
        <textarea
          rows="3"
          id="workLmt"
          v-model="workLmt"
          placeholder="请输入受竞业限制"
          style="width: 100%"
          :disabled="props.isDisabled"
        />
      </div>

      <el-button
        type="button"
        class="btn"
        color="#1098ad"
        @click="submitFullForm"
        v-if="!props.isDisabled"
      >
        提交修改
      </el-button>
    </form>
  </div>
</template>
<script lang="ts" setup>
// import myUpload from 'vue-image-crop-upload'
// import { mapGetters } from 'vuex'
// import { getToken } from '@/utils/auth'
// import store from '@/store'
// import Avatar from '@/assets/images/avatar.png'

import { computed, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  // 声明父组件传递的参数
  isDisabled: {
    type: Boolean,
    required: true,
  },
});

const store = useStore();
const userData = store.getters["projects/personalData"];
console.log(userData);

let size = ref<"default" | "large" | "small">("default");
let UserName = ref(!userData ? "" : userData.name);
let birthday = ref(!userData ? "" : userData.birthDate);
let workID = ref(!userData ? "" : userData.userId);
let age = ref(!userData ? "" : userData.age);
let email = ref(!userData ? "" : userData.email);
let phone = ref(!userData ? "" : userData.phoneNumber);
let education = ref(!userData ? "" : userData.education);
let major = ref(!userData ? "" : userData.major);
let graduation = ref(!userData ? "" : userData.school);
let local = ref(!userData ? "" : userData.censusRegister);
let nation = ref(!userData ? "" : userData.nationality);
let marriage = ref(
  !userData ? ref<"保密" | "未婚" | "已婚" | "离异">("保密") : userData.marriage
);
let blood = ref(
  !userData
    ? ref<"A型" | "B型" | "AB型" | "O型" | "保密">("保密")
    : userData.bloodType
);
let QQNum = ref(!userData ? "" : userData.qqNumber);
let WeiXin = ref(!userData ? "" : userData.wechatNumber);
let PersonEmail = ref(!userData ? "" : userData.email);
let address = ref(!userData ? "" : userData.address);
let workExp = ref(!userData ? "" : userData.previousCompany);
let Exp = ref(
  !userData
    ? ref<"无职称" | "初级" | "中级" | "高级">("无职称")
    : userData.jobTitle
);
let workLmt = ref(!userData ? "" : userData.limitation);
let seniority = ref(!userData ? "" : userData.seniority);
let politicStatus = ref(!userData ? "" : userData.politicalStatus);

let entryTime = ref(!userData ? "" : userData.entryTime);
let department = ref(!userData ? "" : userData.department);
let projectTeam = ref(!userData ? "" : userData.projectTeam);
let priv = ref(!userData ? "" : userData.priv);

const marriageOpts = [
  {
    value: "未婚",
    label: "未婚",
  },
  {
    value: "已婚",
    label: "已婚",
  },
  {
    value: "离异",
    label: "离异",
  },
  {
    value: "保密",
    label: "保密",
  },
];

const bloodOpts = [
  {
    value: "A",
    label: "A型",
  },
  {
    value: "B",
    label: "B型",
  },
  {
    value: "AB",
    label: "AB型",
  },
  {
    value: "O",
    label: "O型",
  },
];

const politicsOpts = [
  {
    value: "党员",
    label: "中共党员",
  },
  {
    value: "预备党员",
    label: "中共预备党员",
  },
  {
    value: "积极分子",
    label: "入党积极分子",
  },
  {
    value: "团员",
    label: "共青团员",
  },
  {
    value: "无党派",
    label: "无党派人士",
  },
  {
    value: "群众",
    label: "群众",
  },
  {
    value: "其他",
    label: "其他",
  },
];

const eduOpts = [
  {
    value: "文盲",
    label: "无教育经历",
  },
  {
    value: "小学",
    label: "小学学历",
  },
  {
    value: "初中",
    label: "初中学历",
  },
  {
    value: "高中",
    label: "高中学历",
  },
  {
    value: "中专",
    label: "中级专科学历",
  },
  {
    value: "本科",
    label: "全日制本科",
  },
  {
    value: "专科",
    label: "全日制专科",
  },
  {
    value: "硕士",
    label: "全日制硕士研究生",
  },
  {
    value: "博士",
    label: "全日制博士研究生",
  },
  {
    value: "其他",
    label: "其他",
  },
  {
    value: "保密",
    label: "保密",
  },
];

// //可以给所有项目赋个初值
// function Init(userData) {
//   if (userData) {
//     size = ref<"default" | "large" | "small">("default");
//     UserName = userData.name;
//     birthday = userData.birthDate;
//     workID = userData.userId;
//     age = userData.age;
//     email = userData.email;
//     phone = "";
//     education = "";
//     major = "";
//     graduation = "";
//     local = "";
//     nation = "";
//     marriage = ref<"保密" | "未婚" | "已婚" | "离异">("保密");
//     blood = ref<"A型" | "B型" | "AB型" | "O型" | "保密">("保密");
//     QQNum = "";
//     WeiXin = "";
//     PersonEmail = "";
//     address = "";
//     workExp = "";
//     Exp = ref<"无职称" | "初级" | "中级" | "高级">("无职称");
//     workLmt = "";
//     others = "";
//     politicStatus = "";
//   }
// }

function cancelSub() {
  UserName.value = "";
  workID.value = "";
  email.value = "";
  phone.value = "";
}
function submitSimpleForm() {
  // 处理表单提交逻辑
  console.log(
    "提交表单",
    UserName.value,
    workID.value,
    email.value,
    phone.value,
    age.value,
    birthday.value,
    education.value,
    major.value,
    graduation.value,
    local.value,
    graduation.value,
    politicStatus.value,
    marriage.value,
    blood.value,
    QQNum.value,
    WeiXin.value,
    PersonEmail.value,
    address.value,
    workExp.value,
    Exp.value,
    workLmt.value,
    seniority.value
  );
}
function submitFullForm() {
  // 处理表单提交逻辑
  console.log(
    "提交表单",
    UserName.value,
    workID.value,
    email.value,
    phone.value
  );
}

/* -------------------------------------------------------------------------- */
</script>

<style scoped>
.form-container {
  max-width: 60vw;
  margin: 0 auto;
  padding: 20px;

  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

.form-group {
  margin-bottom: 10px;
  /* -------------------------------------------------------------------------- */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1vw;
}

label {
  width: 80px;
  font-weight: bold;
  text-align: left;
  font-size: 1vw;
  display: flex;
  align-items: center;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 1.1vw;
}

button {
  display: block;
  width: 100%;
  padding: 10px;

  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
/* button:active,
button:hover {
  color: #fff;
} */
#buttons {
  display: flex;
  justify-content: center;
}

.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px;
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

/* -------------------------------------------------------------------------- */
/* beffff */

.title {
  font-size: 2vw;
  margin: 1vw;
  margin-left: 0;
  margin-bottom: 2vw;
  text-align: left;
}

.divider {
  border: 2px solid rgb(109, 192, 192);
  margin-top: 4vw;
}
</style>
