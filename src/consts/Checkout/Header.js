import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import COLORS from "../../consts/colors";

const Header = () => {
  return (
    <ImageBackground
      style={{ flex: 0.7 }}
      source={require("../../assets/Dubai/Bedroom/Suite.jpg")}
    >
      <View style={style.header}></View>
      <View style={style.imageDetails}>
        <Text
          style={{
            width: "70%",
            fontSize: 30,
            fontWeight: "bold",
            color: COLORS.white,
            marginBottom: "2%",
          }}
        >
          Suite Room
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Header;

const style = StyleSheet.create({
  header: {
    marginTop: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageDetails: {
    padding: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: "40%",
  },
});
