import React from "react";
import RoomsItems from "./MyRoomsItems";
import roomStore from "../../../stores/roomStore";
import { observer } from "mobx-react";
import { List, Content } from "native-base";

let RoomsList = ({ navigation }) => {
  const RoomsList = roomStore.room.map((room) => (
    <RoomsItems navigation={navigation} room={room} key={room.id} />
  ));

  return (
    <Content>
      <List>{RoomsList}</List>
    </Content>
  );
};
export default observer(RoomsList);
