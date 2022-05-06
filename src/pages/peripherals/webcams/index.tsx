import axios from "axios";
import Products from "../../../components/Products";
import { allWebcams } from "../../../constants/endPoints";
import getProducts from "../../../functions/getProducts";
import { ProductsProps } from "../../../types";

export async function getStaticProps() {
  const { data } = await axios.get(allWebcams);
  const products = getProducts(data.results);
  
  return {
    props: { products }
  };
}

export default function Webcams({ products }: ProductsProps) {
  return (
    <Products products={products} path="webcams" />
  );
}