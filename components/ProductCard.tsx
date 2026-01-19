import { View, Text, Image } from "react-native";
import React from "react";

const ProductCard = ({ name = "Fresh Apple", price = "KSh 150", imageUrl }: { name?: string; price?: string; imageUrl?: string }) => {
  return (
    <View className="w-44 h-64 pb-4 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 mr-4">
      {/* Product Image */}
      <Image
        source={{
          uri: imageUrl || "https://via.placeholder.com/180x140?text=Product",
        }}
        className="w-full h-36 object-cover"
        resizeMode="cover"
      />

      {/* Details */}
      <View className="p-3 flex-1 justify-between">
        <Text
          className="text-base font-semibold text-gray-800"
          numberOfLines={2}>
          {name}
        </Text>
        <Text className="text-lg font-bold text-green-700 mt-1">{price}</Text>
        <View className="mt-2 bg-green-600 rounded-full py-1.5 px-4 self-start">
          <Text className="text-white text-xs font-medium">Add to Cart</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
