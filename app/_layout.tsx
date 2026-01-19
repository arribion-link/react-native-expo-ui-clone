import { Tabs } from "expo-router";
import "../global.css"
import {Ionicons } from "@expo/vector-icons"
export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                size={30}
                name={focused ? "home" : "home-outline"}
                color="green"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Product"
        options={{
          title: "Products",
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                size={30}
                name={focused ? "cart" : "cart-outline"}
                color="green"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Notification"
        options={{
          title: "Profile",
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                size={30}
                name={focused ? "notifications" : "notifications-outline"}
                color="green"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({focused}) => {
            return <Ionicons
              size={30}
              name={focused ? "person" : "person-outline"}
              color="green"
            />;
          },
        }}
      />
    </Tabs>
  );
}
