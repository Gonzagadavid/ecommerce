/* eslint-disable @typescript-eslint/no-empty-function */
import Head from "next/head";
import { ProductsStyles } from "../styles";
import { ProductsProps } from "../types";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StyledSlider } from "../styles";

export default function Products({ products }: ProductsProps) {

  function SampleNextArrow(props: { className: string, style: object, onClick: () => void }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: { className: string, style: object, onClick: () => void }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  // const { list, inc, dec } = useExibition(products, 4);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow className="string" style={{}} onClick={() =>{}} />,
    prevArrow: <SamplePrevArrow className="string" style={{}} onClick={() =>{}} />
  };
  return (
    <ProductsStyles>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      {/* <button onClick={dec}>{'<'}</button> */}
      <StyledSlider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} /> 
        ))}
      </StyledSlider>
      {/* <button onClick={inc}>{'>'}</button> */}
    </ProductsStyles>
  );
}
