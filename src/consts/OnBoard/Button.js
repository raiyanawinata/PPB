import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Button = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <View style={style.btn}>
          <Text style={{ fontWeight: "bold" }}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const style = StyleSheet.create({
  btn: {
    height: 50,
    width: 140,
    backgroundColor: "#fff",
    marginTop: 25,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
