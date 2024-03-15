// Importando React e outros componentes necessários do React Native
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

// Definindo um componente funcional chamado BtnComponent1
const BtnComponent1 = () => {
  return (
    // Container principal
    <View style={styles.container}>
      <View style={styles.countContainer}></View>

      <TouchableOpacity
        style={styles.button2} // Estilo para o TouchableOpacity
        onPress={() => alert("Log In Alert")} // Alerta exibido ao pressionar o TouchableOpacity
      >
        <Text>Log in</Text>
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
  button2: {
    alignItems: "center",

    backgroundColor: "yellow",
    padding: 10,
  },

  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default BtnComponent1; // Exporta o componente BtnComponent1
