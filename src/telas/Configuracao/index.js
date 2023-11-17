import { Text, View, Switch } from "react-native";
import { estilo } from "./estilos";
import { useState, useContext } from "react";
import { TemaConext } from "../../contexts/TemaContext";

export default function Configuracao({ navigation }) {
  const [estado, setEstado] = useState(true);
  const { temaAtual, setTemaAtual } = useContext(TemaConext);

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Configuração</Text>

      <View style={estilo.inputArea}>
        <Text style={estilo.subtitulo}>Tema: {temaAtual}</Text>
        <Switch onValueChange={() => (temaAtual === "escuro" ? setTemaAtual("claro") : setTemaAtual("escuro"))} value={temaAtual === "escuro" ? true : false} />
      </View>
    </View>
  );
}
