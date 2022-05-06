import axios from "axios";
import Products from "../../../components/Products";
import { allSupply } from "../../../constants/endPoints";
import getProducts from "../../../functions/getProducts";
import { ProductsProps } from "../../../types";

export async function getStaticProps() {
  const { data } = await axios.get(allSupply);
  const products = getProducts(data.results);

  return {
    props: { products }
  };
}

export default function Supply({ products }: ProductsProps) {
  return (
    <Products products={products} />
  );
}