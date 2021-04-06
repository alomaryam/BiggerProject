import React from "react";
//styles
import styled from "styled-components/native";
//stores
import authStore from "../../../stores/authStore";
//navigation
import { useNavigation } from "@react-navigation/native";

import { Icon } from "native-base";

export const SignoutButtonStyled = styled(Icon)`
  color: red;
`;

const SignoutButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    authStore.signout();
    navigation.navigate("Home");
  };
  return (
    <SignoutButtonStyled name="logout" type="AntDesign" onPress={handlePress} />
  );
};

export default SignoutButton;
