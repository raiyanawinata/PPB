import React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, Image, TouchableOpacity } from "react-native";
import recommendation from "../Recommendation";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const RekomendasiKamar = () => {
  const navigation = useNavigation();

  const Card = ({ recom }) => {
    return (
      <View style={styles.box2}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image source={recom.image} style={styles.imagebedroom} />
          <Image source={recom.image2} style={styles.imagebedroom} />
          <Image source={recom.image3} style={styles.imagebedroom} />
        </ScrollView>

        <View style={styles.box3}>
          <View style={{ marginLeft: "6%" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#534390",
                marginBottom: "5%",
              }}
            >
              {recom.name}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Icon name="star" size={16} style={{ color: "gold" }} />
              <Text style={{ marginLeft: "3%", color: "black" }}>
                {recom.star}
              </Text>
              <Text style={{ marginLeft: "3%", color: "black" }}>
                {recom.review}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: "2%" }}>
              <Icon name="place" size={16} style={{ color: "red" }} />
              <Text style={{ marginLeft: "3%", color: "black" }}>
                {recom.location}
              </Text>
            </View>
          </View>
          <View style={{ marginHorizontal: "2%" }}>
            <Text
              style={{
                textAlign: "right",
                color: "black",
                fontSize: 18,
                marginTop: "2%",
                fontWeight: "bold",
                marginRight: "11%",
              }}
            >
              {recom.price}
            </Text>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("BedroomInformation")}
              >
                <View style={styles.btn}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 17,
                      color: "#fff",
                    }}
                  >
                    View
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
      <FlatList
        contentContainerStyle={{}}
        data={recommendation}
        renderItem={({ item }) => <Card recom={item} />}
      />
  );
};

export default RekomendasiKamar;

const styles = StyleSheet.create({
  box2: {
    backgroundColor: "#fff",
    marginHorizontal: "5%",
    borderRadius: 10,
    marginBottom: "6%",
    shadowColor: "#534390",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 9.27,

    elevation: 10,
  },
  box3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "8%",
    marginTop: "-2%",
  },
  imagebedroom: {
    width: 315,
    height: 150,
    margin: 20,
    borderRadius: 5,
  },
  btn: {
    height: 40,
    width: 120,
    backgroundColor: "#534390",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "4%",
    marginTop: "10%",
    paddingHorizontal: "10%",
  },
});
