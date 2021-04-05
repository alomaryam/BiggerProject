import React from "react";
import { TextInput } from "react-native";

const Search = ({ navigation }) => {
  return (
    <TextInput onPress={() => navigation.navigate("Dashboard")}>
      {" "}
      Search for a Room{" "}
    </TextInput>
  );
};
export default Search;
