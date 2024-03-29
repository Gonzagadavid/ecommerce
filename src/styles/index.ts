import Slider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
div {
  display: flex;
  justify-content: center;
  gap: 0 15px;
}
`;

export const StyledDetailsSlider = styled(Slider)`
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

export const RegisterPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
height: 90%;
`;

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;
height: 80%;
`;

export const InfoContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
height: 60%;
flex-direction: column;
font-size: 1.8rem;
line-height: 2;
color: #009;
margin-top: 20px;
`;

export const ContainerFlexRow =  styled.div`
display: flex;
justify-content: space-around;
width: 90%;
height: 100%;
margin-top: 60px;
`;

export const RegisterButton = styled.button`
padding: 10px 20px;
background-color: black;
color: white;
font-size: 1.5em;
border-radius: 10px;
cursor: pointer;
:disabled {
  background-color: #ccc;
}
`;
