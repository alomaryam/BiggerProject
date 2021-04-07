import React from "react";
import styled from "styled-components";
import { ListItem } from "native-base";
import { observer } from "mobx-react";
import { TouchableOpacity } from "react-native";

const TextStyled = styled.Text`
  color: black;
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

const FriendsRoomsItems = ({ room, navigation }) => {
  return (
    <>
      <ListItem>
        <TouchableOpacity onPress={() => alert("Go to room posts")}>
          <TextStyled>
            Room: {room.name} {`\n`}
            Description: {room.description}
          </TextStyled>
        </TouchableOpacity>
      </ListItem>
    </>
  );
};

export default observer(FriendsRoomsItems);
