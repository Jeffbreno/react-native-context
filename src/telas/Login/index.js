import { useContext, useState } from "react";
import { Text, View, TextInput, Pressable, StatusBar } from "react-native";
import { estilos } from "./estilos";
import { TemaConext } from "../../contexts/TemaContext";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { temaEscolhido } = useContext(TemaConext);
  const estilo = estilos(temaEscolhido);

  return (
    <View style={estilo.container}>
      <StatusBar />
      <Text style={estilo.titulo}>Login</Text>

      <View style={estilo.inputArea}>
        <TextInput style={estilo.input} placeholder="Email" placeholderTextColor="#999" autoCapitalize="none" value={email} onChangeText={setEmail} />
        <TextInput style={estilo.input} placeholder="Senha" placeholderTextColor="#999" autoCapitalize="none" value={senha} onChangeText={setSenha} />
      </View>

      <Pressable style={estilo.botao} onPress={() => navigation.navigate("Principal")}>
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </Pressable>
    </View>
  );
}
