import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ModalDropdown from "react-native-modal-dropdown";
import Search from "./app/screens/Search";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Button,
  Alert,
  View,
} from "react-native";
export default function App() {
  console.log("Log Test");
  const [currentTime, setCurrentTime] = useState(0);

  const AuthStack = createStackNavigator();

  // console.log(data["StartStaion"]);
  // useEffect(() => {
  //   const FetchData = async () => {
  //     await setTestdata("post the data");
  //     await fetch("http://127.0.0.1:5000/test", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(testdata))
  //       .catch((err) => console.log("err", err));
  //   };
  //   FetchData();
  // }, []);

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Welcome"
          component={WelcomeScreen}
        ></AuthStack.Screen>
        <AuthStack.Screen name="Search" component={Search}></AuthStack.Screen>
      </AuthStack.Navigator>
    </NavigationContainer>
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
