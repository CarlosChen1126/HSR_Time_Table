import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  Button,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <SafeAreaView style={styles.loginButton}>
        <Button
          style={styles.text}
          title="Clicke it"
          onPress={() => {
            props.navigation.navigate("Search");
          }}
        >
          Click It
        </Button>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  loginButton: {
    width: 70,
    height: 40,
    backgroundColor: "dodgerblue",
    position: "absolute",
    top: 700,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default WelcomeScreen;
