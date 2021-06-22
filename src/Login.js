import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [text1, onChangeText1] = React.useState("Useless Text");
  const navigation = useNavigation();

  let onPress = () => {
    if (text && text1) {
      if (text === "hiep" && text1 === "password") {
        navigation.navigate("Home");
      }else  {
        alert("Wrong Login")
      }
    }
  };

  return <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        testID={"user"}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <TextInput
        testID={"pass"}
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1}
      />


      <TouchableOpacity
        testID={"btnLogin"}
        onPress={onPress}
        style={styles.buttonLogin}>
        <Text style={{ color: "white", fontWeight: "600" }}>Login</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>;
}


const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
  }, buttonLogin: {
    height: 40,
    width: "75%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },

});

export default React.memo(Login);
