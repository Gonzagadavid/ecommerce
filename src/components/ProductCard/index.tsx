import { CardStyles, ParagraphStyle, TitleStyle } from "./style";
import { ProductProps } from "../../types";
import Image from "next/image";


export default function ProductCard({ product }: ProductProps) {
  return (
    <CardStyles>
      <Image src={product.thumbnail} alt="informatic" layout="responsive" width={200} height={200} />
      <TitleStyle>{product.title}</TitleStyle>
      <ParagraphStyle>{product.prices[0].amount.toLocaleString('pt-BR', { currency: 'BRL' })}</ParagraphStyle>
    </CardStyles>
  );
}