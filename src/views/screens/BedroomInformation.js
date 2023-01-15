import React, { Component } from "react";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import COLORS from "../../consts/colors";

import InformasiKamar from "../../consts/BedroomInformation/InformasiKamar";
import FasilitasKamar from "../../consts/BedroomInformation/FasilitasKamar";
import Button from "../../consts/BedroomInformation/Button";

class BedroomInformation extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

          {/* HEADER */}
          <ImageBackground
            style={{ flex: 0.7 }}
            source={require("../../assets/Dubai/Bedroom/Suite.jpg")}
          >
            <View style={style.header2}></View>
          </ImageBackground>

          <View
            style={{
              backgroundColor: "white",
              marginTop: "-45%",
              paddingHorizontal: "5%",
              paddingTop: "5%",
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              paddingBottom: "10%",
            }}
          >
            <InformasiKamar />
            <FasilitasKamar />
            <Button/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default BedroomInformation;

const style = StyleSheet.create({
  header2: {
    marginTop: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsContainer: {
    top: "5%",
    paddingVertical: "10%",
    flex: 0.3,
  },
});
