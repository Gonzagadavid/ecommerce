import axios from "axios";
import Products from "../../../components/Products";
import { allControls } from "../../../constants/endPoints";
import getProducts from "../../../functions/getProducts";
import { ProductsProps } from "../../../types";

export async function getStaticProps() {
  const { data } = await axios.get(allControls);
  const products = getProducts(data.results);
  
  return {
    props: { products }
  };
}

export default function Controls({ products }: ProductsProps) {
  return (
    <Products products={products} path="controls" />
  );
}