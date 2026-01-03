import { Text, TextInput, View, Image } from "react-native";

export default function Index() {
  return (
    <View className="text-blue-600 m-2">
      <View className="flex flex-row justify-between items-end">
        <View>
          <Text>Hello</Text>
          <Text className="text-4xl font-bold text-slate-800">Hi Jeff</Text>
        </View>
        <View>
          <Image
            source={{ uri: "https://placehold.net/avatar-2.svg" }}
            style={{ width: 50, height: 50 }}
            className="bg-blue-300 rounded-2xl"
          />
        </View>
      </View>
      <View className="bg-blue-500 mt-16 text-white py-2 px-3 rounded-xl">
        <TextInput placeholder="Search..." />
      </View>
      <View className="mt-8">
        <Text className="font-bold text-3xl">Services</Text>
        <View>
          <View></View>
        </View>
      </View>
    </View>
  );
}
