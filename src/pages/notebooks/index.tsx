import { allNotebook } from "../../constants/endPoints";
import axios from 'axios';
import getProducts from "../../functions/getProducts";
import { ProductsProps } from "../../types";
import Products from "../../components/Products";

export async function getStaticProps() {
  const { data } = await axios.get(allNotebook);
  const products = getProducts(data.results);
  return { props: { products } };
}

export default function Computers({ products }: ProductsProps) {
  return (
    <>
      <h1>Computadores</h1>
      <Products products={products} />
    </>
  );
}