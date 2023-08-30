import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/blog",
    name: "post",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "",
        component: () => import(/* webpackChunkName: "post" */ "../views/PostView.vue"),
      },
      {
        path: ":id",
        name: 'post-detail',
        component: () => import(/* webpackChunkName: "post-detail" */ "../views/PostDetailView.vue"),
      }
    ],
  },
  {
    path: '/category',
    name: 'category',
    children: [
      {
        path: ":categoryId",
        component: () => import(/* webpackChunkName: "post" */ "../views/PostView.vue"),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
