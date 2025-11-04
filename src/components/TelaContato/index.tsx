import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TelaBiblioteca() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.text}>
       Entre em contato conosco para comprar nossos produtos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 100
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});