import { Text, View, TouchableOpacity } from "react-native";
import ProductSearch from "../components/ProductSearch";
import {  Search } from "lucide-react-native";
import { SafeAreaView , SafeAreaProvider } from "react-native-safe-area-context";
import Banner from "../components/Banner";
export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="m-4">
        <View className="flex-row justify-between">
          <Text>Discover</Text>
          <Search />
        </View>
        <ProductSearch />
        <Banner />
        <View className="mt-12 flex-row justify-between">
          <Text className="text-3xl">Shop by Categories</Text>
          <TouchableOpacity>
            <Text className="text-3xl">See all</Text>
         </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
