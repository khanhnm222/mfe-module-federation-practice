import React  from 'react';
import Category from './Category';
import FeaturedProducts from './FeaturedProducts';
import ProductSmallSlider from './ProductSmallSlider';
import NewPosts from './NewPosts';
import Banner from './Banner';


const Homepage = () => {
  return (
    <>
      <Category />
      <FeaturedProducts />
      <Banner />
      <ProductSmallSlider/>
      <NewPosts />
    </>
  )
}

export default Homepage;
