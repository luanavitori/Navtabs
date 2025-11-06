import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";

export default function TelaContato() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Entre em contato conosco para comprar nossos produtos
      </Text>

      <View style={styles.card}>
        <Feather name="phone" size={40} color="#800000" />
        <View>
          <Text style={styles.cardTitulo}>Telefone:</Text>
          <Text style={styles.cardTexto}>+55 21 000000000</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Feather name="map-pin" size={40} color="#800000" />
        <View>
          <Text style={styles.cardTitulo}>Endereço:</Text>
          <Text style={styles.cardTexto}>
            Av. 123, 222 - Rio de Janeiro RJ
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <FontAwesome name="envelope" size={40} color="#800000" />
        <View>
          <Text style={styles.cardTitulo}>Email:</Text>
          <Text style={styles.cardTexto}>preferida@adega.com.br</Text>
        </View>
      </View>

      <View style={styles.card}>
        <FontAwesome5 name="instagram" size={40} color="#800000" />
        <View>
          <Text style={styles.cardTitulo}>Instagram:</Text>
          <Text style={styles.cardTexto}>@adegapreferida</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 30,
    marginTop: 10,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#b9b4b4cb",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: "80%",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    gap: 12,
  },
  cardTitulo: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#4A0000",
    textAlign: "center"
  },
  cardTexto: {
    fontSize: 16,
    color: "#333",
  },
});
