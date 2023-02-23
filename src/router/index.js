import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import GalleryView from "../views/GalleryView.vue";
import NewsView from "../views/NewsView.vue";
import FamilyTreeView from "../views/FamilyTreeView.vue";
import NewsArticleView from "../views/NewsArticleView.vue";
import ImprintView from "../views/ImprintView.vue";
import PrivacyView from "../views/PrivacyView.vue";

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
    {
      path: "/neuigkeiten/:newsId",
      name: "news-article",
      component: NewsArticleView,
    },
    {
      path: "/stammbaum",
      name: "family-tree",
      component: FamilyTreeView,
    },
    {
      path: "/impressum",
      name: "imprint",
      component: ImprintView,
    },
    {
      path: "/datenschutz",
      name: "privacy",
      component: PrivacyView,
    },
  ],
});

export default router;
