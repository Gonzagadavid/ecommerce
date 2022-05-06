import styled from "styled-components";

export const NavStyles = styled.ul`
display: flex;
list-style: none;
width: 100%;
height: 5%;
justify-content: space-around;
align-items: center;
background-color: rgba(200, 200, 200, 0.5);
position: sticky;
top:0;
z-index: 3;
font-size: 20px;

`;

export const Item = styled.li`
border-bottom: transparent solid 2px;
transition-property: color;

:after {
  display:block;
  content: '';
  transform: scaleX(0);  
  border-bottom: red solid 2px;
  transition: transform 250ms ease-in-out;
  transform-origin:  0% 100%; 
}

:hover:after {
  color: red;
  transform: scaleX(1);
  transform-origin:  0% 100%; 
}

:hover {
  color: red;
  transition-duration: 250ms;
  
}

${({ selected }: {selected: boolean}) => selected && 'color: red; border-bottom: red solid 2px;'}
`;
