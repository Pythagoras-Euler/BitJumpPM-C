export default {
  namespaced: true,
  state: {
    projects: [],
  },
  getters: {
    projects(state) {
      return state.projects;
    },
    hasProject(state) {
      return state.projects && state.projects.length > 0;
    },
  },

  mutations: {
    setProjects(state, payload) {
      state.projects = payload;
    },
  },

  actions: {
    async loadProjects(context, payload) {
      //获取项目列表
      console.log(payload);
      const response = await fetch(
        "http://127.0.0.1:4523/m1/2693357-0-default/project/list/1"
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
  },
};
