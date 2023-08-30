<template>
    <div>
        <div class="blog__details__text">
            <Image :src="item.image"/>
            <div v-html="item.content" />
        </div>
        <div class="blog__details__content mb-3">
            <div class="row">
                <div v-if="item.user" class="col-lg-6">
                    <div class="blog__details__author">
                        <div class="blog__details__author__pic">
                            <Image :src="item.user?.img"/>
                        </div>
                        <div class="blog__details__author__text">
                            <h6>{{ (item.user?.firstname || '') + ' ' + (item.user?.lastname || '') }}</h6>
                            <span>{{ item.user?.role }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="blog__details__widget">
                        <ul>
                            <li><span>Categories:</span> {{ item.category?.title }}</li>
                            <li><span>Tags:</span> {{ item.tags?.reduce((a, b) => {
                                    a.push(b.title); return a;
                                }, []).join(', ')
                            }}</li>
                        </ul>
                        <div class="blog__details__social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-google-plus"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { BlogService } from "@/api";
import Image from '@components/Image/index.vue';

export default defineComponent({
    name: "PostDetail",
    components: { Image },
    inject: ['id'],
    data() {
        return {
            item: {}
        }
    },
    created(){
        this.getPostDetail();
    },
    methods: {
        async getPostDetail() {
            const resPost = await BlogService.getPostDetail(this.$route?.params.id || this.id);
            if (resPost?.post) {
                this.item = resPost.post?.[0];
            }
        }
    }
})
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.blog__details__text {
    margin-bottom: 45px;

    img {
        margin-bottom: 30px;
    }

    p {
        font-size: 18px;
        line-height: 30px;
    }

    h3 {
        color: #333333;
        font-weight: 700;
        line-height: 30px;
        margin-bottom: 30px;
    }
}

.blog__details__author__pic {
    float: left;
    margin-right: 15px;

    img {
        height: 92px;
        width: 92px;
        border-radius: 50%;
        object-fit: cover;
    }
}

.blog__details__author__text {
    overflow: hidden;
    padding-top: 30px;

    h6 {
        color: $normal-color;
        font-weight: 700;
    }

    span {
        font-size: 16px;
        color: $para-color;
    }
}

.blog__details__widget {

    ul {
        margin-bottom: 5px;

        li {
            font-size: 16px;
            color: $para-color;
            list-style: none;
            line-height: 30px;

            span {
                color: $normal-color;
                font-weight: 700;
            }
        }
    }

    .blog__details__social {

        a {
            display: inline-block;
            font-size: 20px;
            color: $para-color;
            margin-right: 24px;
            @include transition(all, .3s);

            &:hover {
                color: $primary-color;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>
