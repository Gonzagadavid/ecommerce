export type Price = {
  type: string,
  amount: number,
  regular_amount: number,
}

export type ProductReq = {
  id: string,
  title: string,
  prices: { prices: Price[]},
  thumbnail: string,
}

export type Product = {
  id: string,
  title: string,
  prices: Price[],
  thumbnail: string,
}


export type ProductsProps = {
  products: Product[],
}

export type ProductProps = {
  product: Product,
}

export type ProductDetails = {
  id: string, 
  title: string, 
  price: number, 
  original_price: number, 
  available_quantity: number, 
  condition: string, 
  thumbnail: string, 
  pictures: string[], 
  warranty: string,
}

export type ProductDetailsProps = {
  [key: string]: ProductDetails
}
