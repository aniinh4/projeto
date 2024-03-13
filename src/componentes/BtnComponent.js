import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const BtnComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}></View>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => alert("Log In Alert")}
      >
        <Text>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button3}
        onPress={() => alert("Log In Alert")}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button4}
        onPress={() => alert("Log In Alert")}
      >
        <Image source={require("../image/butão.png")} resizeMode="cover" />
      </TouchableOpacity>
    </View>
  );
};

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
  button3: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  button4: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default BtnComponent;
