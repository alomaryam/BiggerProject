import React from "react";
import { TextInput } from "react-native";

const FriendsRoom = ({ navigation }) => {
  return (
    <TextInput onPress={() => navigation.navigate("Dashboard")}>
      {" "}
      Search for a Room{" "}
    </TextInput>
  );
};
export default FriendsRoom;
