import { useContext } from "react";
import ConditionComponent from "../../components/ConditionComponent";
import InputText from "../../components/InputText";
import Context from "../../context";
import checkField from "../../functions/checkFields";
import useFormInput from "../../hooks/useFormInput";

export default function Register() {
  const { cep, setCep, address } = useContext(Context);
  const { state, setState } = useFormInput({ name: '', lastname: '', complement: '', number: '' });
  const { name, lastname, complement, number } = state as {[key: string]: string};
  const keys = Object.keys(address);
  const fieldsCompleted = checkField([cep, name, lastname, complement, number, keys.length]);

  return (
    <div>
      <InputText name="name" placeholder="Nome" onChange={setState}/>
      <InputText name="lastname" placeholder="Sobrenome" onChange={setState} />
      <InputText name="cep" value={cep} onChange={setCep} placeholder="CEP" />
      <ConditionComponent condition={!!keys}>
        <InputText name="complement" placeholder="Complemento" onChange={setState} />
        <InputText name="number" placeholder="Numero" onChange={setState} />
      </ConditionComponent>
      {
        keys.map((key) => <p key={key}>{`${key}: ${address[key]}`}</p>)
      }
      <ConditionComponent condition={fieldsCompleted}>
        <button>Cadastrar</button>
      </ConditionComponent>
    </div>
  );
}