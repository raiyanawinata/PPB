import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
    const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={style.btnPrimary}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("CheckOut")}
      >
        <View style={style.btn}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Sign In
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "grey" }}>Don`t have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ color: "#534390", fontWeight: "bold", marginLeft: 5 }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
