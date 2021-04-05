import React from "react";
import { Text } from "react-native";

const Rooms = ({ navigation }) => {
  return (
    <Text onPress={() => navigation.navigate("Dashboard")}>
      Rooms Available
    </Text>
  );
};
export default Rooms;
