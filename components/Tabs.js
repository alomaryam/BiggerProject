import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Search from "./Search";
import Rooms from "./Rooms";
import Profile from "./Profile";

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="My Rooms" component={Rooms} />
      <Tab.Screen name="My Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Tabs;
