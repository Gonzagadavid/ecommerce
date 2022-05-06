import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allSSDs, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { ssdId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(ssdId));
  const ssd  = getProductDetails(data);
  return {
    props: { ssd }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allSSDs);
  const paths = data.results.map((product: Details) => ({ params: { ssdId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function SSDId({ ssd } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ ssd } />
  );
}