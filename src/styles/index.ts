import styled from "styled-components";
import Slider from "react-slick";

export const HeaderStyles = styled.header`
width: 100%;
background-color: black;
color: white;
height: 10%;
display: flex;
align-items: center;
justify-content: center;
`;

export const Title = styled.h1`
  color: red;
`;

export const NavStyles = styled.ul`
display: flex;
list-style: none;
width: 100%;
height: 5%;
justify-content: space-around;
background-color: rgba(200, 200, 200, 0.5);
position: sticky;
top:0;
z-index: 3;
`;

export const FooterStyles = styled.footer`
background-color: black;
color: white;
display: flex;
justify-content: center;
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 5%
`;

export const LayoutStyle = styled.div`
width: 100vw;
height: 100vh;
`;

export const MainStyles = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;

export const ProductsStyles = styled.section`
/* display: flex; */
width: 90%;
/* flex-wrap: wrap; */

`;

export const CardStyles = styled.section`
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: center;
width: 55%;
border: solid 1px black;
`;

export const StyledSlider = styled(Slider)`
div {
  display: flex;
  justify-content: center;
  margin: 10px;
}
`;