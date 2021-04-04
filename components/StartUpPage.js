import React from "react";
import styled from "styled-components/native";
import ImageBackground from "react-native";
import BackgroundIMG from "../assets/BackgroundIMG6.gif";

//Styling

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
    justify-content:center;
`;
export const TopStyling = styled.View`
  height: 40%;
  
  background-color:rgba(221, 190, 169, 0.6);
  align-items: center;
  /* justify-content: center; */
`;

export const Title = styled.Text`
padding: 15%;
  color: #f5f1ed;
  font-size: 35;
  text-align: left;
`;

export const Sentence = styled.Text`

padding: 1%;
  color: #f5f1ed;
  font-size: 20;
  /* text-align: center; */
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: #fff1e6;
`;

export const BottomStyling = styled.View`
  height: 40%;
flex-direction:row;
  align-items:center;
  justify-content:space-between;
`;

export const ButtonStyled = styled.Text`
  font-size: 15;
  color: white;
  font-weight: bold;
  
  width: 200px;
  text-align: center;
  padding: 5%;
  background-color:rgba(221, 190, 169, 0.6);
`;

//**************** Function *************

const StartUp = ({ navigation }) => {
  return (

      <OverLayContainer>
          <HomeBackground source={BackgroundIMG}>
        <TopStyling>
     
         
        </TopStyling>
        <Title>Get Started ...</Title>
          <Sentence>have the ability to connect with friends and family ...</Sentence>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("SignIn")}>
            Sign In
          </ButtonStyled>
          <ButtonStyled onPress={() => navigation.navigate("SignUp")}>
            Sign Up
          </ButtonStyled>
          {/* <ButtonStyled onPress={() => navigation.navigate("Rooms")}>
            Or Here
          </ButtonStyled> */}
        </BottomStyling>
        </HomeBackground>
      </OverLayContainer>
   
  );
};

export default StartUp;
