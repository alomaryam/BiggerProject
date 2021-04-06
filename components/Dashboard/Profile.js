import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import SignoutButton from "./Buttons/SignOut";

export const ButtonView = styled.View`
  border-style: none;
  border: 10px;
  border-color: rgb(189, 178, 255);
  width: 200px;
  border-radius: 100px;
`;

export const ButtonStyled = styled.Text`
  font-size: 15px;
  color: white;
  font-weight: bold;
  width: 180px;
  text-align: center;
  background-color: rgb(189, 178, 255);
`;
export const TopStyling = styled.View`
  height: 40%;
  background-color: rgba(189, 178, 255, 0.62);
  align-items: center;
  /* justify-content: center; */
`;

export const BottomStyling = styled.View`
  height: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Profile = ({ navigation }) => {
  return (
    <>
      <TopStyling>
        <Text> My Profile </Text>
      </TopStyling>
      <BottomStyling>
        <ButtonView>
          <SignoutButton />
        </ButtonView>
      </BottomStyling>
    </>
  );
};
export default Profile;
