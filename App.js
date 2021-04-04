import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import StartUp from "./components/StartUpPage";
import SignIn from "./components/SignInPage";
import SignUp from "./components/SignUpPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator>
          <Screen name="StartUp" component={StartUp} />
          <Screen name="SignIn" component={SignIn} />
          <Screen name="SignUp" component={SignUp} />
        </Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});