import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";

export default function TelaInicio() {
  return (
    <ImageBackground
      source={require("../../assets/imagens/logo.jpg")}
      style={styles.background}
      blurRadius={8}
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Adega Preferida</Text>
        <Text style={styles.subtitulo}>
          Aqui você encontra os melhores e mais saborosos vinhos.
        </Text>
      </View>
    </ImageBackground>
  );
}


