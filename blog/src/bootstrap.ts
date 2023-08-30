import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/scss/style.scss';
import filters from "./utils/filters";
import { useNotificationStore } from '@dafcoe/vue-notification'

const app = createApp(App);
app.use(useNotificationStore);
app.provide('$filters', filters);
app.use(store).use(router).mount("#app");
