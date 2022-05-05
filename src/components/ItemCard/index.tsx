import Image from "next/image";
import Link from "next/link";
import { Item } from "../../types";
import { CardStyles } from "./style";

export default function ItemCard({ title, image, path } : Item) {
  return (
    <Link href={path}>
      <a>
        <CardStyles>
          <Image src={image} layout="responsive" width={300} height={300} alt="item" />
          <h3>{title}</h3>
        </CardStyles>
      </a>
    </Link>
  );
}