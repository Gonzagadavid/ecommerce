import Link from "next/link";
import { NavStyles } from "../styles/NavStyles";

export default function NavBar() {
  return (
    <NavStyles>
      <Link href="/"><a>Inicio</a></Link>
    </NavStyles>
  )
}