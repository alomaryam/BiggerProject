import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import StartUp from "./components/StartUpPage";
import SignIn from "./components/SignInPage";
import SignUp from "./components/SignUpPage";
import Tabs from "./components/Tabs";
import {
  NavigationContainer,
  NavigationHelpersContext,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Home"
            component={StartUp}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerTintColor: "white",
              headerTitle: "",
              headerTransparent: true,
            }}
          />

          <Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerTintColor: "white",
              headerTitle: "",
              headerTransparent: true,
            }}
          />
          <Screen
            name="Dashboard"
            component={Tabs}
            options={{
              headerLeft: null,
            }}
          />
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
