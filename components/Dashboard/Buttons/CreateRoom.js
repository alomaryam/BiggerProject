import React from "react";
import roomStore from "../../../stores/roomStore";
import { StyleSheet, Touchable } from "react-native";
import { Input, Text, View, Button } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

//Styles compounents
export const Textt = styled.Text`
  color: white;
  background-color: #2196f3;
  border-color: #2196f3;
  padding: 5px;
  margin-top: 5;
  margin-bottom: 5;
  text-align: center;
`;

const AddRoom = ({ navigation }) => {
  const [room, setRoom] = useState({
    name: "",
    description: "",
  });

  //   const handleChange = (event) => {
  //     setRoom({ ...room, [event.target.name]: event.target.value });
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    roomStore.createRoom(room);
    // navigation.navigate("My Rooms");
  };

  return (
    <View style={styles.container}>
      <Text> Create New Room </Text>
      <Input
        placeholder="Name"
        type="text"
        name="name"
        // onChange={handleChange}
        onChangeText={(name) => setRoom({ ...room, name })}
        autoCapitalize="none"
      />
      <Input
        placeholder="Description"
        type="text"
        name="description"
        // onChange={handleChange}
        onChangeText={(description) => setRoom({ ...room, description })}
        autoCapitalize="none"
      />
      <View>
        <Textt onPress={handleSubmit}>Add Room</Textt>
        <TouchableOpacity onPress={() => alert("go to my rooms")}>
          {/* <TouchableOpacity onPress={() => navigation.navigate("My Rooms")}> */}
          <Textt>Show Rooms </Textt>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    paddingBottom: "10%",
    justifyContent: "center",
    // backgroundColor: "red",
    width: 300,
    height: 210,
    alignItems: "center",
    fontSize: 39,
  },
  text: {
    textDecorationLine: "underline",
    textAlign: "center",
    color: "red",
  },
  input: {
    textAlign: "center",
    margin: "5%",
    height: "14%",
    width: "80%",
    borderColor: "rgba(239, 236, 253, 0.8)",
    backgroundColor: "rgba(239, 236, 253, 0.8)",
    borderWidth: 0.5,
    fontSize: 18,
    borderRadius: 100,
  },
  submitButton: {
    backgroundColor: "#BDB2FF",
    padding: "3%",
    color: "white",
    margin: "1%",
    height: "10%",
    width: "30%",
    borderRadius: 20,
  },
  submitButtonText: {},
});

export default AddRoom;
