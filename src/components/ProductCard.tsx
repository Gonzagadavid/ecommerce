import { CardStyles } from "../styles";
import { ProductProps } from "../types";
import Image from "next/image";


export default function ProductCard({ product }: ProductProps) {
  return (
    <CardStyles>
      <h3>{product.title}</h3>
      <Image src={product.thumbnail} alt="informatic" layout="responsive" width={200} height={200} />
      <p>{product.prices[0].amount}</p>
    </CardStyles>
  );
}