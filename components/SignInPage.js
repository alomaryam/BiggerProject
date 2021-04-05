import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Rooms")}
      >
        <Text style={styles.submitButtonText}> Sign In </Text>
      </TouchableOpacity>
      <Text> Create a New Account </Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.text}> Sign Up </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textDecorationLine: "underline",
  },
  input: {
    textAlign: "center",
    margin: 15,
    height: 40,
    width: 300,
    borderColor: "rgb(83, 188, 230)",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "rgb(83, 188, 230)",
    padding: 10,
    margin: 15,
    height: 40,
    width: 90,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
});
