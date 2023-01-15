import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Berita = () => {
  return (
    <View style={{ paddingTop: "4%", marginTop: "2%" }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginTop: "2%",
          // marginLeft: 20,
          textAlign: "center",
          marginBottom: "2%",
          color: "#534390",
          paddingHorizontal: 20,
        }}
      >
        What's New?
      </Text>
      <View>
        <View style={styles.foother}>
          <View style={styles.card}>
            <Text style={styles.detail1}>Update 1</Text>
            <Text
              style={{
                ...styles.detail1,
                fontWeight: "normal",
                opacity: 0.5,
              }}
            >
              10/05/2022
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.detail2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <View style={styles.cardimages}></View>
          </View>
        </View>

        <View style={styles.foother}>
          <View style={styles.card}>
            <Text style={styles.detail1}>Update 2</Text>
            <Text
              style={{
                ...styles.detail1,
                fontWeight: "normal",
                opacity: 0.5,
              }}
            >
              3/05/2022
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.detail2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <View style={styles.cardimages}></View>
          </View>
        </View>

        <View style={styles.foother}>
          <View style={styles.card}>
            <Text style={styles.detail1}>Update 3</Text>
            <Text
              style={{
                ...styles.detail1,
                fontWeight: "normal",
                opacity: 0.5,
              }}
            >
              18/03/2022
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.detail2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <View style={styles.cardimages}></View>
          </View>
        </View>

        <View style={styles.foother}>
          <View style={styles.card}>
            <Text style={styles.detail1}>Update 4</Text>
            <Text
              style={{
                ...styles.detail1,
                fontWeight: "normal",
                opacity: 0.5,
              }}
            >
              23/01/2022
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.detail2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <View style={styles.cardimages}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Berita;

const styles = StyleSheet.create({
  foother: {
    backgroundColor: "lavender",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 7,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardimages: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
  },
  detail1: {
    fontSize: 15,
    textAlign: "justify",
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  detail2: {
    fontSize: 15,
    textAlign: "justify",
    color: "black",
    marginBottom: 10,
    width: 225,
  },
});
