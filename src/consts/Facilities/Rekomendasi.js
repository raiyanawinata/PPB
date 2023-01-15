import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Rekomendasi = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: "4%", marginTop: "2%" }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginTop: "2%",
          marginLeft: "2%",
          textAlign: "left",
          marginBottom: "2%",
          color: "#534390",
          paddingHorizontal: 20,
        }}
      >
        Our Recommendation
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
          <View style={styles.btn3}>
            {/* <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  Promo 1
                </Text> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Facilities")}
        >
          <View style={styles.btn3}>
            {/* <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  Promo 2
                </Text> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Facilities")}
        >
          <View style={styles.btn3}>
            {/* <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  Promo 3
                </Text> */}
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Rekomendasi;

const styles = StyleSheet.create({
  btn3: {
    height: 80,
    width: 170,
    backgroundColor: "lavender",
    margin: 7,
    borderRadius: 10,
  },
});
