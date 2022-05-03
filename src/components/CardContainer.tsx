import useExibition from "../hooks/useExibition";
import { ProductsProps } from "../types";

export default function CardContainer({ products }: ProductsProps ) {
  const {list, inc, dec} = useExibition(products, 4)
  return (
    
  )
}