import { createApp } from "vue";

import PostView from "./PostView.vue";

export default (el: any, props: any) => {
  createApp(PostView, props).mount(el);
};
