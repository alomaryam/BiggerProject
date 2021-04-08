import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MyRooms from "./Dashboard/MyRooms/MyRoomsList";
import Profile from "./Dashboard/Profile";
import FriendsRoom from "./Dashboard/FriendsRoom/FriendRoomList";
import RoomDetail from "./Dashboard/MyRooms/MyRoomDetail";
import FriendsRoomDetail from "./Dashboard/FriendsRoom/FriendsRoomDetail";

const { Navigator, Screen } = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const ExploreNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Explore"
        component={FriendsRoom}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="My Rooms"
        component={MyRooms}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="My Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="FriendsRoomDetail"
        component={FriendsRoomDetail}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="RoomDetail"
        component={RoomDetail}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

function Tabs() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#694fad" }}>
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        // options={{ tabBarLabel: "FriendsRoomDetail" }}
      />
      <Tab.Screen
        name="My Rooms"
        component={ExploreNavigator}
        // options={{ tabBarLabel: "RoomDetail" }}
      />
      <Tab.Screen name="My Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Tabs;
