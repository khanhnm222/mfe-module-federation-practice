<template>
    <div class="blog__sidebar">
        <div class="blog__sidebar__search">
            <input type="text" v-model="input" placeholder="Search..." @keydown.enter="onSearch">
            <button @click="onSearch"><span class="icon_search"></span></button>
        </div>
        <div class="blog__sidebar__item">
            <h4>Categories</h4>
            <ul>
                <li><a @click="getAllBlogs">All</a></li>
                <li v-for="item in categories" :key="item.id" class="text-capitalize">
                    <a>{{ item.title }} ({{ item.number_post }})</a>
                </li>
            </ul>
        </div>
        <div class="blog__sidebar__item">
            <h4>Recent News</h4>
            <div class="blog__sidebar__recent">
                <PostSmallCard v-for="item in items" :key="item.id" :item="item" />
            </div>
        </div>
        <div class="blog__sidebar__item">
            <SearchSelectbox />
        </div>
    </div>
</template>
<script>
import { BlogService } from '@/api'
import { defineComponent } from 'vue'
import PostSmallCard from '../Post/PostSmallCard.vue'
import SearchSelectbox from '../SearchSelectbox/index.vue'

export default defineComponent({
    name: 'Sidebar',
    components: { PostSmallCard, SearchSelectbox },
    inject: ['goToPage', 'searchParams'],
    data() {
        return {
            items: null,
            categories: null,
            input: this.searchParams?.search,
        }
    },
    async created() {
        const resCategory = await BlogService.getCategories();
        if (resCategory?.blog_category) {
            this.categories = resCategory.blog_category
        };

        const resPost = await BlogService.getPosts({ limit: 3, offset: 0 });
        if (resPost?.post) {
            this.items = resPost.post
        }
    },
    methods: {
        onSearch(){
            this.goToPage(`/blog?search=${this.input}`);
            this.$emit('search', this.input)
        }
    },
})
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.blog__sidebar {
    padding-top: 50px;
}

.blog__sidebar__item {
    margin-bottom: 50px;

    h4 {
        color: $normal-color;
        font-weight: 700;
        margin-bottom: 25px;
    }

    ul {

        li {
            list-style: none;

            a {
                font-size: 16px;
                color: #666666;
                line-height: 48px;
                @include transition(all, .3s);

                &:hover {
                    color: $primary-color;
                }
            }
        }
    }
}

.blog__sidebar__search {
    margin-bottom: 50px;
    position: relative;

    input {
        width: 100%;
        height: 46px;
        font-size: 16px;
        color: $para-color;
        padding-left: 15px;
        border: 1px solid #e1e1e1;
        border-radius: 20px;

        &::placeholder {
            color: $para-color;
        }
    }

    button {
        font-size: 16px;
        color: $para-color;
        background: transparent;
        border: none;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        padding: 0px 18px;
    }
}

.blog__sidebar__recent {

    .blog__sidebar__recent__item {
        display: block;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
