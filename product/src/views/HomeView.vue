<template>
  <div>
    <SuggestProducts/>
    <!-- <ProductCard/>
    <ProductSmallCard/>
    <ProductSmallSlider/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "@/components/Product/ProductCard.vue";
import ProductSmallCard from "@/components/Product/ProductSmallCard.vue";
import ProductSmallSlider from "@/components/Slider/ProductSmallSlider.vue"; 
import SuggestProducts from "@/components/Product/SuggestProducts.vue"; 

export default defineComponent({
  name: "HomeView",
  components: {
    ProductCard,
    ProductSmallCard,
    ProductSmallSlider,
    SuggestProducts
},
});
</script>
