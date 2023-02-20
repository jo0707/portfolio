import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactView from "@/views/ContactView.vue";

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
    component: AboutView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];
