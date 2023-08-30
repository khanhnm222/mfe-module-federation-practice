import { createApp } from "vue";

import App from "./App.vue";

export default (el: any, props: any) => {
  createApp(App, props).mount(el);
};
