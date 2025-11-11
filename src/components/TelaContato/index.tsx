import React from "react";
import { View, Text } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

export default function TelaContato() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Entre em contato conosco para comprar nossos produtos
      </Text>

      <View style={styles.card}>
        <Feather name="phone" size={24} color="#4A0F0F" style={styles.icon} />
        <View>
          <Text style={styles.label}>Telefone:</Text>
          <Text style={styles.info}>+55 21 000000000</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Feather name="map-pin" size={24} color="#4A0F0F" style={styles.icon} />
        <View>
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.info}>Av. 123, 222 - Rio de Janeiro RJ</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Feather name="mail" size={24} color="#4A0F0F" style={styles.icon} />
        <View>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>preferida@adega.com.br</Text>
        </View>
      </View>

      <View style={styles.card}>
        <FontAwesome name="instagram" size={24} color="#4A0F0F" style={styles.icon} />
        <View>
          <Text style={styles.label}>Instagram:</Text>
          <Text style={styles.info}>@adegapreferida</Text>
        </View>
      </View>
    </View>
  );
}


