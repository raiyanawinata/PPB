import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.btnPrimary}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("CheckOut")}
    >
      <View style={style.btn}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          Sign Up
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Footer;

const style = StyleSheet.create({
  btnPrimary: {
    backgroundColor: "#534390",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
});
