import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  titulo: {
    fontSize: 18,
    textAlign: "center",
    color: "#4B0101",
    marginBottom: 20,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7E9E9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  text: { marginLeft: 10, fontSize: 16, color: "#333" },
});
