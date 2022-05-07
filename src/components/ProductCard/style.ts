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
background-color: white;
position: relative;
z-index: 3;
${({ view }: {view: boolean}) => !view && 'border: solid 2px red; border-bottom: solid 2px black;'}
/* :hover {
  border: solid 2px red;
  border-bottom: solid 2px black;
} */
`;

export const TitleStyle = styled.h3`
text-align: center;
font-size: 15px;
`;

export const ParagraphStyle = styled.p`
text-align: center;
`;

export const AddContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 70px;
background-color: black;
margin: 0;
${({ view }: {view: boolean}) => view ? 'transform: translateY(-100%);' :  'transform: translateY(0);'}
position: relative;
z-index: 2;
transition: transform 0.5s ease-in-out;


button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 40px;
  width: 160px;
  background-color: red;
  color: white;
  border-radius: 20px;
  padding: 10px;
  outline: none;
  border: none;
}
`;

export const CardContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
`;