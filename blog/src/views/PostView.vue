<template>
  <section class="blog spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-5 order-md-1 order-2">
          <Sidebar @search="searchPost" />
        </div>
        <div class="col-lg-8 col-md-7 order-md-1 order-2">
          <div class="row">
            <div
              class="col-lg-6 col-md-6 col-sm-6"
              v-for="item in items"
              :key="item.id"
            >
              <PostCard :item="{ ...item, isShowReadMore: true }" />
            </div>
          </div>
          <div v-if="total" class="product__pagination blog__pagination">
            <a
              :class="{ active: index - 1 === offset }"
              v-for="index in paginations"
              :key="index"
              @click="goToPage(index - 1)"
              >{{ index }}</a
            >
            <a
              v-if="paginations > 1"
              :class="{ disabled: paginations - 1 === offset }"
              @click="goToPage(offset + 1)"
              ><i class="fa fa-long-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import PostCard from "@components/Post/PostCard.vue";
import { BlogService } from "@/api";
import Sidebar from '@components/Sidebar/index.vue'

export default defineComponent({
  name: "PostView",
  components: {
    PostCard,
    Sidebar
  },
  provide() {
    return {
      goToPage: this.goToPage,
      navigate: this.navigate,
      searchParams: this.searchParams
    };
  },
  props: {
    data: [Object, Array],
    goToPage: Function,
    navigate: Function,
    searchParams: Object
  },
  data() {
    return {
      items: null,
      total: 0,
      limit: 6,
      offset: 0,
      paginations: 0,
    };
  },
  created() {
    const search = this.searchParams?.search;
    if (search) {
      this.searchPost(search);
    } else {
      this.getPosts(this.offset, true);
    }
  },
  methods: {
    async searchPost(search) {
      const res = await BlogService.searchPost({
        value: "%" + search + "%",
        limit: this.limit,
        offset: 0,
      });
      if (res?.post) {
        this.items = res.post;
        this.resetList();
      }
    },
    resetList() {
      this.offset = 0;
      this.paginations = Math.ceil(this.total / this.limit);
    },
    async getPosts(offset, isCreated = false) {
      const resPost = await BlogService.getPosts({
        limit: this.limit,
        offset: offset,
      });
      if (resPost?.post) {
        this.items = resPost.post;
        this.offset = offset;
        if (isCreated) this.resetList();
      }
    },
    // goToPage(offset) {
    //   this.getPosts(offset);
    // },
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.product__pagination {
  padding-top: 10px;

  a {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #b2b2b2;
    font-size: 14px;
    color: #b2b2b2;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    margin-right: 16px;
    @include transition(all, 0.3s);

    &.active {
      background: $primary-color;
      border-color: $primary-color;
      color: $white-color;
    }

    &.disabled {
      opacity: 0.5;
    }

    &:not(.disabled):hover {
      background: $primary-color;
      border-color: $primary-color;
      color: $white-color;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
