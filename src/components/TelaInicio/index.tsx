import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

// Caminho certo para sua imagem:
import logo from "../../assets/imagens/logo.jpg";

export default function TelaInicio() {
  return (
    <ImageBackground
      source={logo}
      style={styles.background}
      resizeMode="cover"
      blurRadius={8} // 👈 deixa o fundo "sensurado"/borrado
    >
      <View style={styles.container}>
        <Text style={styles.title}>Adega Preferida</Text>
        <Text style={styles.text}>
          Aqui você encontra os melhores e mais saborosos vinhos.
        </Text>
      </View>
    </ImageBackground>
  );
}

