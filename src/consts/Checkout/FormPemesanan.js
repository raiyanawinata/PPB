import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import RadioButton from "../../views/components/RadioButtton";
import { useNavigation } from "@react-navigation/native";

const PROP = [
  {
    key: "OVO",
    text: "OVO",
  },
  {
    key: "Dana",
    text: "Dana",
  },
  {
    key: "Mobile Banking",
    text: "Mobile Banking",
  },
];

const FormPemesanan = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ marginTop: "10%" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Form")}
        >
          <View style={style.btn}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: "5%",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 16,
                  paddingHorizontal: "1%",
                }}
              >
                Isi Data Pemesanan
              </Text>
              <Icon name="add" size={28} color={COLORS.white} />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={style.container}>
        <RadioButton PROP={PROP} />
      </View>
    </View>
  );
};

export default FormPemesanan;

const style = StyleSheet.create({
  container: {
    marginVertical: "5%",
  },
  btn: {
    height: 55,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#534390",
    borderRadius: 10,
  },
});