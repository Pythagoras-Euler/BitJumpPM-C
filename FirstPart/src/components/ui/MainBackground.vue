<template>
  <div class="container">
    <BaseCard
      class="message-box"
      v-show="isMessageBoxVisible"
      :style="messageBoxStyle"
      @mouseover="showMessageBox"
      @mouseleave="hideMessageBox"
    >
      <div class="message-title">消息</div>
      <div class="messages-sub-box">
        <div v-for="message in messages" :key="message.name" class="message">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="message-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>

          <span class="message-content">
            {{ message.name }}
          </span>
        </div>
      </div>
    </BaseCard>

    <BaseCard
      class="user-box"
      v-show="isUserBoxVisible"
      :style="userBoxStyle"
      @mouseover="showUserBox"
      @mouseleave="hideUserBox"
    >
      <button class="user-message-btn" @click="GotoPersonalInfo">
        个人信息
      </button>
      <button class="user-message-btn" @click="changePassword">修改密码</button>
      <button class="user-message-btn" @click="logout">退出登录</button>
    </BaseCard>
    <nav>
      <router-link mode="outline" to="/project/main" class="btn-nav"
        >主页</router-link
      >
      <router-link link mode="outline" to="/project/create" class="btn-nav"
        >我创建的</router-link
      >
      <router-link mode="outline" link to="/project/manage" class="btn-nav"
        >我管理的</router-link
      >
      <router-link mode="outline" link to="/project/joined" class="btn-nav"
        >我加入的</router-link
      >
    </nav>
    <menu>
      <div class="btn-box">
        <button
          class="message-btn"
          @mouseover="showMessageBox"
          @mouseleave="hideMessageBox"
          ref="messagesBtn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>
        <div class="user-btn-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="user-icon"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            />
          </svg>

          <button
            class="user-btn"
            @mouseover="showUserBox"
            @mouseleave="hideUserBox"
            ref="userBtn"
          >
            北小埋
          </button>
        </div>
      </div>
    </menu>

    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMessageBoxVisible: false,
      messageBoxStyle: {},
      isUserBoxVisible: false,
      userBoxStyle: {},
    };
  },
  computed: {
    token() {
      return this.$store.getters["token"];
    },
    messages() {
      return this.$store.getters["projects/messages"];
    },
    userId() {
      return this.$store.getters["userId"];
    },
  },
  methods: {
    changePassword() {
      this.$router.push("/changePassword");
    },
    GotoPersonalInfo() {
      this.$router.push("/project/personalInfo/" + this.userId);
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/auth");
    },
    showMessageBox() {
      console.log(this.messages);
      this.isMessageBoxVisible = true;
      const button = this.$refs.messagesBtn;

      const buttonRect = button.getBoundingClientRect();
      const container = button.offsetParent;
      const containerRect = container.getBoundingClientRect();

      const messageBoxTop = buttonRect.bottom - containerRect.top;
      const messageBoxLeft = buttonRect.left - containerRect.left;
      this.messageBoxStyle = {
        top: `${messageBoxTop}px`,
        left: `${messageBoxLeft}px`,
        transform: `translate(-42%,0)`,
      };
      this.isMessageBoxVisible = true;
    },
    hideMessageBox() {
      this.isMessageBoxVisible = false;
    },

    showUserBox() {
      const button = this.$refs.userBtn;
      if (button !== null) {
        const buttonRect = button.getBoundingClientRect();
        const container = button.offsetParent;
        const containerRect = container.getBoundingClientRect();

        const userBoxTop = buttonRect.bottom - containerRect.top;
        const userBoxLeft = buttonRect.left - containerRect.left;
        this.userBoxStyle = {
          top: `${userBoxTop}px`,
          left: `${userBoxLeft}px`,
          transform: `translate(-42%,0)`,
        };
        this.isUserBoxVisible = true;
      }
    },
    hideUserBox() {
      this.isUserBoxVisible = false;
    },

    async loadOpenning() {
      //获取开场语和消息
      this.isLoading = true;
      try {
        await this.$store.dispatch("projects/loadOpenning", {
          token: this.token,
        });
      } catch (error) {
        this.error = error.message || "抱歉，加载出错，请重试";
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadOpenning("1");
    console.log(this.messages);
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 5vw 1fr;
  grid-template-rows: 2.5vw 1fr;
  height: 100vh;
  text-align: center;
  font-weight: bold;
}
menu {
  background-color: #a5d8ff;
  color: #fff;
  grid-column: 2/-1;
  display: flex;
  align-items: center;
  justify-content: right;
  /* padding: 0 40px; */
  padding: 0 2vw;
  font-size: 1vw;
}
nav {
  /* padding-top: 24px; */
  padding-top: 2vw;
  /* gap: 24px; */
  gap: 1.8vw;
  background-color: #adb5bd;
  color: #fff;
  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
}
.btn-box {
  display: flex;
  gap: 1vw;
}

/* button {
  display: inline-block;
  font-size: 12px;
  font-size: 0.9vw;
  font-weight: bold;

  border: none;
  cursor: pointer;
  color: #fff;

  padding: 8px 12px;
  padding: 0.2vw 0.2vw;
} */
.btn-nav {
  /* margin: 0 11px; */
  margin: 0 0.8vw;
  padding: 0.2vw 0.2vw;
  /* text-align: center; */
  /* height: 55px; 3.5*/
  height: 4vw;
  width: auto;
  font-size: 1vw;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #868e96; */

  border: 1.5px solid #fff;

  color: #fff;

  border-radius: 6px;
  text-decoration: none;
}

.btn-nav:hover,
.btn-nav:active,
.btn-nav.router-link-active {
  border-color: #c3fae8;
  color: #c3fae8;
  background-color: none;
}

.icon {
  width: 2vw;
  stroke: #f8f9fa;
  display: flex;
  align-items: center;
}
.message-btn {
  background-color: transparent;
  border: none;
}
.message-btn :hover,
.message-btn :active {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.message-box {
  position: absolute;
  width: 10vw;
  max-height: 50vh;

  display: flex;
  flex-direction: column;
  z-index: 10;
  background-color: #fff;
  padding-bottom: 1vw;
  /* 其他样式属性 */
}

.messages-sub-box {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.message-title {
  /* border: 1px solid black; */
  font-size: 1vw;
  font-weight: normal;
  padding: 0.5vw;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #a5d8ff;
}
.message {
  border-bottom: 1px solid #ccc;
  align-items: flex-end;
  padding: 0 0.3vw;
  margin-top: 0.8vw;
  display: flex;
  gap: 0.2vw;
}

.message-icon {
  width: 1vw;
}
.message-content {
  font-size: 0.9vw;
  font-weight: lighter;
  color: #555;
}

.messages-sub-box::-webkit-scrollbar {
  width: 5px; /* 设置滚动条宽度 */
}

.messages-sub-box:-webkit-scrollbar-track {
  background: #f1f1f1; /* 设置滚动条背景颜色 */
}

.messages-sub-box::-webkit-scrollbar-thumb {
  background: #ced4da; /* 设置滚动条滑块颜色 */
}

.messages-::-webkit-scrollbar-thumb:hover {
  background: #888; /* 设置滑块悬停时的颜色 */
}

.user-btn {
  border: none;
  background-color: transparent;
  color: #fff;
}
.user-btn-box {
  display: flex;
  gap: 0.3vw;
}
.user-icon {
  stroke: #f8f9fa;
  width: 2.2vw;
}

.user-box {
  position: absolute;
  width: 8vw;

  display: flex;
  flex-direction: column;
  z-index: 10;
  background-color: #fff;
  gap: 0.2vw;
  padding: 0.8vw 1vw;
}

.user-message-btn {
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.user-message-btn:active,
.user-message-btn:hover {
  border: none;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  background-color: #ccc;
}
</style>
