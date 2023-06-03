<template>
  <div class="container">
    <div class="greeting-box">
      <span class="greeting">{{ greeting }}</span>
    </div>
    <!--    <config-provider>-->
    <div class="calendar-box">
      <el-config-provider :locale="zhCn()">
        <el-calendar class="custom-el-calendar" ref="calendar">
          <template #header="{ date }">
            <span style="font-size: 1vw">{{ date }}</span>
            <el-button-group>
              <el-button size="small" @click="selectDate('prev-year')">
                上一年
              </el-button>
              <el-button size="small" @click="selectDate('prev-month')">
                上个月
              </el-button>
              <el-button size="small" @click="selectDate('today')"
                >今天</el-button
              >
              <el-button size="small" @click="selectDate('next-month')">
                下个月
              </el-button>
              <el-button size="small" @click="selectDate('next-year')">
                下一年
              </el-button>
            </el-button-group>
          </template>
          <template #date-cell="{ data }">
            <el-popover placement="top" :width="200" trigger="click">
              <template #reference>
                <div style="width: 100%; height: 100%">
                  <p :class="data.isSelected ? 'is-selected' : ''">
                    {{ data.day.split("-").slice(1).join("-") }}
                    <!-- {{ data.isSelected ? "✔️" : "" }} -->
                  </p>
                  <MessageTag
                    :msgType="showTag(data.day)"
                    style="margin-top: 0.8vh"
                  ></MessageTag>
                </div>
              </template>
              <div
                v-if="data.isSelected && showTag(data.day) !== 'null'"
                class="msg-box"
              >
                <span class="msg-header"
                  >{{ getMsgTitle(data.day, data.date.getDay()) }}
                </span>
                <div class="msg-content">
                  <div v-for="message in messages" :key="message.name">
                    <span v-if="showMsg(message.endTime, data.day)">
                      {{ message.name }}
                    </span>
                  </div>
                </div>
              </div>
            </el-popover>
          </template>
        </el-calendar>
      </el-config-provider>
    </div>
    <!--    </config-provider>-->
  </div>
</template>

<script>
import MessageTag from "../../components/ui/MessageTag.vue";
import { zhCn } from "element-plus/es/locale/index";
import { ref } from "vue";
export default {
  components: {
    MessageTag,
  },
  setup() {
    const calendar = ref();
    const selectDate = (val) => {
      calendar.value.selectDate(val);
    };
    return {
      calendar,
      selectDate,
    };
  },
  methods: {
    zhCn() {
      return zhCn;
    },
    getMsgTitle(date, number) {
      const weekday = this.mapNumberToWeekday(number);
      const dayInfo = this.mapNumberToDay(date);
      return `${dayInfo} ${weekday} 事件`;
    },
    mapNumberToDay(dateStr) {
      const date = new Date(dateStr);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${month}月${day}日`;
    },
    mapNumberToWeekday(num) {
      let weekday = "";
      switch (num) {
        case 1:
          weekday = "星期一";
          break;
        case 2:
          weekday = "星期二";
          break;
        case 3:
          weekday = "星期三";
          break;
        case 4:
          weekday = "星期四";
          break;
        case 5:
          weekday = "星期五";
          break;
        case 6:
          weekday = "星期六";
          break;
        case 7:
          weekday = "星期日";
          break;
        default:
          weekday = "";
          break;
      }
      return weekday;
    },
    showMsg(endTime, selectedDay) {
      //console.log(selectedDay);
      // console.log(
      //   endTime.split(" ")[0].split("-").slice(2).join("-"),
      //   selectedDay.split("-").slice(2).join("-"),
      //   endTime.split(" ")[0].split("-").slice(2).join("-") ===
      //     selectedDay.split("-").slice(2).join("-")
      // );
      return (
        endTime.split(" ")[0].split("-").slice(2).join("-") ===
        selectedDay.split("-").slice(2).join("-")
      );
    },
    showTag(selectedDay) {
      // 现在apifox发送的日期太随机，只对应日期(08)
      //console.log(selectedDay);
      const currentday = selectedDay.split("-").slice(2).join("-");
      // console.log(currentday);

      const sameDay = this.messages.filter((message) => {
        return (
          message.endTime.split(" ")[0].split("-").slice(2).join("-") ===
          currentday
        );
      });

      if (sameDay.length > 0) {
        // console.log(currentday);

        //  console.log(this.value);

        const today = new Date(this.value);

        const month = (today.getMonth() + 1).toString().padStart(2, "0");
        const day = today.getDate().toString().padStart(2, "0");
        const formattedToday = `2023-${month}-${day}`;
        //console.log(formattedToday);
        const selectedDay2 =
          `2023-` + selectedDay.split("-").slice(1).join("-");
        //console.log(selectedDay2);
        // 注意：下面才是正确算天数差的方法，日期格式为"YYYY-MM-DD"
        const dateA = new Date(selectedDay2);
        const dateB = new Date(formattedToday);
        // 获取时间戳差值（以毫秒为单位）
        const timeDiff = dateA.getTime() - dateB.getTime();
        // 计算天数差值
        const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        console.log(dateA);
        if (dayDiff < 0) {
          return "info";
        } else if (dayDiff <= 10) {
          return "danger";
        } else if (dayDiff <= 20) {
          return "warning";
        } else {
          return "success";
        }
      } else {
        return "null";
      }
    },
  },
  computed: {
    greeting() {
      return this.$store.getters["projects/greeting"];
    },
    messages() {
      return this.$store.getters["projects/messages"];
    },
  },
  data() {
    return {
      // messageBoxStyle: {},
      // showMessageBox: false,
      value: new Date(),
      //TODO 接收ddl相关信息
    };
  },
};
</script>

<style>
.el-calendar-table .el-calendar-day {
  height: 8vh;
}
</style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.greeting-box {
  height: 100%;
  flex: 2 2 20%;
  display: flex;
  align-items: center;
  margin: 0 1vw;
  margin-top: 3vw;

  border: 2px solid rgba(204, 204, 204, 0.5);
  border-radius: 12px;
}

.calendar-box {
  flex: 8 8 80%;
  padding: 0 1vw;
  padding-top: 1vw;

  /* border: 1px solid black; */
}

.greeting {
  width: 100%;
  font-size: 2vw;
  text-align: center;
  margin: 2vw;
}
.is-selected {
  color: #228be6;
}

.msg-box {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}
.msg-header {
  border-bottom: 3px solid #c3fae8;
  font-weight: bold;
  padding-top: 0.2vh;
  font-size: 1vw;
}
.msg-content {
  display: flex;
  flex-direction: column;
  gap: 0.1vh;
  font-size: 1vw;
}
</style>
