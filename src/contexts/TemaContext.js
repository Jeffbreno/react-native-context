import { createContext, useState } from "react";
import { claro, escuro } from "../estilosGlobais";

export const TemaConext = createContext({});

export function TemaProvider({ children }) {
  const [temaAtual, setTemaAtual] = useState("escuro");

  const temas = {
    escuro: escuro,
    claro: claro,
  };

  return <TemaConext.Provider value={{ temaAtual, setTemaAtual, temaEscolhido: temas[temaAtual] }}>{children}</TemaConext.Provider>;
}
