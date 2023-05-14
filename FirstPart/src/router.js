import { createRouter, createWebHistory } from "vue-router";
import InitialPage from "./pages/InitialPage.vue";
import MainPage from "./pages/MainPage.vue";
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
      path: "/main",
      component: MainPage,
      meta: {
        requiredAuth: true,
      },
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
    next("/main");
  } else {
    console.log(store.getters.userId);
    next();
  }
});

export default router;
