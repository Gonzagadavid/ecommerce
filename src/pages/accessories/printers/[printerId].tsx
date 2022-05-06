import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allPrinters, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { printerId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(printerId));
  const printer  = getProductDetails(data);
  return {
    props: { printer }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allPrinters);
  const paths = data.results.map((product: Details) => ({ params: { printerId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function PrinterId({ printer } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ printer } />
  );
}