import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Contianer from "@/components/container/src/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Contianer,
      children: [
        {
          path: "/",
          component: HomeView
        },
        {
          path: "/chooseIcon",
          component: () => import("@/views/chooseIcon/index.vue")
        }
      ]
    }
  ]
});

export default router;
