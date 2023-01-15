import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  return (
    <ImageBackground
      source={require("../../assets/Dubai/Dashboard/bggetstarted1.jpg")}
      style={{ height: 215 }}
    >
      <View style={styles.header}>
        <Icon name="info-outline" size={28} style={{ color: "#fff" }} />
        <Icon name="history" size={28} style={{ color: "#fff" }} />
      </View>

      <View style={styles.subheader}>
        <Text style={styles.headerTitle}>Explore the</Text>
        <Text style={styles.headerTitle}>beautiful places</Text>
        <View style={{ marginTop: "5%" }}>
          <View style={styles.inputContainer}>
            <Icon
              name="search"
              size={28}
              style={{ marginLeft: "2%", color: "#534390" }}
            />
            <TextInput
              placeholder="Search..."
              style={{ color: "#534390", marginLeft: "3%" }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: "10%",
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subheader: {
    paddingHorizontal: "5%",
    marginTop: "8%",
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    position: "absolute",
    flexDirection: "row",
    paddingHorizontal: "2%",
    alignItems: "center",
    elevation: 12,
  },
});
