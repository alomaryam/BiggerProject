import React from "react";
import RoomsItems from "./MyRoomsItems";
import roomStore from "../../../stores/roomStore";
import { observer } from "mobx-react";
import { List, Content } from "native-base";

let RoomsList = () => {
  const RoomsList = roomStore.room.map((room) => (
    <RoomsItems room={room} key={room.id} />
  ));

  return (
    <Content>
      <List>{RoomsList}</List>
    </Content>
  );
};
export default observer(RoomsList);

// import React from "react";
// import { Text } from "react-native";

// const Rooms = ({ navigation }) => {
//   return (
//     <Text onPress={() => navigation.navigate("Dashboard")}>
//       Rooms Available
//     </Text>
//   );
// };
// export default Rooms;
