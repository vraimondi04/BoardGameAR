import React from "react";
import { View, Text } from 'react-native' 
import CameraComponent from './src/components/CameraComponent'

const App = () => {
  return (
    <View className="flex-1">
      <CameraComponent />
    </View>
  )
}
export default App;