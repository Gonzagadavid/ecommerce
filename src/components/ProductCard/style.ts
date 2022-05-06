import styled from "styled-components";

export const CardStyles = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 100%;
height: 450px;
border: solid 2px rgba(200, 200, 200, 0.5);;
padding: 20px;
cursor: pointer;
transition-property: border;
transition: cubic-bezier(0.95, 0.05, 0.795, 0.035);
transition-duration: 0.5s;

:hover {
  border: solid 2px red;
}
`;

export const TitleStyle = styled.h3`
text-align: center;
font-size: 15px;
`;

export const ParagraphStyle = styled.p`
text-align: center;
`;
