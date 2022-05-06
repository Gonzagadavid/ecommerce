import { ReactNode, useMemo } from "react";
import Context from "./index";

export default function Provider({ children }: { children: ReactNode }) {
  
  const context = useMemo(() => ({

  }), []);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}