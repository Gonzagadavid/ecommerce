import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allProcessors, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { processorId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(processorId));
  const processor  = getProductDetails(data);
  return {
    props: { processor }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allProcessors);
  const paths = data.results.map((product: Details) => ({ params: { processorId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function ProcessorId({ processor } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ processor } />
  );
}