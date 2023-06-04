import { getProjList } from "@/web/func/project_new/projManage.js";
import { getSchedule } from "../../web/func/schedule";
import { getPersonInfo } from "../../web/func/personInfo.js";
export default {
  namespaced: true,
  state: {
    projects: [],
    messages: [],
    greeting: null,
    personalData: null,
  },
  getters: {
    projects(state) {
      return state.projects;
    },
    hasProject(state) {
      return state.projects && state.projects.length > 0;
    },
    greeting(state) {
      return state.greeting;
    },
    messages(state) {
      return state.messages;
    },
    personalData(state) {
      return state.personalData;
    },
  },

  mutations: {
    setProjects(state, payload) {
      state.projects = payload;
    },
    setGreeting(state, payload) {
      state.greeting = payload;
    },
    setMessages(state, payload) {
      state.messages = payload;
    },
    setPersonalData(state, payload) {
      state.personalData = payload;
    },
  },

  actions: {
    async loadProjects(context, payload) {
      //console.log(payload);
      try {
        const response = await getProjList(payload.mode);
        //  console.log(response);
        context.commit("setProjects", response);
      } catch (error) {
        console.log(error);
        throw error;
      }

      // //获取项目列表
      // console.log(payload);
      // const response = await fetch(
      //   "http://127.0.0.1:4523/m1/2693357-0-default/project/list"
      // );
      // const responseData = await response.json();

      // if (!response.ok) {
      //   const error = new Error(responseData.message || "Failed to fetch");
      //   throw error;
      // } else {
      //   // 真正通信的时候，直接返回数据，不用访问.data属性
      //   const projects = responseData.data;
      //   context.commit("setProjects", projects);
      // }
    },

    async loadOpenning(context, payload) {
      try {
        const response = await getSchedule();
        console.log(response);
        const opening = response;
        context.commit("setGreeting", opening.greeting);
        const schedule = opening.schedule;
        const messages = [];
        //console.log(schedule);
        schedule.forEach((item) => {
          item.names.forEach((name) => {
            messages.push({
              name: name,
              endTime: item.endTime,
            });
          });
        });
        //console.log(messages);
        context.commit("setMessages", messages);
        console.log(messages);
      } catch (error) {
        console.log(error);
        throw error;
      }
      // //获取项目列表
      // console.log(payload);
      // const response = await fetch(
      //   "http://127.0.0.1:4523/m1/2693357-0-default/user/schedule"
      // );
      // const responseData = await response.json();

      // if (!response.ok) {
      //   const error = new Error(responseData.message || "Failed to fetch");
      //   throw error;
      // } else {
      //   const opening = responseData.data;
      //   context.commit("setGreeting", opening.greeting);
      //   const schedule = opening.schedule;
      //   const messages = [];
      //   //console.log(schedule);
      //   schedule.forEach((item) => {
      //     item.names.forEach((name) => {
      //       messages.push({
      //         name: name,
      //         endTime: item.endTime,
      //       });
      //     });
      //   });
      //   //console.log(messages);
      //   context.commit("setMessages", messages);
      // }
    },
    async loadPersonalData(context, payload) {
      try {
        //console.log(payload);
        const response = await getPersonInfo(payload.userId);
        context.commit("setPersonalData", response);
        //console.log(response);
        //console.log(response);
      } catch (error) {
        console.log(error);
        throw error;
      }

      // //获取个人信息列表
      // console.log(payload);
      // const response = await fetch(
      //   "http://127.0.0.1:4523/m1/2693357-0-default/user/1/info"
      // );
      // const responseData = await response.json();

      // if (!response.ok) {
      //   const error = new Error(responseData.message || "Failed to fetch");
      //   throw error;
      // } else {
      //   const info = responseData.data;
      //   context.commit("setPersonalData", info);
      // }
    },
  },
};
