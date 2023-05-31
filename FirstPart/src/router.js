import { createRouter, createWebHistory } from "vue-router";
import InitialPage from "./pages/InitialPage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import MainPage from "./pages/project/MainPage.vue";
import CreatePage from "./pages/project/CreatePage.vue";
import ManagePage from "./pages/project/ManagePage.vue";
import JoinedPage from "./pages/project/JoinedPage.vue";
import ProjectDetailPage from "./pages/project/ProjectDetailPage.vue";
import NotFound from "./pages/NotFound.vue";
import store from "./store/index.js";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/auth",
    },
    {
      path: "/auth",
      component: InitialPage,
      meta: {
        requiredUnAuth: true,
      },
    },
    {
      path: "/project",
      redirect: "/project/main",
      component: ProjectPage,
      meta: {
        requiredUnAuth: false,
      },
      children: [
        {
          path: "main",
          component: MainPage,
        },
        {
          path: "create",
          component: CreatePage,
          meta: {
            requiredAuth: true,
          },
        },
        {
          path: "manage",
          component: ManagePage,
          meta: {
            requiredAuth: true,
          },
        },
        {
          path: "manage/:id",
          component: ProjectDetailPage,
          props: true,
        },

        {
          path: "joined",
          component: JoinedPage,
          meta: {
            requiredAuth: true,
          },
        },
        {
          path: "joined/:id",
          component: ProjectDetailPage,
          props: true,
        },
      ],
    },

    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.meta.requiredAuth && !store.getters.isLoggedin) {
    next("/auth");
  } else if (to.meta.requiredUnAuth && store.getters.isLoggedin) {
    next("/project");
  } else {
    console.log(store.getters.userId);
    next();
  }
});

export default router;
