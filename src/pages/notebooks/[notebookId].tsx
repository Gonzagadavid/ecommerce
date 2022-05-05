import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductsDetails from "../../components/ProductDetails";
import { allNotebook, productById } from "../../constants/endPoints";
import getProductDetails from "../../functions/getProductDetails";
import { ParamsQuery } from "../../interfaces";
import { ProductDetails as Details, ProductDetailsProps } from "../../types";

export const getStaticProps: GetStaticProps = async (context) => {
  const { notebookId } = context.params as ParamsQuery;
  const { data } = await axios.get(productById(notebookId));
  const notebook  = getProductDetails(data);
  return {
    props: { notebook }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(allNotebook);
  const paths = data.results.map((product: Details) => ({ params: { notebookId: `${product.id}` } }));

  return { paths, fallback: false };
};

export default function NotebookId ({ notebook } : ProductDetailsProps) {
  return (
    <ProductsDetails product={ notebook } />
  );
}