// Importando StatusBar do Expo e componentes necessários do React Native
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Importando componentes personalizados
import TxtComponent from "./src/componentes/TxtComponente";
import BtnComponent from "./src/componentes/BtnComponent";
import BtnComponent1 from "./src/header/BtnComponent1";
import BtnComponent2 from "./src/header/BtnComponent2";
import BtnComponent3 from "./src/header/BtnComponent3";

// Função principal do aplicativo
export default function App() {
  return (
    // Container principal
    <View style={styles.container}>
      {/* Componente TxtComponent para exibir texto */}
      <TxtComponent>
        <br></br>
        <Text>Botão</Text>
        <br></br>
        <Text>Botão</Text>
        <br></br>
        <Text>Botão</Text>
        <br></br>
      </TxtComponent>

      <BtnComponent>
        <BtnComponent1 />
        <BtnComponent2 />
        <BtnComponent3 />
      </BtnComponent>

      {/* StatusBar para exibir a barra de status do dispositivo */}
      <StatusBar style="auto" />
    </View>
  );
}

// StyleSheet para estilizar os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
