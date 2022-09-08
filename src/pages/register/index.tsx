import { useContext, useMemo } from "react";
import ConditionComponent from "../../components/ConditionComponent";
import InputText from "../../components/InputText";
import Context from "../../context";
import checkField from "../../functions/checkFields";
import useFormInput from "../../hooks/useFormInput";
import { ContainerFlexRow, FormContainer, InfoContainer, RegisterButton, RegisterPage, Title } from "../../styles";

export default function Register() {
  const { cep, setCep, address } = useContext(Context);
  const { state, setState } = useFormInput({ name: '', lastname: '', complement: '', number: '' });
  const { name, lastname, complement, number } = state as {[key: string]: string};
  const keys = Object.keys(address);
  const fieldsCompleted = checkField([cep, name, lastname, complement, number, keys.length]);
  const infoList = useMemo(() => (
    keys.map((key) => <p key={key}>{`${key}: ${address[key]}`}</p>)
  ),[address, keys]);

  return (
    <RegisterPage>
      <Title>Cadastro</Title>
      <ContainerFlexRow>

        <FormContainer>
          <InputText name="name" placeholder="Nome" onChange={setState}/>
          <InputText name="lastname" placeholder="Sobrenome" onChange={setState} />
          <InputText name="cep" value={cep} onChange={setCep} placeholder="CEP" />
          <ConditionComponent condition={!!keys}>
            <InputText name="complement" placeholder="Complemento" onChange={setState} />
            <InputText name="number" placeholder="Numero" onChange={setState} />
          </ConditionComponent>
        </FormContainer>
        <InfoContainer>
          { infoList }
        </InfoContainer>
      </ContainerFlexRow>
      <RegisterButton disabled={!fieldsCompleted}>Cadastrar</RegisterButton>
    </RegisterPage>
  );
}