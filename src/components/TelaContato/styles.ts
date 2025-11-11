import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6ebe4",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 25,
    textAlign: "center",

  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
    alignItems: "center"
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A0F0F",
    marginBottom: 2,
  

  },
  info: {
    fontSize: 15,
    color: "#3e2723",
 
  },
});
