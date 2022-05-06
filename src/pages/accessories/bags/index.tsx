import axios from "axios";
import Products from "../../../components/Products";
import { allBags } from "../../../constants/endPoints";
import getProducts from "../../../functions/getProducts";
import { ProductsProps } from "../../../types";

export async function getStaticProps() {
  const { data } = await axios.get(allBags);
  const products = getProducts(data.results);
  
  return {
    props: { products }
  };
}

export default function Bags({ products }: ProductsProps) {
  return (
    <Products products={products} path="bags" />
  );
}