import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  titulo: {
    fontSize: 24,
    color: "#4B0101",
    fontWeight: "bold",
    marginBottom: 10,
  },
  descricao: { marginBottom: 20, color: "#333" },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7E9E9",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  imagem: { width: 60, height: 120, resizeMode: "contain", marginRight: 10 },
  textos: { flex: 1 },
  nome: { fontWeight: "bold", fontSize: 16, color: "#4B0101" },
  texto: { color: "#333", fontSize: 14 },
});
