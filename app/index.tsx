import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import ProductSearch from "../components/ProductSearch";
import {  Search } from "lucide-react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Banner from "../components/Banner";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
export default function Index() {
  return (
    <SafeAreaProvider>
      <ScrollView showsVerticalScrollIndicator={false} className="m-4">
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
        <Categories />
        {/* // Inside your main component (e.g. HomeScreen) */}
        <View className="px-4 mt-1">
          <Text className="text-xl font-bold text-gray-800 mb-4">
            Featured Products
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false} // cleaner look
            contentContainerStyle={{ paddingRight: 16 }} // space after last card
          >
            <ProductCard name="Fresh Apples" price="KSh 180/kg" />
            <ProductCard name="Ripe Bananas" price="KSh 120/bunch" />
            <ProductCard name="Organic Tomatoes" price="KSh 250/kg" />
            <ProductCard name="Avocados (Hass)" price="KSh 90 each" />
            <ProductCard name="Fresh Carrots" price="KSh 100/kg" />
            <ProductCard name="Red Onions" price="KSh 140/kg" />
            {/* Add more as needed */}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
