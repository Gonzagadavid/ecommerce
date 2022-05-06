import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allMonitors, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { monitorId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(monitorId));
  const monitor  = getProductDetails(data);
  return {
    props: { monitor }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allMonitors);
  const paths = data.results.map((product: Details) => ({ params: { monitorId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function MonitorId({ monitor } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ monitor } />
  );
}