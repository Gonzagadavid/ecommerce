import { StyledInput } from "./style";

import { InputTextProps } from '../../interfaces';

export default function InputText({ value, name, onChange, placeholder }: InputTextProps)  {
  return (
    <StyledInput value={value} name={name} onChange={onChange} placeholder={placeholder} />
  );
}