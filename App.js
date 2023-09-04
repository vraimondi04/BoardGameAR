import { StatusBar } from "expo-status-bar";
import { Alert, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <Text>PLS</Text>
      <Button onPress={() => Alert.alert('Simple Button Pressed.')} title='Press me'></Button>
      <StatusBar style="auto" />
    </View>
  );
}
