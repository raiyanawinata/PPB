import React, { Component } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from "react-native";
import COLORS from "../../consts/colors";
import { ScrollView } from "react-native-gesture-handler";

import FormSignIn from "../../consts/SignIn/FormSignIn";
import Footer from "../../consts/SignIn/Footer";

class SignInScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
          <ImageBackground
            style={{ flex: 0.7 }}
            source={require("../../assets/Dubai/signin.jpg")}
          >
            <View style={style.header}></View>
          </ImageBackground>

          <View style={style.detailsContainer}>
            <View style={{ marginTop: "2%" }}>
              <Text style={style.tittle}>Get In and Create</Text>
              <Text style={style.tittle}>Your Own Plan</Text>
            </View>

            <FormSignIn />
            {/* <Footer /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SignInScreen;

const style = StyleSheet.create({
  detailsContainer: {
    marginTop: "-50%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  header: {
    marginTop: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  tittle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#534390",
    textAlign: "center",
  },
});
