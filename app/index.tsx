import { Text, View, TouchableOpacity } from "react-native";
import ProductSearch from "../components/ProductSearch";
import {  Search } from "lucide-react-native";
import { SafeAreaView , SafeAreaProvider } from "react-native-safe-area-context";
import Banner from "../components/Banner";
import Categories from "@/components/Categories";
export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="m-4">
        {/* header section */}
        <View className="flex-row justify-between">
          <Text>Discover</Text>
          <Search />
        </View>
        <ProductSearch />
        <Banner />
        {/* categories */}
        <View className="mt-12 flex-row justify-between">
          <Text className="font-bold">Shop by Categories</Text>
          <TouchableOpacity>
            <Text className="font-bold text-blue-500">See all</Text>
         </TouchableOpacity>
        </View>
        {/* featured products */}
        <Categories/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
