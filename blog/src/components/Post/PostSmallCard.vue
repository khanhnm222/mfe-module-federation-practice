<template>
  <a @click="navigate(`/blog/${item.id}`)" class="blog__sidebar__recent__item">
    <div class="blog__sidebar__recent__item__pic">
      <Image :src="item.image"/>
    </div>
    <div class="blog__sidebar__recent__item__text">
      <h6>{{ item.title }}</h6>
      <span>{{ formatDate(item.create_at) }}</span>
    </div>
  </a>
</template>

<script lang="ts">
import mixins from '@/mixins';
import { defineComponent } from 'vue';
import Image from '@components/Image/index.vue';

export default defineComponent({
  name: 'Post',
  components: { Image },
  mixins: [mixins],
  inject: ['navigate'],
  props: {
    item: Object
  },
});
</script>

<style lang="scss" scoped>
.blog__sidebar__recent__item {
    overflow: hidden;
    margin-bottom: 20px;
}

.blog__sidebar__recent__item__pic {
    float: left;
    margin-right: 20px;
    width: 25%;
    min-width: 80px;
    img{
      object-fit: cover;
      width: 100%;
      height: 70px
    }
}

.blog__sidebar__recent__item__text {
    overflow: hidden;

    h6 {
        font-weight: 700;
        color: #333333;
        line-height: 20px;
        margin-bottom: 5px;
    }

    span {
        font-size: 12px;
        color: #999999;
        text-transform: uppercase;
    }
}
</style>
