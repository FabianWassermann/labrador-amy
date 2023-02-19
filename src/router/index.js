import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import GalleryView from "../views/GalleryView.vue";
import NewsView from "../views/NewsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/kontakt",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/ueber-uns",
      name: "about",
      component: AboutView,
    },
    {
      path: "/galerie",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/neuigkeiten",
      name: "news",
      component: NewsView,
    },
  ],
});

export default router;
