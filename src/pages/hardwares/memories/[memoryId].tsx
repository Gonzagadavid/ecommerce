import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allMemories, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { memoryId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(memoryId));
  const memory  = getProductDetails(data);
  return {
    props: { memory }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allMemories);
  const paths = data.results.map((product: Details) => ({ params: { memoryId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function MemoryId({ memory } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ memory } />
  );
}