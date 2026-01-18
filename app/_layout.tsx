import { Tabs } from "expo-router";
import "../global.css"
export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="Product" options={{ title: "Products" }} />
      <Tabs.Screen name="Profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="Notification" options={{ title: "Notification" }} />
    </Tabs>
  );
}
