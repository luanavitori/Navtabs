import React from "react";
import { View, Text } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

export default function TelaContato() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Entre em contato conosco para comprar nossos produtos
      </Text>

      <View style={styles.card}>
        <Feather name="phone" size={24} color="#4B0101" />
        <Text style={styles.text}>+55 21 0000-0000</Text>
      </View>

      <View style={styles.card}>
        <Feather name="map-pin" size={24} color="#4B0101" />
        <Text style={styles.text}>Av. 123, 222 - Rio de Janeiro RJ</Text>
      </View>

      <View style={styles.card}>
        <Feather name="mail" size={24} color="#4B0101" />
        <Text style={styles.text}>preferida@adega.com.br</Text>
      </View>

      <View style={styles.card}>
        <FontAwesome name="instagram" size={24} color="#4B0101" />
        <Text style={styles.text}>@adegapreferida</Text>
      </View>
    </View>
  );
}
