import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 2000);
  }, []);
  return <View style={{ backgroundColor: "#95A78D", flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: "white", fontSize: 23 }}>Wellcome</Text>
  </View>;
}

export default React.memo(Splash);
