<template>
  <img :src="src || defaultImg" :alt="alt" @error="replaceByDefault" />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Image",
  props: {
    src: String,
    alt: String
  },
  data(){
    return {
        defaultImg: require("@/assets/img/default.png")
    }
  },
  methods: {
    replaceByDefault(e){
        e.target.src = this.defaultImg
    }
  }
});
</script>
