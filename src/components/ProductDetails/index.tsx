import { ProductDetailsProps } from "../../types";
import { DetailsStyle, StyleDetails } from "./style";
import DetailsImage from "../DetailsImage";

export default function ProductsDetails({ product }: ProductDetailsProps) {
  const { 
    pictures, title, price, original_price, available_quantity, condition, warranty,
  } = product;
  return (
    <DetailsStyle>

      <StyleDetails>
        <DetailsImage pictures={pictures} />
      </StyleDetails>
      <div>
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{original_price}</p>
        <p>{available_quantity}</p>
        <p>{condition}</p>
        <p>{warranty}</p>
      </div>
    </DetailsStyle>
  );
}