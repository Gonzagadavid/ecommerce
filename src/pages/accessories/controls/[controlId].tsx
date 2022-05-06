import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allControls, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { controlId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(controlId));
  const control  = getProductDetails(data);
  return {
    props: { control }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allControls);
  const paths = data.results.map((product: Details) => ({ params: { controlId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function ControlId({ control } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ control } />
  );
}