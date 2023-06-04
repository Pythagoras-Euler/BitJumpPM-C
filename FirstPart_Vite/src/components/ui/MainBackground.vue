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
      <router-link mode="outline" to="/project/main" class="btn-nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon-nav"
        >
          <path
            d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
          />
          <path
            d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
          />
        </svg>

        <span class="text-nav"> 主页 </span>
      </router-link>

      <router-link link mode="outline" to="/project/create" class="btn-nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon-nav"
        >
          <path
            fill-rule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clip-rule="evenodd"
          />
        </svg>

        <span class="text-nav"> 我创建的 </span>
      </router-link>
      <router-link mode="outline" link to="/project/manage" class="btn-nav"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon-nav"
        >
          <path
            fill-rule="evenodd"
            d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          />
          <path
            d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"
          />
        </svg>

        <span class="text-nav"> 我管理的 </span>
      </router-link>
      <router-link mode="outline" link to="/project/joined" class="btn-nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon-nav"
        >
          <path
            fill-rule="evenodd"
            d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
            clip-rule="evenodd"
          />
        </svg>

        <span class="text-nav"> 我加入的 </span>
      </router-link>
    </nav>
    <div class="menu-box">
      <div class="menu">
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
      </div>
    </div>
    <div>
      <base-dialog :show="!!error" title="加载错误" @close="confirmError">
        <template #default>
          <p>{{ error }}</p>
        </template>
        <template #action>
          <BaseButton
            mode="outline"
            class="message-button"
            @click="confirmError"
            >确定</BaseButton
          >
        </template>
      </base-dialog>

      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["toggleLoading"],
  data() {
    return {
      isMessageBoxVisible: false,
      messageBoxStyle: {},
      isUserBoxVisible: false,
      userBoxStyle: {},
      error: "",
      // isLoading: true,
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
    confirmError() {
      this.error = null;
    },
    changePassword() {
      this.$router.push("/changePassword");
    },
    GotoPersonalInfo() {
      this.$router.push("/project/personalInfo/" + this.userId);
    },
    async logout() {
      // console.log(logout);

      await this.$store.dispatch("vxLogout");
      this.$router.push("/auth");
    },
    showMessageBox() {
      //console.log(this.messages);
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
      // this.isLoading = true;
      this.$emit("toggleLoading");
      console.log("begin");
      try {
        await this.$store.dispatch("projects/loadOpenning", {
          token: this.token,
        });
      } catch (error) {
        this.error = error.message || "抱歉，加载出错，请重试";
      }
      this.$emit("toggleLoading");
      console.log("end");
      // this.isLoading = false;
    },
  },
  created() {
    this.loadOpenning("1");
    //console.log(this.messages);
  },
};
</script>

<style scoped>
.message-button {
  border-radius: 6px;
  font-size: 1vw;
}

.container {
  display: grid;
  grid-template-columns: 8vw 1fr;
  grid-template-rows: 2.5vw 1fr;
  height: 100vh;
  text-align: center;
  font-weight: bold;
}
.menu-box {
  display: flex;
  align-items: center;
}
.menu {
  height: 100%;
  width: 100%;
  background-color: #a5d8ff;
  color: #fff;
  grid-column: 2/-1;
  display: flex;
  align-items: center;
  justify-content: right;
  /* padding: 0 40px; */
  padding: 0 2vw;
  font-size: 1vw;

  border-radius: 0 0 12px 12px;
  box-shadow: 0 2px 5px rgba(109, 177, 255, 0.26);

  margin: 0 1vw;
}
nav {
  /* padding-top: 24px; */
  padding-top: 2vw;
  /* gap: 24px; */
  gap: 1.8vw;
  background-color: #adb5bd;

  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
}

.icon-nav {
  width: 24px;
}
.btn-nav:hover .text-nav,
.btn-nav:active .text-nav,
.btn-nav.router-link-active .text-nav {
  color: #fff;
  font-size: 1.05vw;
}
.btn-nav {
  /* margin: 0 0.8vw;
  padding: 0.2vw 0.2vw; */
  height: 4vw;
  width: auto;
  font-size: 1vw;
  color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1.5px solid #fff; */

  text-decoration: none;
  gap: 0.3vw;
}

.btn-nav:hover,
.btn-nav:active,
.btn-nav.router-link-active {
  color: #c3fae8;
  background-color: #868e96;
}
.btn-box {
  display: flex;
  gap: 1vw;
}

.icon {
  width: 2vw;
  stroke: #ba70cc;
  display: flex;
  align-items: center;
}

.icon:hover,
.icon:active {
  stroke: #9c36b5;
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
  color: #ba70cc;
  font-weight: bold;
}

.user-btn:hover,
.user-btn:active {
  color: #9c36b5;
  cursor: pointer;
}
.user-btn-box {
  display: flex;
  gap: 0.3vw;
}
.user-icon {
  fill: #ba70cc;
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
