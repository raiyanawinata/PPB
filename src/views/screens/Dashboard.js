import React, { Component } from "react";
import { StatusBar, SafeAreaView } from "react-native";
import COLORS from "../../consts/colors";

import Header from "../../consts/Dashboard/Header";
import Footer from "../../consts/Dashboard/Footer";

class Dashboard extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar translucent backgroundColor={COLORS.tranparent} />
        <Header />
        <Footer />
      </SafeAreaView>
    );
  }
}

export default Dashboard;
