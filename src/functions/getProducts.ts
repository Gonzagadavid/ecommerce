import { Price, ProductReq } from "../types";

const getProducts = (productList: ProductReq[]) => {
  return productList.map((product: ProductReq) => ({
    id: product.id,
    title: product.title,
    thumbnail: product.thumbnail.replace('I.jpg', 'O.jpg'),
    prices: product.prices.prices
      .map((price: Price) => (
        { 
          type: price.type, 
          regular: price.regular_amount, 
          amount: price.amount 
        }))
  }));
};

export default getProducts;
