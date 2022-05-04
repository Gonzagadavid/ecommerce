import Link from "next/link";
import { NavStyles } from "./style";

export default function NavBar() {
  return (
    <NavStyles>
      <Link href="/"><a>Inicio</a></Link>
      <Link href="/computers"><a>Computadores</a></Link>
      <Link href="/notebooks"><a>Notebooks</a></Link>
      <Link href="/hardwares"><a>Hardwares</a></Link>
      <Link href="/peripherals"><a>Periféricos</a></Link>
      <Link href="/accessories"><a>Acessórios</a></Link>
    </NavStyles>
  );
}