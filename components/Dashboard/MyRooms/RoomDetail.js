import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
// import { Spinner } from "native-base";

export const TopStyling = styled.View`
  height: 40%;
  background-color: rgba(189, 178, 255, 0.62);
  align-items: center;
  /* justify-content: center; */
`;

const RoomDetail = () => {
  // if (authStore.loading) return <Spinner />;
  return (
    <>
      <TopStyling>
        <Text> Image </Text>
      </TopStyling>
    </>
  );
};
export default RoomDetail;
