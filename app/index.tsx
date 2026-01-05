import { Text, TextInput, View, Image } from "react-native";
import { Camera, UserCheck,ShieldBan, Clipboard, PillBottle } from "lucide-react-native";
// import { UserCheck } from "lucide-react" 
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
        <View className="flex-row justify-start mt-12">
          <View className="border rounded-2xl p-2 m-1 w-fit">
            <UserCheck color="blue" size={48} />
          </View>
          <View className="border rounded-2xl p-2 m-1 w-fit">
            <ShieldBan color="blue" size={48} />
          </View>
          <View className="border rounded-2xl p-2 m-1 w-fit">
            <PillBottle color="blue" size={48} />
          </View>
          <View className="border rounded-2xl p-2 m-1 w-fit">
            <Clipboard color="blue" size={48} />
          </View>
          <View className="border rounded-2xl p-2 m-1 w-fit">
            <PillBottle color="blue" size={48} />
          </View>
          <View className="border rounded-2xl p-2 m-1 w-fit">
            <Clipboard color="blue" size={48} />
          </View>
        </View>
      </View>

      <View className="flex-row gap-12 bg-slate-400 rounded-2xl mt-12">
        <View>
          <Text className="text-blue-500 text-4xl">Get the best</Text>
          <Text className="text-blue-500 text-4xl"> medical Services</Text>
        </View>
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww",
            }}
            style={{
              width: 200,
              height: 200,
            }}
            className="rounded-2xl"
          />
        </View>
      </View>

      <View>
        <Text className="text-3xl font-bold mt-12">Upcoming Appointments</Text>
        <View>
          
        </View>
      </View>
    </View>
  );
}
