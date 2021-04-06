import React from "react";
import BackgroundIMG from "../assets/original.gif";
import HubLogoIcon from "../assets/Register.png";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import styled from "styled-components/native";

//Styles compounents
export const HubLogoImage = styled.Image`
  flex: 1;
  margin-right:40%;
  resize-mode: contain;
  justify-content: center;
  border-width:0.2px;
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
   color:#745CFF;
`;
export const InputStyled = styled.TextInput`
  color: white;
`;



const SignUp = ({ navigation }) => {
  return (
    <HomeBackground source={BackgroundIMG}>
    <View style={styles.container}>
    <HubLogoImage source={HubLogoIcon}></HubLogoImage>
    {/* <TitleStyled>Register</TitleStyled> */}
      <TextInput style={styles.input} placeholder="First Name" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Dashboard")}
      >
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
        paddingTop:"25%",
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
