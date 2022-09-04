import Head from "next/head";
import { ProductsStyles } from "./style";
import { ProductsProps } from "../../types";
import ProductCard from "../ProductCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { StyledSlider } from "../../styles";
import SampleNextArrow from "../SampleNextArrow";
import SamplePrevArrow from "../SamplePrevArrow";
import sliderSettings from "../../constants/sliderSettings";

export default function Products({ products }: ProductsProps) {
  const settings = {
    ...sliderSettings,  
    nextArrow: <SampleNextArrow className="string" style={{}} onClick={() =>{}} />,
    prevArrow: <SamplePrevArrow className="string" style={{}} onClick={() =>{}} />
  };

  return (
    <ProductsStyles>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <StyledSlider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} /> 
        ))}
      </StyledSlider>
    </ProductsStyles>
  );
}
