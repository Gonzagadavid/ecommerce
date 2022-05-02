import { ReactNode } from "react";
import NavBar from "./NavBar";

export default function Layout(props: { children : ReactNode}) {
  const { children } = props;
  return (
    <div>
      <NavBar />
      <h1>FOi</h1>
      {children}
    </div>
  );
}