// Importando o React e os componentes necessários do React Native
import React from "react";
import { View, Text } from "react-native";

// Definindo um componente funcional chamado BtnComponent que recebe children como argumento
const BtnComponent = ({ children }) => {
  return <View> Botão {children} </View>; // Retorna um componente de visualização com o prefixo "Botão" seguido pelos children
};

export default BtnComponent; // Exporta o componente BtnComponent
