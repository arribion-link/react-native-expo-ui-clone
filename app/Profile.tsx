import { View, Text, Image } from 'react-native'
import React from 'react'

const Profile = () => {
  const userData = {
    name: "JEFF METHIA",
    email: "mutethia@example.com"
  }
  return (
    <View className='flex-1 items-center mt-[4em]'>
      <Image
        source={{
          uri: "https://placehold.net/avatar-2.svg",
        }}
        style={{ width: 100, height: 100 }}
        className="bg-green-400 rounded-3xl"
        resizeMode="cover"
      />
      <Text>{userData.name}</Text>
      <Text> {userData.email} </Text>
    </View>
  );
}

export default Profile