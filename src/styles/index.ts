import Slider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
div {
  display: flex;
  justify-content: center;
  margin: 10px;
}
`;

export const SlickArrow = styled.div`
:hover, ::before, ::after {
  color: black;
}
`; 

export const Title = styled.h1`
  color: red;
`;