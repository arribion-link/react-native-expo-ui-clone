import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Notifications = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} className="m-4">
      <SafeAreaProvider>
        <Text>my notifications</Text>

        <View></View>
      </SafeAreaProvider>
    </ScrollView>
  );
}

export default Notifications