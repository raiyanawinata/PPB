import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Button = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("SignIn")}
    >
      <View style={style.btn}>
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
          Book Now
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const style = StyleSheet.create({
  btn: {
    height: 55,
    marginTop: "20%",
    marginHorizontal: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#534390",
    borderRadius: 10,
  },
});
