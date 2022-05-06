import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allKeyboards, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { keyboardId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(keyboardId));
  const keyboard  = getProductDetails(data);
  return {
    props: { keyboard }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allKeyboards);
  const paths = data.results.map((product: Details) => ({ params: { keyboardId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function KeyboardId({ keyboard } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ keyboard } />
  );
}