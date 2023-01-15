import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text} from "react-native";

import Header from "../../consts/Bedroom/Header";
import Kamar from "../../consts/Bedroom/Kamar";
import RekomendasiKamar from "../../consts/Bedroom/RekomendasiKamar";

class Bedroom extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        {/* <StatusBar translucent={true} backgroundColor={COLORS.dark} /> */}
        <Header />
        <Kamar />

        <Text style={styles.sectionTitle}>Room Recommendation</Text>
        <RekomendasiKamar />
      </SafeAreaView>
    );
  }
}

export default Bedroom;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: "7%",
    // marginLeft: 20,
    marginBottom: "5%",
    color: "#534390",
    textAlign: "center",
  },
});
