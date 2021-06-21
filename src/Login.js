import React from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [text1, onChangeText1] = React.useState("Useless Text");
  const navigation = useNavigation();

  let onPress = () => {
    if (text && text1) {
      if (text === "hiep" && text1 === "password") {
        navigation.navigate("Home");
      }
    }
  };

  return <SafeAreaView>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
    />

    <TextInput
      style={styles.input}
      onChangeText={onChangeText1}
      value={text1}
    />


    <TouchableOpacity onPress={onPress}>
      <Text>Login</Text>
    </TouchableOpacity>
  </SafeAreaView>;
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default React.memo(Login);
