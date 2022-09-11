import { LoginContainer } from "./style";
import Image from "next/image";
import profileIcon from '../../images/icons/user-solid.svg';
export default function Login () {
  return (
    <LoginContainer>
      <Image src={profileIcon} width={30} height={40} alt="user"/>
    </LoginContainer>);
}