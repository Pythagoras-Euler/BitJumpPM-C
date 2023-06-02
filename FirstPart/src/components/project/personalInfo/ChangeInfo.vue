<template>
  <div class="form-container">
    <h2 class="title">信息录入</h2>

    <form>
      <div class="form-group">
        <label for="name">姓名:</label>
        <input
          type="text"
          id="name"
          v-model="UserName"
          placeholder="请输入姓名"
        />
      </div>
      <div class="form-group">
        <label for="workID">工号:</label>
        <input
          type="text"
          id="workID"
          v-model="workID"
          placeholder="请输入工号"
        />
      </div>
      <div class="form-group">
        <label for="email">邮箱:</label>
        <input type="email" id="email" v-model="email" placeholder="email" />
      </div>
      <div class="form-group">
        <label for="phone">电话:</label>
        <input
          type="tel"
          id="phone"
          v-model="phone"
          placeholder="请输入手机号码"
        />
      </div>
      <div id="buttons">
        <el-button type="default" class="celBtn" @click="cancelSub"
          >取消</el-button
        >
        <el-button type="default" class="btn" @click="submitSimpleForm"
          >确认</el-button
        >
      </div>
      <el-divider content-position="left" class="divider">详细信息</el-divider>
      <div class="form-group">
        <label for="education">学历:</label>
        <input
          type="text"
          id="education"
          v-model="education"
          placeholder="请输入学历"
        />
      </div>
      <div class="form-group">
        <label for="local">籍贯:</label>
        <input
          type="text"
          id="local"
          v-model="local"
          placeholder="请输入籍贯"
        />
      </div>
      <div class="form-group">
        <label for="nation">民族:</label>
        <input
          type="text"
          id="nation"
          v-model="nation"
          placeholder="请输入民族"
        />
      </div>
      <!--            TODO 下拉框-->
      <div class="form-group">
        <label>婚姻状况:</label>
        <!--                <input type="tel" id="phone" v-model="marrige" placeholder="已婚/未婚/离异">-->
        <el-select v-model="marriage" placeholder="请选择婚姻状态">
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
          />
        </div>
      </div>
      <div class="form-group">
        <label for="age">年龄:</label>
        <input type="text" id="age" v-model="age" placeholder="请输入年龄" />
      </div>
      <div class="form-group">
        <label>血型:</label>
        <el-select v-model="blood" placeholder="请选择血型">
          <el-option
            v-for="item in bloodOpts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="form-group">
        <label>政治面貌:</label>
        <el-dropdown>
          <el-select v-model="politicStatus" placeholder="请选政治面貌">
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
        />
      </div>
      <div class="form-group">
        <label for="WeiXin">微信:</label>
        <input
          type="text"
          id="WeiXin"
          v-model="WeiXin"
          placeholder="请输入微信ID"
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
        />
      </div>
      <div class="form-group">
        <label for="address">通讯地址:</label>
        <input
          type="address"
          id="address"
          v-model="address"
          placeholder="请输入通讯地址"
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
        />
        <el-dropdown>
          <el-select v-model="education" placeholder="请选择学历">
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
        />
      </div>
      <div class="form-group">
        <label for="major">所学专业:</label>
        <input
          type="text"
          id="major"
          v-model="major"
          placeholder="请输入所学专业"
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
        />
      </div>
      <div class="form-group">
        <label for="workLmt">竞业限制:</label>
        <input
          type="tecxt"
          id="workLmt"
          v-model="workLmt"
          placeholder="请输入受竞业限制"
        />
      </div>
      <div class="form-group">
        <label for="others">其他:</label>
        <input
          type="text"
          id="others"
          v-model="others"
          placeholder="请输入受竞业限制"
        />
      </div>
      <button type="button" class="btn" @click="submitFullForm">修改</button>
    </form>
  </div>
</template>

<script setup>
// import myUpload from 'vue-image-crop-upload'
// import { mapGetters } from 'vuex'
// import { getToken } from '@/utils/auth'
// import store from '@/store'
// import Avatar from '@/assets/images/avatar.png'
import { ref } from "vue";

// import { ElConfigProvider } from "element-plus";
let size = (ref < "default") | "large" | ("small" > "default");
let UserName = "";
let birthday = "";
let workID = "";
let age = "";
let email = "example@example.com";
let phone = "";
let education = "";
let major = "";
let graduation = "";
let local = "";
let nation = "";
let marriage = (ref < "保密") | "未婚" | "已婚" | ("离异" > "保密");
let blood = (ref < "A型") | "B型" | "AB型" | "O型" | ("保密" > "保密");
let QQNum = "";
let WeiXin = "";
let PersonEmail = "";
let address = "";
let workExp = "";
let Exp = (ref < "无职称") | "初级" | "中级" | ("高级" > "无职称");
let workLmt = "";
let others = "";
let politicStatus = "";

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
// function Init() {
//   size = ref<"default" | "large" | "small">("default");
//   UserName = "";
//   birthday = "";
//   workID = "";
//   age = "";
//   email = "example@example.com";
//   phone = "";
//   education = "";
//   major = "";
//   graduation = "";
//   local = "";
//   nation = "";
//   marriage = ref<"保密" | "未婚" | "已婚" | "离异">("保密");
//   blood = ref<"A型" | "B型" | "AB型" | "O型" | "保密">("保密");
//   QQNum = "";
//   WeiXin = "";
//   PersonEmail = "";
//   address = "";
//   workExp = "";
//   Exp = ref<"无职称" | "初级" | "中级" | "高级">("无职称");
//   workLmt = "";
//   others = "";
//   politicStatus = "";
// }

function cancelSub() {
  UserName = "";
  workID = "";
  email = "";
  phone = "";
}
function submitSimpleForm() {
  // 处理表单提交逻辑
  console.log(
    "提交表单",
    UserName,
    workID,
    email,
    phone,
    age,
    birthday,
    education,
    major,
    graduation,
    local,
    graduation,
    politicStatus,
    marriage,
    blood,
    QQNum,
    WeiXin,
    PersonEmail,
    address,
    workExp,
    Exp,
    workLmt,
    others
  );
  // 清空表单
  UserName = "";
  workID = "";
  email = "";
  phone = "";
}
function submitFullForm() {
  // 处理表单提交逻辑
  console.log("提交表单", UserName, workID, email, phone);
  // 清空表单
  UserName = "";
  age = "";
  email = "";
  phone = "";
}
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
  background-color: #2d8cf0;

  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
#buttons {
  display: flex;
  justify-content: center;
}
button:hover {
  background-color: #1c7ed6;
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
.btn-router {
  width: 20px;
  height: 20px;
}
</style>
