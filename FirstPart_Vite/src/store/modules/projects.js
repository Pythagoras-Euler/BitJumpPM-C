import { getProjList } from "../../web/func/project_new/projManage";
import { getSchedule } from "../../web/func/schedule";

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

      const resData = await getProjList()
      context.commit("setProjects", resData)
      return;

      //获取项目列表
      console.log(payload);
      const response = await fetch(
        "http://127.0.0.1:4523/m1/2693357-0-default/project/list"
      );
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to fetch");
        throw error;
      } else {
        const projects = responseData.data;
        context.commit("setProjects", projects);
      }
    },

    async loadOpenning(context, payload) {
      const resData = getSchedule()
      context.commit("setGreeting", resData.greeting)
      const schedule = resData.schedule;
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
      context.commit("setMessages", messages);
      return;

      context.commit("setMessages", messages);

      //获取项目列表
      console.log(payload);
      const response = await fetch(
        "http://127.0.0.1:4523/m1/2693357-0-default/user/schedule"
      );
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to fetch");
        throw error;
      } else {
        const opening = responseData.data;
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
      }
    },
    async loadPersonalData(context, payload) {
      //获取个人信息列表
      console.log(payload);
      const response = await fetch(
        "http://127.0.0.1:4523/m1/2693357-0-default/user/1/info"
      );
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to fetch");
        throw error;
      } else {
        const info = responseData.data;

        context.commit("setPersonalData", info);
      }
    },
  },
};
