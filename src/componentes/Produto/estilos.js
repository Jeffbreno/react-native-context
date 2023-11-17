import { StyleSheet } from 'react-native';

export const estilos = new StyleSheet.create({
  cartao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: 250,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    boxShadow: "0px 2px 3.84px rgba(0, 0, 0, 0.25)",
    elevation: 5,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 32,
  },
  textoContainer: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: "space-between",
  },
  texto: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    maxWidth: 200,
  },
  preco: {
    color: "#5E9B71",
  },
  botaoAdicionar: {
    backgroundColor: "#5E9B71",
    width: 28,
    height: 28,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 20,
  }
})