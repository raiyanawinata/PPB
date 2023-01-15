import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../../consts/colors";

import TransactionDetail from "../../consts/YourTransaction/TransactionDetail";

const Header = () => {
  return (
    <ImageBackground
      style={{ flex: 0.7, height: 285 }}
      source={require("../../assets/Dubai/bgyt.png")}
    >
      <View style={styles.header}></View>

      <View style={styles.imageDetails}>
        <Text
          style={{
            width: "70%",
            fontSize: 40,
            fontWeight: "bold",
            color: COLORS.white,
            marginBottom: 40,
          }}
        >
          Your Transaction
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageDetails: {
    padding: "6%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
});
