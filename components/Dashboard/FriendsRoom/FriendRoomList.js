import React from "react";
import FriendsRoomsItems from "./FriendRoomItem";
import roomStore from "../../../stores/roomStore";
import { observer } from "mobx-react";
import { List, Content } from "native-base";

let FriendsRoomsList = ({ navigation }) => {
  const RoomList = roomStore.exploreRoom.map((room) => (
    <FriendsRoomsItems navigation={navigation} room={room} key={room.id} />
  ));

  return (
    <Content>
      <List>{RoomList}</List>
    </Content>
  );
};
export default observer(FriendsRoomsList);
