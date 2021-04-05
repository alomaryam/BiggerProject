import React from "react";
import styled from "styled-components/native";
import ImageBackground from "react-native";
import BackgroundIMG from "../assets/BackgroundIMG6.gif";
import HubLogo from "../assets/HubLogo.png";
//Styling

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const HubLogoImage = styled.Image`
  flex: 1;
  margin-top: 1%;
  padding: 30%;
  width: 40%;
  height: 40%;
  justify-content: center;
`;
export const TopStyling = styled.View`
  height: 40%;
  background-color: rgba(189, 178, 255, 0.62);
  align-items: center;
  /* justify-content: center; */
`;

export const Title = styled.Text`
  /* padding: 15%; */
  margin: 5%;
  color: #f5f1ed;
  font-size: 35;
  /* text-align: center; */
`;

export const Sentence = styled.Text`
  padding: 1%;
  color: #f5f1ed;
  font-size: 20px;
  margin: 4%;
  /* text-align: center; */
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: #fff1e6;
`;

export const BottomStyling = styled.View`
  height: 40%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonView = styled.View`
  border-style: none;
  border: 10px;
  border-color: rgb(189, 178, 255);
  margin: 1%;
  border-radius: 100px;
`;

export const ButtonStyled = styled.Text`
  font-size: 15px;
  color: white;
  font-weight: bold;
  width: 180px;
  text-align: center;
  padding: 3%;
  background-color: rgb(189, 178, 255);
`;

//**************** Function *************

const StartUp = ({ navigation }) => {
  return (
    <OverLayContainer>
      <HomeBackground source={BackgroundIMG}>
        <TopStyling>
          <HubLogoImage source={HubLogo}></HubLogoImage>
        </TopStyling>
        <Title>Get Started ...</Title>
        <Sentence>
          have the ability to connect with friends and family ...
        </Sentence>
        <BottomStyling>
          <ButtonView>
            <ButtonStyled onPress={() => navigation.navigate("SignIn")}>
              Sign In
            </ButtonStyled>
          </ButtonView>
          <ButtonView>
            <ButtonStyled onPress={() => navigation.navigate("SignUp")}>
              Sign Up
            </ButtonStyled>
          </ButtonView>
        </BottomStyling>
      </HomeBackground>
    </OverLayContainer>
  );
};

export default StartUp;
