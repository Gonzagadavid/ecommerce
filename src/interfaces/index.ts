import { ParsedUrlQuery } from "querystring";
import { FormEvent } from "react";

export interface ParamsQuery extends ParsedUrlQuery{
  [key: string]: string
}


export interface InputTextProps {
  value?: string;
  name: string
  placeholder: string
  onChange: (event: FormEvent<Element>) => void
}