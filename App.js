import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, Text, TouchableOpacity, View, StatusBar, Alert } from 'react-native';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View className="flex-1 justify-center">
        <Text className="text-center">We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const returnToPrev = () =>  {
    Alert.alert("Need to implement lol (separate to different screens / components)");
  }

  return (
    <View className="flex-1 justify-center">
      <Camera className="flex-1" type={type}>
        <View className="flex-1 flex-row bg-transparent mx-24 items-end">
          <TouchableOpacity className="flex-1 justify-end items-center" onPress={toggleCameraType}>
            <Text className="text-white font-bold text-xl mb-24">Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 justify-end items-center" onPress={returnToPrev}>
            <Text className="text-white font-bold text-xl mb-24">Go Back</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <StatusBar barStyle="dark-content"/>
    </View>
  );
}
