import React from "react";
import { Text , View, Image} from "react-native";
import styled from "styled-components/native";
import SignoutButton from "./Buttons/SignOut";
import authStore from "../../stores/authStore";
import dummyImage from "../../assets/dummyimage.png"
// import { Spinner } from "native-base";

export const ButtonView = styled.View`
  border-style: none;
  border: 10px;
  /* background-color: rgba(189, 178, 255, 0.62); */
  width: 200px;
  border-radius: 100px;
`;

export const ButtonStyled = styled.Text`
  font-size: 15px;
  color: white;
  font-weight: bold;
  width: 180px;
  text-align: center;
  background-color: rgba(189, 178, 255, 0.62);
`;
export const TopStyling = styled.View`
  height: 40%;
  background-color: rgba(189, 178, 255, 0.62);
  align-items: center;
  /* justify-content: center; */
`;

export const BottomStyling = styled.View`
  height: 50%;
  /* flex-direction: row; */

  /* justify-content: center; */
  background-color: rgba(189, 178, 255, 0.62);
`;

export const StyleImage = styled.Image`
margin-top:10%;
height:150px;
width:150px;
border-radius:100;
`;
export const TextStyled =styled.Text`
font-size:25px;
padding:3%;
/* text-align:flex; */
/* border-bottom:10px; */
color:white;
`;

const Profile = () => {
  // if (authStore.loading) return <Spinner />;
  return (
    <>
      <TopStyling>
    
        <View>
        <SignoutButton />
        <StyleImage source={dummyImage}></StyleImage>
        </View>

      </TopStyling>
      <BottomStyling>
      
      <TextStyled> {authStore.user.firstName}</TextStyled>
        <TextStyled> {authStore.user.lastName} </TextStyled>
        <TextStyled> {authStore.user.email} </TextStyled>
        <TextStyled> {authStore.user.username} </TextStyled>
      </BottomStyling>
    </>
  );
};
export default Profile;
