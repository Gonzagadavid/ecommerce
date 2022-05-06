import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allCabinets, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { cabinetId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(cabinetId));
  const cabinet  = getProductDetails(data);
  return {
    props: { cabinet }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allCabinets);
  const paths = data.results.map((product: Details) => ({ params: { cabinetId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function CabinetId({ cabinet } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ cabinet } />
  );
}