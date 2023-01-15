import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Fasilitas = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "10%",
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Bedroom")}
        >
          <View style={styles.btn}>
            <Image
              source={require("../../assets/Dubai/Dashboard/bedroom.jpg")}
              style={styles.ImageFacilities}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#534390",
            }}
          >
            Bedroom
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Facilities")}
        >
          <View style={styles.btn}>
            <Image
              source={require("../../assets/Dubai/Dashboard/ballroom.jpg")}
              style={styles.ImageFacilities}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#534390",
            }}
          >
            Ballroom
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Facilities")}
        >
          <View style={styles.btn}>
            <Image
              source={require("../../assets/Dubai/Dashboard/pool.jpg")}
              style={styles.ImageFacilities}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#534390",
            }}
          >
            Pool
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Facilities")}
        >
          <View style={styles.btn}>
            <Image
              source={require("../../assets/Dubai/Dashboard/restaurant.jpg")}
              style={styles.ImageFacilities}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#534390",
            }}
          >
            Restaurant
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Fasilitas;

const styles = StyleSheet.create({
  ImageFacilities: {
    height: "100%",
    width: "100%",
    margin: 0,
    borderRadius: 25,
  },
  btn: {
    height: 100,
    width: 100,
    backgroundColor: "#534390",
    margin: 10,
    borderRadius: 25,
  },
});
