<template>
  <section class="blog spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-5 order-md-1 order-2">
          <Sidebar @search="searchPost" />
        </div>
        <div class="col-lg-8 col-md-7 order-md-1 order-2">
          <PostDetail />
        </div>
      </div>
      <div class="row">
        <div class="related-blog spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title related-blog-title">
                  <h2>Post You May Like</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-6" v-for="item in items" :key="item.id">
                <PostCard :item="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostDetail from "@/components/PostDetail/index.vue";
import Sidebar from "@components/Sidebar/index.vue";
import PostCard from "../components/Post/PostCard.vue";
import { BlogService } from "@/api";

export default defineComponent({
  name: "PostDetailView",
  components: {
    PostDetail,
    Sidebar,
    PostCard,
  },
  provide() {
    return {
      goToPage: this.goToPage,
      navigate: this.navigate,
      id: this.id,
      searchParams: this.searchParams
    };
  },
  props: {
    id: [String, Number],
    goToPage: Function,
    navigate: Function,
    searchParams: Object
  },
  data(){
    return {
      limit: 3,
      items: null
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const resPost = await BlogService.getPosts({
        limit: this.limit,
        offset: 0,
      }) as any;
      if (resPost?.post) {
        this.items = resPost.post;
      }
    },
    async searchPost(search: string) {
      const res = await BlogService.searchPost({
        value: "%" + search + "%",
        limit: this.limit,
        offset: 0,
      }) as any;
      if (res?.post) {
        this.items = res.post;
      }
    },
  }
});
</script>
