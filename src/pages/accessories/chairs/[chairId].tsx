import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allChairs, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { chairId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(chairId));
  const chair  = getProductDetails(data);
  return {
    props: { chair }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allChairs);
  const paths = data.results.map((product: Details) => ({ params: { chairId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function ChairId({ chair } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ chair } />
  );
}