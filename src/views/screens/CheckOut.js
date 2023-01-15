import React, { Component } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import { ScrollView } from "react-native-gesture-handler";

import Header from "../../consts/Checkout/Header";
import FormPemesanan from "../../consts/Checkout/FormPemesanan";
import RingkasanPemesanan from "../../consts/Checkout/RingkasanPemesanan";
import Footer from "../../consts/Checkout/Footer";

class CheckOut extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
          <Header />

          <View style={style.detailsContainer}>
            <View style={style.iconContainer}>
              <Icon name="favorite" color={COLORS.purple} size={30} />
            </View>

            <FormPemesanan />
            <RingkasanPemesanan />
          </View>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CheckOut;

const style = StyleSheet.create({
  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    marginTop: "-43%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: "4%",
    paddingHorizontal: "5%",
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
});
