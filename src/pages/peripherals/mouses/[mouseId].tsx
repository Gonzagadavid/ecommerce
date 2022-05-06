import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allMouses, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { mouseId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(mouseId));
  const mouse  = getProductDetails(data);
  return {
    props: { mouse }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allMouses);
  const paths = data.results.map((product: Details) => ({ params: { mouseId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function MouseId({ mouse } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ mouse } />
  );
}