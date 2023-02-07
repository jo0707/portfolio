import HomeView from "@/views/HomeView.vue";

export const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/ProjectsView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/ContactView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];
