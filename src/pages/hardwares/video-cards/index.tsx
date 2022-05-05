import axios from "axios";
import Products from "../../../components/Products";
import { allVideoCards } from "../../../constants/endPoints";
import getProducts from "../../../functions/getProducts";
import { ProductsProps } from "../../../types";

export async function getStaticProps() {
  const { data } = await axios.get(allVideoCards);
  const products = getProducts(data.results);

  return {
    props: { products }
  };
}

export default function VideoCards({ products }: ProductsProps) {
  return (
    <Products products={products} path="video-cards" />
  );
}