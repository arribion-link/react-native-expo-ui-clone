import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import ProductSearch from '@/components/ProductSearch'
import ProductCard from '@/components/ProductCard';


export default function Product() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <SafeAreaProvider>
        <SafeAreaView className="m-4">
          <Text></Text>
          <ProductSearch />

          {/* // Inside your main component (e.g. HomeScreen) */}
          <View className="px-4 mt-1">
            <Text className="text-xl font-bold text-gray-800 mb-4">
              Featured Products
            </Text>

            <ScrollView
              showsHorizontalScrollIndicator={false} // cleaner look
              contentContainerStyle={{ paddingRight: 16 }} // space after last card
              className='flex-row gap-4'
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
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}