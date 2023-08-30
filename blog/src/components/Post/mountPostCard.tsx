import { createApp } from "vue";

import PostCard from "./PostCard.vue";

export default (el: any, props: any) => {
  createApp(PostCard, props).mount(el);
};
