import { ReactNode, useMemo } from "react";
import useAddress from "../hooks/useAddress";
import Context from "./index";

export default function Provider({ children }: { children: ReactNode }) {

  const { setCep, address, cep } = useAddress();
  
  const context = useMemo(() => ({
    setCep, address, cep
  }), [setCep, address, cep]);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}