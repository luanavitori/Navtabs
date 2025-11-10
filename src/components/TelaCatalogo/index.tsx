import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

const vinhos = [
  {
    nome: "Chatigny Chardonnay",
    descricao: "Vinho leve, refrescante e levemente cítrico da cor amarela palha.",
    imagem: require("../../assets/imagens/vinho-branco.jpg"),
  },
  {
    nome: "Concha y Toro Exportacion",
    descricao: "Vinho rosé fresco, intenso e macio de cor rosa pálido.",
    imagem: require("../../assets/imagens/vinho-rose.jpg"),
  },
  {
    nome: "Portada Winemaker’s",
    descricao:
      "Vinho encorpado, saboroso e frutado, vermelho-rubi. Perfeito com carnes e queijos.",
    imagem: require("../../assets/imagens/vinho-tinto.jpg"),
  },
  {
    nome: "Elvio Cogno Ravera Barolo",
    descricao:
      "Vinho estruturado, sabor de cereja vermelha madura e taninos aveludados.",
    imagem: require("../../assets/imagens/vinho-especial.jpg"),
  },
];

export default function TelaCatalogo() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Nossos vinhos</Text>
      <Text style={styles.descricao}>
        Trabalhamos com o melhor vinho dos seguintes tipos: branco, rosé, tinto
        e seco.
      </Text>

      {vinhos.map((v, index) => (
        <View key={index} style={styles.card}>
          <Image source={v.imagem} style={styles.imagem} />
          <View style={styles.textos}>
            <Text style={styles.nome}>{v.nome}</Text>
            <Text style={styles.texto}>{v.descricao}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
