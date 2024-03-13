import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TxtComponent from "./src/componentes/TxtComponente";
import BtnComponent from "./src/componentes/BtnComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <TxtComponent>
        <Text>Open up App.js to start working on your app!</Text>
        <br></br>
        <Text>Open up App.js to start working on your app!</Text>
        <br></br>
        <Text>Open up App.js to start working on your app!</Text>
        <br></br>
      </TxtComponent>
      <BtnComponent></BtnComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
