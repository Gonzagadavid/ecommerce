import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allWebcams, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { webcamId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(webcamId));
  const webcam  = getProductDetails(data);
  return {
    props: { webcam }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allWebcams);
  const paths = data.results.map((product: Details) => ({ params: { webcamId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function WebcamId({ webcam } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ webcam } />
  );
}