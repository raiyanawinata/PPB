import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../../consts/colors";

import Header from "../../consts/YourTransaction/Header";
import TransactionDetail from "../../consts/YourTransaction/TransactionDetail";

class YourTransaction extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
          <Header />

          <View style={styles.box1}>
            <View>
              <Image
                source={require("../../assets/Dubai/QR2.png")}
                style={styles.qr}
              />
            </View>

            <Text style={styles.subtitle}>Succesful Transaction</Text>

            <TransactionDetail />
          </View>
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default YourTransaction;

const styles = StyleSheet.create({
  qr: {
    width: 200,
    height: 200,
    marginHorizontal: "22%",
    marginTop: "15%",
  },
  box1: {
    height: "70%",
    marginTop: "-15%",
    marginBottom: "5%",
    marginHorizontal: "5%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: "10%",
    shadowColor: "#534390",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 9.37,
    elevation: 10,
  },
  subtitle: {
    color: "#534390",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "10%",
    marginBottom: "3%",
  },
});
