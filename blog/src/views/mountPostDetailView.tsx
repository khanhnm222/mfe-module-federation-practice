import { createApp } from "vue";

import PostDetailView from "./PostDetailView.vue";

export default (el: any, props: any) => {
  createApp(PostDetailView, props).mount(el);
};
