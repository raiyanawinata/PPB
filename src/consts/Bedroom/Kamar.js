import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../colors";
import room from "../room";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("screen");

const Kamar = () => {
  const navigation = useNavigation();
  const Card = ({ room }) => {
    return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("BedroomInformation", room)}
        >
          <ImageBackground style={styles.cardImage} source={room.image}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                marginTop: "1%",
              }}
            >
              {room.name}
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon name="place" size={20} style={{ color: "red" }} />
                <Text
                  style={{ marginLeft: 3, color: "white", fontWeight: "bold" }}
                >
                  {room.location}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Icon name="star" size={20} style={{ color: "gold" }} />
                <Text
                  style={{ marginLeft: 3, color: "white", fontWeight: "bold" }}
                >
                  {room.star}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
    );
  };
  return (
    <View style={styles.box1}>
      <FlatList
        contentContainerStyle={{}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={room}
        renderItem={({ item }) => <Card room={item} />}
      />
    </View>
  );
};

export default Kamar;

const styles = StyleSheet.create({
  box1: {
    marginTop: "-3%",
    paddingLeft: "5%",
    paddingVertical: "7%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#022c3c",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 9.27,

    elevation: 10,
  },
  cardImage: {
    height: 120,
    width: width / 2.5,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
    shadowColor: "#022c3c",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 10.27,

    elevation: 10,
  },
});
