import { createRouter, createWebHistory } from "vue-router";
import InitialPage from "./pages/InitialPage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import MainPage from "./pages/project/MainPage.vue";
import CreatePage from "./pages/project/CreatePage.vue";
import ManagePage from "./pages/project/ManagePage.vue";
import JoinedPage from "./pages/project/JoinedPage.vue";
import ProjectDetailPage from "./pages/project/ProjectDetailPage.vue";
import ChangeInfoPage from "./pages/project/ChangeInfoPage.vue";
import ChangePasswrodPage from "./pages/project/ChangePasswordPage.vue";
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
        requiredAuth: true,
      },
      children: [
        {
          path: "main",
          component: MainPage,
        },
        {
          path: "create",
          component: CreatePage,
        },
        {
          path: "manage",
          component: ManagePage,
        },
        {
          path: "manage/:projectId",
          component: ProjectDetailPage,
          props: true,
        },

        {
          path: "joined",
          component: JoinedPage,
        },
        {
          path: "joined/:projectId",
          component: ProjectDetailPage,
          props: true,
        },

        {
          path: "personalInfo/:userId",
          component: ChangeInfoPage,
          props: true,
        },
      ],
    },
    {
      path: "/changePassword",
      component: ChangePasswrodPage,
    },

    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach(function (to, from, next) {
  const requiredAuth = to.matched.some((record) => record.meta.requiredAuth);
  // console.log(requiredAuth);
  // console.log(store.getters.isLoggedin);
  if (requiredAuth && !store.getters.isLoggedin) {
    next("/auth");
  } else if (to.meta.requiredUnAuth && store.getters.isLoggedin) {
    next("/project");
  } else {
    console.log(store.getters.userId);
    next();
  }
});

export default router;
