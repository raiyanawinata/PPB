import React, { Component } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../../consts/colors";

import Header from "../../consts/Facilities/Header";
import Fasilitas from "../../consts/Facilities/Fasilitas";
import Promo from "../../consts/Facilities/Promo";
import Rekomendasi from "../../consts/Facilities/Rekomendasi";
import Berita from "../../consts/Facilities/Berita";

class Fasilities extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <Fasilitas />
          <Promo />
          <Rekomendasi />
          <Berita />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Fasilities;