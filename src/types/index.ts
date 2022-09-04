import {  FormEvent } from "react";

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
  condition: string,
}

export type Product = {
  id: string,
  title: string,
  prices: Price[],
  thumbnail: string,
  condition: string,
}


export type ProductsProps = {
  products: Product[],
}

export type ProductProps = {
  product: Product,
}

export type Picture = { url: string, id: string }[]

export type ProductDetails = {
  id: string, 
  title: string, 
  price: number, 
  original_price: number, 
  available_quantity: number, 
  condition: string, 
  thumbnail: string, 
  pictures: Picture, 
  warranty: string,
}

export type ProductDetailsProps = {
  [key: string]: ProductDetails
}

export type Item = {
  title: string,
  image: string,
  path: string,
}

export type MenuProps = { items:  Item[]}

export type DefaultState = {
  address: { [key: string]: string},
  setCep: (event: FormEvent<Element>) => void,
  cep: string,
}
