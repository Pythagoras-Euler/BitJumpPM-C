import { createStore } from "vuex";
import authModule from "./modules/auth";
import projectsModule from "./modules/projects";

const store = createStore({
  modules: {
    auth: authModule,
    projects: projectsModule,
  },
});

export default store;
