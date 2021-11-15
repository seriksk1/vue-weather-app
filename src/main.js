import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import App from "./App.vue";
import Weather from "./components/Weather.vue";
import CityInfo from "./components/CityInfo.vue";

const routes = [
  {
    path: "/",
    component: Weather,
  },
  {
    path: "/weather/:cityName/",
    component: CityInfo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
