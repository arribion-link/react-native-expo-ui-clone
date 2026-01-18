import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <View style={Styles.ctaBanner}>
      <View className="">
        <Text className="text-slate-100 text-4xl">This week </Text>
        <Text className='text-4xl'>fresh picks</Text>
        <TouchableOpacity className="bg-white">
          <Text className='bg-white my-4'>Explore</Text>
        </TouchableOpacity>
      </View>
      <Image />
    </View>
  );
}

export default Banner

const Styles = StyleSheet.create({
  ctaBanner: {
    backgroundColor: "green",
    padding: 10,
    minHeight: 250,
    borderRadius: 30,
  },
});