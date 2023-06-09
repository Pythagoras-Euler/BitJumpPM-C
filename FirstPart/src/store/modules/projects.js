export default {
  namespaced: true,
  state: {
    projects: [],
    messages: [],
    greeting: [],
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
  },

  actions: {
    async loadProjects(context, payload) {
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
  },
};
