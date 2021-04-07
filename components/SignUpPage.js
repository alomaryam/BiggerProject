import React from "react";
import BackgroundIMG from "../assets/original.gif";
import HubLogoIcon from "../assets/Register.png";
import authStore from "../stores/authStore";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import styled from "styled-components/native";
import { useState } from "react";

//Styles compounents
export const HubLogoImage = styled.Image`
  flex: 1;
  margin-right: 40%;
  /* resize-mode: contain; */
  justify-content: center;
  border-width: 0.2px;
  border-color: "rgba(239, 236, 253, 1)";
`;
export const HomeBackground = styled.ImageBackground`
  flex: 2;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
export const TextStyled = styled.Text`
  color: #ded9fe;
`;
export const TitleStyled = styled.Text`
  font-size: 35;
  color: #745cff;
`;
export const InputStyled = styled.TextInput`
  color: white;
`;

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //handle submit
  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.navigate("Dashboard");
  };

  return (
    <HomeBackground source={BackgroundIMG}>
      <View style={styles.container}>
        <HubLogoImage source={HubLogoIcon}></HubLogoImage>
        {/* <TitleStyled>Register</TitleStyled> */}
        <TextInput
          style={styles.input}
          placeholder="First Name"
          autoCapitalize="none"
          onChangeText={(firstName) => setUser({ ...user, firstName })}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          autoCapitalize="none"
          onChangeText={(lastName) => setUser({ ...user, lastName })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(email) => setUser({ ...user, email })}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          onChangeText={(username) => setUser({ ...user, username })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}> Sign Up </Text>
        </TouchableOpacity>
        <TextStyled> Already have an account? </TextStyled>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <TextStyled style={styles.text}> Sign In </TextStyled>
        </TouchableOpacity>
      </View>
    </HomeBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    paddingTop: "25%",
    justifyContent: "center",
    backgroundColor: "rgba(222, 217, 254, 0.4)",
    alignItems: "center",
    fontSize: 35,
  },
  text: {
    textDecorationLine: "underline",
  },
  input: {
    textAlign: "center",

    margin: "2%",
    height: "10%",
    width: "80%",
    borderColor: "rgba(239, 236, 253, 1)",
    backgroundColor: "rgba(239, 236, 253, 1)",
    borderWidth: 0.5,
    fontSize: 18,
    borderRadius: 100,
  },
  submitButton: {
    backgroundColor: "#BDB2FF",
    padding: "3%",
    color: "white",
    margin: "1%",
    height: "7%",
    width: "30%",
    borderRadius: 20,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
});
