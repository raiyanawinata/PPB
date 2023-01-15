import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Promo = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{ backgroundColor: "#ffff", paddingTop: "4%", marginTop: "2%" }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginTop: "2%",
          marginLeft: "4%",
          marginBottom: "2%",
          color: "#534390",
          paddingHorizontal: "3%",
        }}
      >
        Promos and Offers Just For You!
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: 20 }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Facilities")}
        >
          <View style={styles.btn1}>
            {/* <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  Promo 1
                </Text> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Facilities")}
        >
          <View style={styles.btn1}>
            {/* <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  Promo 2
                </Text> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Facilities")}
        >
          <View style={styles.btn1}>
            {/* <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  Promo 3
                </Text> */}
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Facilities")}
        >
          <View style={{ ...styles.btn2, justifyContent: "center" }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              See More Promos
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Promo;

const styles = StyleSheet.create({
  btn1: {
    height: 120,
    width: 340,
    backgroundColor: "lavender",
    margin: 5,
    borderRadius: 10,
    shadowColor: "#022c3c",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 9.27,
    elevation: 10,
  },
  btn2: {
    height: 40,
    backgroundColor: "#534390",
    margin: 5,
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
