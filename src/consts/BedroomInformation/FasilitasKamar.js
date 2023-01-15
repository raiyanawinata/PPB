import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

const FasilitasKamar = () => {
  return (
    <View>
      <View style={{ ...style.fasilitas, marginTop: "10%" }}>
        <Text style={{ fontSize: 23, fontWeight: "bold", color: "#534390" }}>
          Facilities
        </Text>
      </View>

      <View style={style.fasilitas}>
        {/* KIRI */}
        <View>
          <View style={style.facilitiesdetail}>
            <Icon name="wifi" style={{ color: "#022c3c" }} size={30} />
            <Text style={style.fasilitastitle}>WiFi</Text>
          </View>

          <View style={style.facilitiesdetail}>
            <Icon name="beach-access" style={{ color: "#022c3c" }} size={30} />
            <Text style={style.fasilitastitle}>Sea View</Text>
          </View>

          <View style={style.facilitiesdetail}>
            <Icon name="bathtub" style={{ color: "#022c3c" }} size={30} />
            <Text style={style.fasilitastitle}>Spa Bath</Text>
          </View>
        </View>

        {/* KANAN */}
        <View style={{ marginLeft: "8%" }}>
          <View style={style.facilitiesdetail}>
            <Icon name="lock" style={{ color: "#022c3c" }} size={30} />
            <Text style={style.fasilitastitle}>Private Room</Text>
          </View>

          <View style={style.facilitiesdetail}>
            <Icon2
              name="air-conditioner"
              style={{ color: "#022c3c" }}
              size={30}
            />
            <Text style={style.fasilitastitle}>Air Conditioner</Text>
          </View>

          <View style={style.facilitiesdetail}>
            <Icon name="king-bed" style={{ color: "#022c3c" }} size={30} />
            <Text style={style.fasilitastitle}>Extra Large Bed</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FasilitasKamar;

const style = StyleSheet.create({
  fasilitas: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
    marginTop: "5%",
  },

  facilitiesdetail: {
    flexDirection: "row",
    marginBottom: "2%",
    // marginBottom: "5%"
  },

  fasilitastitle: {
    marginLeft: "10%",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: "2%",
    color: "#000",
  },
});
