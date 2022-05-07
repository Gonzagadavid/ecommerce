import { AddContainer, CardContainer, CardStyles, ParagraphStyle, TitleStyle } from "./style";
import { ProductProps } from "../../types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


export default function ProductCard({ product }: ProductProps) {
  const [view, setView] = useState(true);
  const router = useRouter();
  return (
    <CardContainer>
      <Link href={`${router.pathname}/${product.id}`}>
        <a onMouseOver={() => setView(false)} onMouseOut={() => setView(true)}>
          <CardStyles view={view}>
            <Image src={product.thumbnail} alt="informatic" layout="fixed" width={200} height={200} />
            <TitleStyle>{product.title}</TitleStyle>
            <ParagraphStyle>{product.prices[0].amount.toLocaleString('pt-BR', { currency: 'BRL' })}</ParagraphStyle>
          </CardStyles>
        </a>
      </Link>
      <AddContainer view={view} onMouseOver={() => setView(false)} onMouseOut={() => setView(true)}>
        <button>ADD TO CART</button>
      </AddContainer>
    </CardContainer>
  );
}