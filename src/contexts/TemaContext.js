import { createContext, useState } from "react";
import { claro, escuro, tema } from "../estilosGlobais";

export const TemaConext = createContext({});

export function TemaProvider({ children }) {
  const [temaAtual, setTemaAtual] = useState("escuro");

  return <TemaConext.Provider value={{ temaAtual, setTemaAtual }}>{children}</TemaConext.Provider>;
}
