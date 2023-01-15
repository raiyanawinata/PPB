import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
} from "react-native";

import Button from "../../consts/OnBoard/Button";

class OnBoardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ImageBackground
          style={{ flex: 1, width: 600 }}
          source={require("../../assets/Dubai/bggetstarted.jpg")}
        >
          <View style={style.details}>
            <Text style={{ color: "#fff", fontSize: 40, fontWeight: "bold" }}>
              Discover
            </Text>
            <Text style={{ color: "#fff", fontSize: 40, fontWeight: "bold" }}>
              World With Us
            </Text>
            <Button />
          </View>
        </ImageBackground>


      </View>
    );
  }
}

export default OnBoardScreen;

const style = StyleSheet.create({
  details: {
    height: "50%",
    bottom: 30,
    position: "absolute",
    marginLeft: 20,
  },
});
