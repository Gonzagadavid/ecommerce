import { ProductDetails } from "../types";

const getProductDetails = (product: ProductDetails) => {
  const { id, title, price, original_price, available_quantity, condition, thumbnail, pictures, warranty } = product;
  return { id, title, price, original_price, available_quantity, condition, thumbnail, pictures, warranty };
};

export default getProductDetails;
