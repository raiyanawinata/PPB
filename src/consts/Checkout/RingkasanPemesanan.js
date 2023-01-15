import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Table, Rows } from "react-native-table-component";

const CONTENT = {
  tableData: [
    ["Detail Pemesanan", ""],
    ["Check-In", "Sel, 14 Jun 2022"],
    ["", "(14:00)"],
    ["Check-Out", "Rab, 15 Jun 2022"],
    ["", "(14.00)"],
    ["(1x)", "Executive Room"],
    ["TOTAL", "$750"],
  ],
};

const RingkasanPemesanan = () => {
  return (
    <View>
      <View style={style.box1}>
        <Table borderStyle={{ borderWidth: 0 }}>
          <Rows
            data={CONTENT.tableData}
            style={{ height: 25, marginHorizontal: "5%" }}
            textStyle={{fontSize: 16, color: "#fff", fontWeight: "bold",}}
          />
        </Table>
      </View>
      <View style={style.box1}>
        <Text
          style={{
            fontSize: 16,
            color: "#fff",
            fontWeight: "bold",
            margin: "2%",
            textAlign: "justify",
          }}
        >
          WAJIB BACA SEBELUM CHECK-IN: Dengan situasi Covid-19, pastikan
          kebijakan pembatalan ini sesuai kebutuhan anda.
        </Text>
      </View>
    </View>
  );
};

export default RingkasanPemesanan;

const style = StyleSheet.create({
  box1: {
    width: "100%",
    marginTop: "10%",
    justifyContent: "space-between",
    backgroundColor: "#534390",
    borderRadius: 10,
    padding: "3%",
    shadowColor: "#534390",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 9.27,

    elevation: 10,
  },
});
