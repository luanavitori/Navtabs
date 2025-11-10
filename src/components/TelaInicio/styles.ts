import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "#f5f5f5",
    textAlign: "center",
    lineHeight: 24,
  },
});

