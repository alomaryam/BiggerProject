import React from "react";
import BackgroundIMG from "../assets/original.gif";
import HubLogoIcon from "../assets/HubLogoText.png";
import authStore from "../stores/authStore";
import { useState } from "react";
import { Icon } from "native-base";

import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import styled from "styled-components/native";

//Styles compounents
export const HubLogoImage = styled.Image`
  flex: 1;
  /* resizemode: contain; */
  justify-content: center;
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
export const InputStyled = styled.TextInput`
  color: white;
`;

export const Iconstyled = styled(Icon)`
  color: red;
`;

const SignIn = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [passwordIcon, setPasswordIcon] = useState("eye");
  const [passwordVisibilty, setPasswordVisibilty] = useState(true);

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.navigate("Dashboard");
  };

  const handlePassword = () => {
    if (passwordIcon === "eye") {
      setPasswordIcon("eye-off");
      setPasswordVisibilty(false);
    } else {
      setPasswordIcon("eye");
      setPasswordVisibilty(true);
    }
  };

  return (
    <HomeBackground source={BackgroundIMG}>
      <View style={styles.container}>
        <HubLogoImage source={HubLogoIcon}></HubLogoImage>
        <InputStyled
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          onChangeText={(username) => setUser({ ...user, username })}
        />

        <InputStyled
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={passwordVisibilty}
          onChangeText={(password) => setUser({ ...user, password })}
        />

        <Iconstyled
          name={passwordIcon}
          type="MaterialCommunityIcons"
          onPress={handlePassword}
        />

        <TouchableOpacity
          style={styles.submitButton}
          // onPress={() => navigation.navigate("Dashboard")}
          onPress={handleSubmit}
        >
          <TextStyled style={styles.submitButtonText}> Sign In </TextStyled>
        </TouchableOpacity>
        <TextStyled> Create a New Account </TextStyled>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <TextStyled style={styles.text}> Sign Up </TextStyled>
        </TouchableOpacity>
      </View>
    </HomeBackground>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    // paddingTop:"25%",
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

    margin: "5%",
    height: "14%",
    width: "80%",
    borderColor: "rgba(239, 236, 253, 0.8)",
    backgroundColor: "rgba(239, 236, 253, 0.8)",
    borderWidth: 0.5,
    fontSize: 18,
    borderRadius: 100,
  },
  submitButton: {
    backgroundColor: "#BDB2FF",
    padding: "3%",
    color: "white",
    margin: "1%",
    height: "10%",
    width: "30%",
    borderRadius: 20,
  },
  submitButtonText: {},
});

// OLD ONE
// import React from "react";
// import {
//   Text,
//   TextInput,
//   StyleSheet,
//   View,
//   TouchableOpacity,
// } from "react-native";

// const SignIn = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <TextInput style={styles.input} placeholder="Username" />
//       <TextInput style={styles.input} placeholder="Password" />

//       <TouchableOpacity
//         style={styles.submitButton}
//         onPress={() => navigation.navigate("Dashboard")}
//       >
//         <Text style={styles.submitButtonText}> Sign In </Text>
//       </TouchableOpacity>
//       <Text> Create a New Account </Text>
//       <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
//         <Text style={styles.text}> Sign Up </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SignIn;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 23,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     textDecorationLine: "underline",
//   },
//   input: {
//     textAlign: "center",
//     margin: 15,
//     height: 40,
//     width: 300,
//     borderColor: "rgb(83, 188, 230)",
//     borderWidth: 1,
//   },
//   submitButton: {
//     backgroundColor: "rgb(83, 188, 230)",
//     padding: 10,
//     margin: 15,
//     height: 40,
//     width: 90,
//   },
//   submitButtonText: {
//     color: "white",
//     textAlign: "center",
//   },
// });
