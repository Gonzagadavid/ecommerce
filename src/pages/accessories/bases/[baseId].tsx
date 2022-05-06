import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allBases, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { baseId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(baseId));
  const base  = getProductDetails(data);
  return {
    props: { base }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allBases);
  const paths = data.results.map((product: Details) => ({ params: { baseId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function BaseId({ base } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ base } />
  );
}