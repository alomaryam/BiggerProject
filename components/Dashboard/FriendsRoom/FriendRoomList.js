import React from "react";
import FriendsRoomsItems from "./FriendRoomItem";
import roomStore from "../../../stores/roomStore";
import { observer } from "mobx-react";
import { List, Content } from "native-base";

let FriendsRoomsList = () => {
  const RoomList = roomStore.room.map((room) => (
    <FriendsRoomsItems room={room} key={room.id} />
  ));

  return (
    <Content>
      <List>{RoomList}</List>
    </Content>
  );
};
export default observer(FriendsRoomsList);
