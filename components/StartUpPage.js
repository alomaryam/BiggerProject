import React from "react";
import styled from "styled-components/native";

// export const HomeBackground = styled.View`
//   background-color: blue;
//   flex: 1;
//   width: 100%;
//   height: 100%;
// `;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  /* color: rgb(84, 68, 79); */
  color: rgb(252, 236, 247);
  font-weight: bold;
  font-style: italic;
  /* font-family:  */
  font-size: 43;
  text-align: center;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(140, 114, 131, 0.25);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 15;
  color: white;
  font-weight: bold;
  width: 220px;
  text-align: center;
  margin-bottom: 10px;
  padding: 30px;
  border-width: 5px;
  background-color: rgb(84, 68, 79);
  border-color: white;
  border-radius: 20px;
`;

const StartUp = ({ navigation }) => {
  return (
    <HomeBackground>
      <OverLayContainer>
        <TopStyling>
          <Title>Hello!</Title>
        </TopStyling>
        <BottomStyling>
          {/* <ButtonStyled onPress={() => navigation.navigate("FlowersList")}> */}
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
      </OverLayContainer>
    </HomeBackground>
  );
};

export default StartUp;
