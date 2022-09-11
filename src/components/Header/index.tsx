import Login from "../Login";
import { HeaderStyles } from "./style";

export default function Header()  {
  return (
    <HeaderStyles>
      <h1>E Commerce</h1>
      <Login />
    </HeaderStyles>
  );
}