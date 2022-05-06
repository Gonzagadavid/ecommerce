import axios from "axios";
import Products from "../../../components/Products";
import { allPrinters } from "../../../constants/endPoints";
import getProducts from "../../../functions/getProducts";
import { ProductsProps } from "../../../types";

export async function getStaticProps() {
  const { data } = await axios.get(allPrinters);
  const products = getProducts(data.results);
  
  return {
    props: { products }
  };
}

export default function Printers({ products }: ProductsProps) {
  return (
    <Products products={products} />
  );
}