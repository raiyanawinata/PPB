import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "../colors";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/* Button container */}
      <View style={{ marginTop: "27%"}}>
      <TouchableOpacity onPress={() => navigation.navigate("Facilities")}>
          <View style={style.btn}>
            <Text style={{ color: "white", fontSize: 20 }}>
              See Our Facilities
            </Text>
          </View>
        </TouchableOpacity>
        </View>

      <View style={{ flexDirection: "row", marginHorizontal: 15, marginTop: "3%" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingBottom: 20,
          }}
        >
          {/* button */}
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <View style={style.btn2}>
              <Text style={{ color: "#534390", fontSize: 20 }}>Home</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingBottom: 20,
          }}
        >
          {/* button */}
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <View style={style.btn2}>
              <Text style={{ color: "#534390", fontSize: 20 }}>Contact</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;

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
    btn: {
      height: 60,
      marginHorizontal: 20,
      backgroundColor: "#534390",
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    btn2: {
      height: 40,
      marginHorizontal: 5,
      backgroundColor: "lavender",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    title: { 
      fontSize: 32, 
      fontWeight: "bold", 
      color: "#534390" 
    },
    textStyle: { 
      fontSize: 16, 
      color: "grey", 
      opacity: 0.8 
    },
  });
