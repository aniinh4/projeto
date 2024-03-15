// Importando React e os componentes necessários do React Native
import React from "react";
import { View, Text } from "react-native";

// Definindo um componente funcional chamado TxtComponent que recebe children como argumento
const TxtComponent = ({ children }) => {
  return <Text> criança {children} </Text>; // Retorna um componente de texto com o prefixo "criança" seguido pelos children
};

export default TxtComponent; // Exporta o componente TxtComponent
