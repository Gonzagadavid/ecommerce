import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allBags, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { bagId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(bagId));
  const bag  = getProductDetails(data);
  return {
    props: { bag }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allBags);
  const paths = data.results.map((product: Details) => ({ params: { bagId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function BagId({ bag } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ bag } />
  );
}