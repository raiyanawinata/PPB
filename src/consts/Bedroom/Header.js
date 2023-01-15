import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../colors";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../../assets/Dubai/Dashboard/bggetstarted1.jpg")}
      style={{ height: 235 }}
    >
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Facilities")}
        >
          <Icon name="home" size={28} color={COLORS.white} />
        </TouchableOpacity>
        <Icon name="history" size={28} color={COLORS.white} />
      </View>
      <Text style={styles.title}>Bedroom</Text>
      <Text style={styles.subtitle}>Find Your New Dream Jouney</Text>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    textAlign: "left",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: "8%",
    color: "#fff",
    marginLeft: "5%",
  },
  subtitle: {
    textAlign: "left",
    fontSize: 17,
    marginTop: "-0%",
    marginBottom: 10,
    color: "#fff",
    marginLeft: "5%",
    opacity: 0.8,
  },
  header: {
    paddingTop: "10%",
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
