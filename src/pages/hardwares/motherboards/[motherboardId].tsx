import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allMotherboards, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { motherboardId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(motherboardId));
  const motherboard  = getProductDetails(data);
  return {
    props: { motherboard }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allMotherboards);
  const paths = data.results.map((product: Details) => ({ params: { motherboardId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function MotherboardId({ motherboard } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ motherboard } />
  );
}