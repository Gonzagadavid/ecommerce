import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allHeadsets, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { headsetId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(headsetId));
  const headset  = getProductDetails(data);
  return {
    props: { headset }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allHeadsets);
  const paths = data.results.map((product: Details) => ({ params: { headsetId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function HeadsetId({ headset } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ headset } />
  );
}