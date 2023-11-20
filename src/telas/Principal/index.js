import { Text, View, FlatList, StatusBar, Pressable } from "react-native";
import { Produto } from "../../componentes/Produto";
import { produtos } from "./produtos";
import { estilos } from "./estilos";
import { Feather } from "react-native-vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/Feather";
import { useContext } from "react";
import { TemaConext } from "../../contexts/TemaContext";

export default function Principal({ navigation }) {
  const ultimosVistos = [];

  const { temaEscolhido } = useContext(TemaConext);
  const estilo = estilos(temaEscolhido);

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.tituloArea}>
        <Text style={estilo.titulo}>Olá, Jefferson Lopes</Text>
        <View style={estilo.carrinhoArea}>
          <Pressable onPress={() => {}}>
            <Feather name="shopping-cart" size={30} color="#fff" style={estilo.carrinhoIcon} />
          </Pressable>
          <View style={estilo.carrinhoQuantidadeArea}>
            <Text style={estilo.carrinhoQuantidade}>0</Text>
          </View>
          <Pressable onPress={() => navigation.navigate("Configurações")} style={estilo.iconArea}>
            <MaterialCommunityIcons name="settings" size={30} color="#fff" style={estilo.icon} />
          </Pressable>
        </View>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => Math.random()}
        renderItem={({ item }) => <Produto item={item} adicionar={true} />}
        style={estilo.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            {ultimosVistos.length > 0 && (
              <View style={estilo.ultimosVistos}>
                <Text style={estilo.tituloUltimosVistos}>Últimos vistos</Text>
                <FlatList
                  data={ultimosVistos}
                  keyExtractor={(item) => Math.random()}
                  renderItem={({ item }) => <Produto item={item} adicionar={false} />}
                  style={estilo.lista}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}
            <Text style={[estilo.titulo, { paddingLeft: 16 }]}>Produtos</Text>
          </View>
        )}
      />
    </View>
  );
}
