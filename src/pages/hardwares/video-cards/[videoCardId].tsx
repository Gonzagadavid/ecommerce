import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allVideoCards, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { videoCardId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(videoCardId));
  const videoCard  = getProductDetails(data);
  return {
    props: { videoCard }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allVideoCards);
  const paths = data.results.map((product: Details) => ({ params: { videoCardId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function VideoCardId({ videoCard } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ videoCard } />
  );
}