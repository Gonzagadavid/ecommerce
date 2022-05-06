import axios from "axios";
import Products from "../../../components/Products";
import { allBases } from "../../../constants/endPoints";
import getProducts from "../../../functions/getProducts";
import { ProductsProps } from "../../../types";

export async function getStaticProps() {
  const { data } = await axios.get(allBases);
  const products = getProducts(data.results);
  
  return {
    props: { products }
  };
}

export default function Bases({ products }: ProductsProps) {
  return (
    <Products products={products} />
  );
}