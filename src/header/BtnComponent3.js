// Importando os módulos necessários do React e React Native
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

// Definindo um componente funcional chamado BtnComponent3
const BtnComponent3 = () => {
  return (
    // Container principal
    <View style={styles.container}>
      <View style={styles.countContainer}></View>

      <TouchableOpacity
        style={styles.button4} // Estilo para o TouchableOpacity
        onPress={() => alert("Log In Alert")} // Alerta exibido ao pressionar o TouchableOpacity
      >
        <Image source={require("../image/butão.png")} resizeMode="cover" />
      </TouchableOpacity>
    </View>
  );
};

// StyleSheet para estilizar os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
  },

  button4: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 8,
  },
  countContainer: {
    alignItems: "center",
    padding: 8,
  },
});

export default BtnComponent3; // Exporta o componente BtnComponent3
