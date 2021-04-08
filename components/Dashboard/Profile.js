import React from "react";
import styled from "styled-components/native";
import SignoutButton from "./Buttons/SignOut";
import authStore from "../../stores/authStore";
import dummyImage from "../../assets/dummyimage.png";
import { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import Create from "./Buttons/CreateRoom";

// import { Spinner } from "native-base";

export const ButtonView = styled.View`
  border-style: none;
  border: 10px;
  /* background-color: rgba(189, 178, 255, 0.62); */
  width: 200px;
  border-radius: 100px;
`;

export const ButtonStyled = styled.Text`
  font-size: 15px;
  color: white;
  font-weight: bold;
  width: 180px;
  text-align: center;
  background-color: rgba(189, 178, 255, 0.62);
`;
export const TopStyling = styled.View`
  height: 40%;
  background-color: rgba(189, 178, 255, 0.62);
  align-items: center;
  /* justify-content: center; */
`;

export const BottomStyling = styled.View`
  height: 50%;
  /* flex-direction: row; */

  /* justify-content: center; */
  background-color: rgba(189, 178, 255, 0.62);
`;

export const StyleImage = styled.Image`
  margin-top: 10%;
  height: 150px;
  width: 150px;
  border-radius: 100;
`;
export const TextStyled = styled.Text`
  font-size: 25px;
  padding: 3%;
  /* text-align:flex; */
  /* border-bottom:10px; */
  color: white;
`;

const Profile = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  // if (authStore.loading) return <Spinner />;
  return (
    <>
      <TopStyling>
        <View>
          <SignoutButton />
          <StyleImage source={dummyImage}></StyleImage>
        </View>
      </TopStyling>
      <BottomStyling>
        <TextStyled> {authStore.user.firstName}</TextStyled>
        <TextStyled> {authStore.user.lastName} </TextStyled>
        <TextStyled> {authStore.user.email} </TextStyled>
        <TextStyled> {authStore.user.username} </TextStyled>

        <TouchableOpacity onPress={() => navigation.navigate("MyRooms")}>
          <Text>My Rooms</Text>
        </TouchableOpacity>
      </BottomStyling>

      <View style={styles.centeredView}>
        <Modal
          navigation="navigation"
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Create />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Create Room</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Profile;
