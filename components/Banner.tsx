import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <View style={Styles.ctaBanner} className='flex-row relative'>
      <View className="">
        <Text className="text-slate-100 text-4xl">This week </Text>
        <Text className="text-4xl">fresh picks</Text>
        <TouchableOpacity className="bg-slate-100 rounded-3xl my-20 w-fit">
          <Text className="p-2 text-center font-bold ">Explore</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/images/banner.png")}
        style={{ width: 300, height: 300 }}
        className='bottom-0 absolute right-0'
      />
    </View>
  );
}

export default Banner

const Styles = StyleSheet.create({
  ctaBanner: {
    backgroundColor: "green",
    padding: 10,
    minHeight: 250,
    borderRadius: 10,
  },
});