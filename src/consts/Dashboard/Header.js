import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import COLORS from "../colors";

const Header = () => {
  return (
    <View>
      {/* Onboarding Image */}
      <Image
        source={require("../../assets/Dubai/bggetstarted.jpg")}
        style={style.image}
      />

      {/* Indicator container */}
      <View style={style.indicatorContainer}>
        <View style={style.indicator} />
        <View style={style.indicator} />
        <View style={style.indicator} />
        <View style={style.indicator} />
      </View>

      {/* Title and text container */}
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        {/* Title container */}
        <View>
          <Text style={style.title}>Perfect Your Journey</Text>
          <Text style={style.title}>With Us</Text>
        </View>

        {/* Text container */}
        <View style={{ marginTop: 10, marginBottom: 60 }}>
          <Text style={style.textStyle}>
            Find the things you need wherever you are.
          </Text>
          <Text style={style.textStyle}>We are always ready to help you.</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
    header: {
      paddingTop: 40,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    image: {
      height: 300,
      width: "100%",
      borderBottomLeftRadius: 100,
    },
    indicatorContainer: {
      height: 20,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    indicator: {
      height: 3,
      width: 30,
      backgroundColor: COLORS.dark,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    title: { fontSize: 32, fontWeight: "bold", color: "#534390" },
    textStyle: { fontSize: 16, color: "grey", opacity: 0.8 },
  });
