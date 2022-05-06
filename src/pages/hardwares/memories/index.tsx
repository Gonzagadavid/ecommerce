import axios from "axios";
import Products from "../../../components/Products";
import { allMemories } from "../../../constants/endPoints";
import getProducts from "../../../functions/getProducts";
import { ProductsProps } from "../../../types";

export async function getStaticProps() {
  const { data } = await axios.get(allMemories);
  const products = getProducts(data.results);
  
  return {
    props: { products }
  };
}

export default function Memories({ products }: ProductsProps) {
  return (
    <Products products={products} />
  );
}