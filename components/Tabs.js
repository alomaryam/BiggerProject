import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Search from "./Dashboard/FriendsRoom/FriendRoomList";
import MyRooms from "./Dashboard/MyRooms/MyRoomsList";
import Profile from "./Dashboard/Profile";
import styled from "styled-components/native";
import FriendsRoom from "./Dashboard/FriendsRoom/FriendRoomList";

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#694fad" }}>
      <Tab.Screen name="Explore" component={FriendsRoom} />
      <Tab.Screen name="My Rooms" component={MyRooms} />
      <Tab.Screen name="My Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Tabs;
