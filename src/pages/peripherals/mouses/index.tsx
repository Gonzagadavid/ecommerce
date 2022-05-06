import axios from "axios";
import Products from "../../../components/Products";
import { allMouses } from "../../../constants/endPoints";
import getProducts from "../../../functions/getProducts";
import { ProductsProps } from "../../../types";

export async function getStaticProps() {
  const { data } = await axios.get(allMouses);
  const products = getProducts(data.results);
  
  return {
    props: { products }
  };
}

export default function Mouses({ products }: ProductsProps) {
  return (
    <Products products={products} />
  );
}