import { MenuProps } from "../../types";
import ItemCard from "../ItemCard";
import { MenuStyle } from "./style";

export default function Menu({ items }: MenuProps) {
  return (
    <MenuStyle>
      { items.map((item) => (
        <ItemCard 
          key={item.title}
          title={item.title} 
          image={item.image} 
          path={item.path} />
      ))}
    </MenuStyle>
  );
}