import React from "react";
import { mountRemoteComponent } from "@/utils/loadComponent";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  return (
    <div>
      {mountRemoteComponent({
        module: 'product', component: 'FeaturedProducts', props: {
          navigate,
        },
      })}
    </div>
  );
};

export default FeaturedProducts;
