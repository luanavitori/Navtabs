import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";

export default function TelaCatalogo() {
  const vinhos = [
    {
      nome: "Chatigny Chardonnay",
      descricao:
        "Vinho leve, refrescante e levemente cítrico do carvalho francês. Perfeito com carnes brancas e massa ao pesto.",
      imagem: require("../../assets/imagens/vinho-branco.jpg"),
    },
    {
      nome: "Concha y Toro Exportacion",
      descricao:
        "Vinho rosé fresco, intenso e macio, ideal para o verão. Perfeito com saladas e aperitivos.",
      imagem: require("../../assets/imagens/vinho-rose.jpg"),
    },
    {
      nome: "Portada Winemaker’s",
      descricao:
        "Vinho tinto encorpado e frutado, com final levemente adocicado. Ideal com carnes grelhadas.",
      imagem: require("../../assets/imagens/vinho-tinto.jpg"),
    },
    {
      nome: "Elvio Cogno Ravera Barolo",
      descricao:
        "Vinho estruturado, com aroma de cereja e especiarias. Acompanha bem carnes vermelhas e queijos curados.",
      imagem: require("../../assets/imagens/vinho-especial.jpg"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Nossos vinhos</Text>
      <Text style={styles.descricao}>
        Trabalhamos com o melhor vinho dos seguintes tipos: branco, rosé, tinto e seco.
      </Text>

      {vinhos.map((vinho, index) => (
        <View key={index} style={styles.card}>
          <Image source={vinho.imagem} style={styles.imagem} />
          <View style={{ flex: 1 }}>
            <Text style={styles.nome}>{vinho.nome}</Text>
            <Text style={styles.texto}>{vinho.descricao}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}


