import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";

const Categories = () => {
  const categoriesData = [
    { id: 1, Category: "Fresh Fruits" },
    { id: 2, Category: "Fresh Vegetables" },
    { id: 3, Category: "Fresh Meat" },
    { id: 4, Category: "Snacks" },
    { id: 5, Category: "Pastries" },
    // You can add more...
  ];

  const renderItem = ({ item }: { item: { id: number; Category: string } }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-1 mx-1 my-1.5" // ← flex-1 + margin = even spacing
    >
      <View className="bg-white border border-gray-200 rounded-2xl p-5 items-center shadow-sm h-20">
        <Text className="text-green-700 font-medium text-[10px] text-center">
          {item.Category}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="px-3 py-4">
      {/* <Text className="text-xl font-bold text-gray-800 mb-3 px-1">
        Categories
      </Text> */}

      <FlatList
        data={categoriesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} // ← most important: creates the grid/row layout
        columnWrapperStyle={{
          // optional: better spacing between rows
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

export default Categories;
