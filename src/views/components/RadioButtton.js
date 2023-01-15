import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ColorPropType,
} from "react-native";
import COLORS from "../../consts/colors";
export default class RadioButton extends Component {
  state = {
    value: null,
  };
  render() {
    const { PROP } = this.props;
    const { value } = this.state;
    return (
      <View style={styles.pay}>
        <Text
          style={{
            paddingBottom: "3%",
            marginHorizontal: "5%",
            paddingTop: "3%",
            fontSize: 20,
            fontWeight: "bold",
            color: "#534390",
          }}
        >
          Payment
        </Text>
        {PROP.map((res) => {
          return (
            <View key={res.key} style={styles.container}>
              <Text style={styles.radioText}>{res.text}</Text>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                  this.setState({
                    value: res.key,
                  });
                }}
              >
                {value === res.key && <View style={styles.selectedRb} />}
              </TouchableOpacity>
            </View>
          );
        })}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            paddingHorizontal: "4%",
            color: "#534390",
          }}
        >
          {" "}
          Selected: {this.state.value}{" "}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  pay: {
    width: "100%",
    marginTop: "6%",
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: 60,
    shadowColor: "#534390",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.67,
    shadowRadius: 9.27,

    elevation: 10,
  },

  container: {
    marginBottom: "3%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioText: {
    paddingHorizontal: "5%",
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  radioCircle: {
    marginHorizontal: "5%",
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#3740ff",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "purple",
  },
  result: {
    color: "purple",
    backgroundColor: "pink",
  },
});
