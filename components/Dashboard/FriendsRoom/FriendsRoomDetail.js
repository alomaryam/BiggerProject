import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import PostList from "../Posts/PostList";

// import { Spinner } from "native-base";

export const TopStyling = styled.View`
  height: 40%;
  background-color: rgba(189, 178, 255, 0.62);
  align-items: center;
  /* justify-content: center; */
`;

const FriendsRoomDetail = () => {
  // if (authStore.loading) return <Spinner />;
  return (
    <>
      <TopStyling>
        <PostList />
      </TopStyling>
    </>
  );
};
export default FriendsRoomDetail;
