import Link from "next/link";
import { useRouter } from "next/router";
import { Item, NavStyles } from "./style";

export default function NavBar() {
  const { pathname } = useRouter();
  return (
    <NavStyles>
      <Item selected={pathname === '/'}><Link href="/"><a>Inicio</a></Link></Item>
      <Item selected={pathname === '/computers'}><Link href="/computers"><a>Computadores</a></Link></Item>
      <Item selected={pathname === '/notebooks'}><Link href="/notebooks"><a>Notebooks</a></Link></Item>
      <Item selected={pathname.includes('hardwares')}><Link href="/hardwares"><a>Hardwares</a></Link></Item>
      <Item selected={pathname.includes('peripherals')}><Link href="/peripherals"><a>Periféricos</a></Link></Item>
      <Item selected={pathname.includes('accessories')}><Link href="/accessories"><a>Acessórios</a></Link></Item>
    </NavStyles>
  );
}