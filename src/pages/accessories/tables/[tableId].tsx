import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../../components/ProductDetails";
import { allTables, productById } from "../../../constants/endPoints";
import getProductDetails from "../../../functions/getProductDetails";
import { ParamsQuery } from "../../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { tableId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(tableId));
  const table  = getProductDetails(data);
  return {
    props: { table }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allTables);
  const paths = data.results.map((product: Details) => ({ params: { tableId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function TableId({ table } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ table } />
  );
}