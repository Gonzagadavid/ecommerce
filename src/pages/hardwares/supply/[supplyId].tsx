import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allSupply, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { supplyId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(supplyId));
  const supply  = getProductDetails(data);
  return {
    props: { supply }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allSupply);
  const paths = data.results.map((product: Details) => ({ params: { supplyId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function SupplyId({ supply } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ supply } />
  );
}