import { ReactNode } from "react";
import { LayoutStyle, MainStyles } from "./style";
import Footer from "../Footer";
import Header from "../Header";
import NavBar from "../NavBar";

export default function Layout(props: { children : ReactNode}) {
  const { children } = props;
  return (
    <LayoutStyle>
      <Header />
      <NavBar />
      <MainStyles>
        {children}
      </MainStyles>
      <Footer /> 
    </LayoutStyle>
  );
}