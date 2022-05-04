import { ParsedUrlQuery } from "querystring";

export interface ParamsQuery extends ParsedUrlQuery{
  [key: string]: string
}
