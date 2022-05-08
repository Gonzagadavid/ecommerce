import { createContext } from "react";
import { DefaultState } from "../types";

const Context = createContext<DefaultState>({} as DefaultState);

export default Context;
