<template>
  <div class="blog__item">
    <div class="blog__item__pic" @click="navigate(`/blog/${item.id}`)">
      <Image :src="item.image" />
    </div>
    <div class="blog__item__text">
      <ul>
        <li><i class="fa fa-calendar-o" /> {{ formatDate(item.create_at) }}</li>
        <li><i class="fa fa-comment-o" /> {{ item.comments?.length }}</li>
      </ul>
      <h5>
        <div class="link">
          {{ item.title }}
        </div>
      </h5>
      <p class="text-truncate-3">{{ item.content }}</p>
      <div
        v-if="item.isShowReadMore"
        class="blog__btn"
        @click="navigate(`/blog/${item.id}`)"
      >
        READ MORE <span class="arrow_right"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import mixins from "@/mixins";
import Image from "@components/Image/index.vue";

export default defineComponent({
  name: "Post",
  components: { Image },
  mixins: [mixins],
  inject: ["navigate"],
  props: {
    item: {
      type: Object,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.blog__item {
  margin-bottom: 60px;
}

.blog__item__pic {
  img {
    min-width: 100%;
    height: 240px;
    object-fit: cover;
  }
}

.blog__item__text {
  padding-top: 25px;

  ul {
    margin-bottom: 15px;

    li {
      font-size: 16px;
      color: #b2b2b2;
      list-style: none;
      display: inline-block;
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  h5 {
    margin-bottom: 12px;

    .link {
      font-size: 20px;
      color: $normal-color;
      font-weight: 700;
    }
  }

  p {
    margin-bottom: 25px;
  }

  .blog__btn {
    display: inline-block;
    font-size: 14px;
    color: $normal-color;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 1px solid #b2b2b2;
    padding: 14px 20px 12px;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: $normal-color;
      color: #ffffff;
    }

    span {
      position: relative;
      top: 1px;
      margin-left: 5px;
    }
  }
}
</style>
