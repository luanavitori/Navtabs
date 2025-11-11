import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    marginTop: 25
  },
  descricao: {
    fontSize: 15,
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A28177",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  imagem: {
    width: 45,
    height: 120,
    marginRight: 10,
    resizeMode: "contain",
  },
  nome: {
    fontWeight: "bold",
    color: "#5c2018",
    fontSize: 15,
    marginBottom: 5,
  },
  texto: {
    fontSize: 14,
  },
});

