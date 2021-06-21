import { Button, Text, View } from "react-native";
import React from 'react'
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text testID={"Hello01"}>Home Screen</Text>
      <Button
        testID={"Button"}
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

export default HomeScreen;
