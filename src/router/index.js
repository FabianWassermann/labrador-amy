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
      meta: {
        title: "Kontakt",
      },
    },
    {
      path: "/ueber-uns",
      name: "about",
      component: AboutView,
      meta: {
        title: "Über uns",
      },
    },
    {
      path: "/galerie",
      name: "gallery",
      component: GalleryView,
      meta: {
        title: "Galerie",
      },
    },
    {
      path: "/neuigkeiten",
      name: "news",
      component: NewsView,
      meta: {
        title: "Neuigkeiten",
      },
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
      meta: {
        title: "Stammbaum",
      },
    },
    {
      path: "/impressum",
      name: "imprint",
      component: ImprintView,
      meta: {
        title: "Impressum",
      },
    },
    {
      path: "/datenschutz",
      name: "privacy",
      component: PrivacyView,
      meta: {
        title: "Datenschutz",
      },
    },
  ],
});

// meta guard
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  if (nearestWithTitle) {
    document.title =
      "Labrador vom Salzkofelblick | " + nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
