import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../consts/colors";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={style.footer}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.greeen,
          }}
        >
          $750
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: COLORS.purple,
            marginLeft: "2%",
          }}
        >
          /PER DAY
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("YourTransaction")}
      >
        <View style={style.bookNowBtn}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Pay
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const style = StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: 100,
    backgroundColor: COLORS.purple,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: "#534390",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 9.27,

    elevation: 10,
  },
});
