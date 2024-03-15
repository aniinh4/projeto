// Importando os módulos necessários do React e React Native
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

// Definindo um componente funcional chamado BtnComponent2
const BtnComponent2 = () => {
  return (
    // Container principal
    <View style={styles.container}>
      <View style={styles.countContainer}></View>

      <TouchableOpacity
        style={styles.button3} // Estilo para o botão
        onPress={() => alert("Log In Alert")} // Alerta exibido ao pressionar o botão
      >
        <Text>Sign In</Text>
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

  button3: {
    alignItems: "center",
    backgroundColor: "pink",
    padding: 10,
    bottom: 200,
  },

  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default BtnComponent2; // Exporta o componente BtnComponent2
