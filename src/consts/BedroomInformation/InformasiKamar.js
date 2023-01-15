import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const InformasiKamar = () => {
  return (
    <View>
      <View style={style.row2}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#534390" }}>
          Suite Room
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#534390",
            marginTop: 5,
          }}
        >
          $750/Day
        </Text>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", marginHorizontal: "3%" }}>
            <View style={{ flexDirection: "row", marginHorizontal: "5%" }}>
              <Icon name="star" size={20} style={{ color: "gold" }} />
              <Icon name="star" size={20} style={{ color: "gold" }} />
              <Icon name="star" size={20} style={{ color: "gold" }} />
              <Icon name="star" size={20} style={{ color: "gold" }} />
              <Icon name="star" size={20} style={{ color: "gold" }} />
            </View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                marginLeft: "1%",
                color: "#022C3C",
              }}
            >
              5.0
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "#022C3C",
              marginHorizontal: "5%",
              fontWeight: "bold",
            }}
          >
            122k reviews
          </Text>
        </View>
        <View style={style.row}>
          <Icon name="place" style={{ color: "#022C3C" }} size={20} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#022C3C",
              marginHorizontal: "1%",
            }}
          >
            33th Floor
          </Text>
        </View>
      </View>

      <View style={style.boxx}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Information
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#fff",
            marginTop: "2%",
            textAlign: "justify",
          }}
        >
          Guests may arrive at the property by chauffeur - driven fleets of
          Rolls - Royce's or alternatively by a dedicated helicopter transfer
          service.
        </Text>
      </View>
    </View>
  );
};

export default InformasiKamar;

const style = StyleSheet.create({
  boxx: {
    marginTop: "5%",
    // flexDirection: 'row',
    justifyContent: "space-between",
    backgroundColor: "#534390",
    borderRadius: 10,
    marginHorizontal: "3%",
    padding: "5%",
    shadowColor: "#534390",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 9.27,
    elevation: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: "2%",
    margin: "5%",
    marginHorizontal: "5%",
  },

  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "2%",
    marginTop: "2%",
    margin: "5%",
    marginHorizontal: "5%",
  },
});
