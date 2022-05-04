import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { allComputers, productById } from "../../constants/endPoints";
import getProductDetails from "../../functions/getProductDetails";
import { ParamsQuery } from "../../interfaces";
import { ProductDetails, ProductDetailsProps } from "../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { computerId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(computerId));
  const computer  = getProductDetails(data);
  return {
    props: { computer }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allComputers);
  const paths = data.results.map((product: ProductDetails) => ({ params: { computerId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function ComputerId ({ computer } : ProductDetailsProps) {
  return (
    <h1>{computer.id}</h1>
  );
}