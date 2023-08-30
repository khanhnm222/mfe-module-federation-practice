import { createApp } from "vue";

import PostList from "./PostList.vue";

export default (el: any, props: any) => {
  createApp(PostList, props).mount(el);
};
