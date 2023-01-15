import React from 'react';
import { Table, Rows } from "react-native-table-component";

const CONTENT = {
    tableData: [
      ["Customer Name", "JENO GANTENK"],
      ["Contact", "12345"],
      ["Check-In", "Sel, 14 Jun 2022"],
      ["", "(14:00)"],
      ["Check-Out", "Rab, 15 Jun 2022"],
      ["", "(14:00)"],
      ["Tax", "$75"],
      ["", ""],
      ["Total", "$825"],
    ],
  };

const TransactionDetail = () => {
    return (
          <Table style={{ marginTop: "5%", marginHorizontal: "10%" }}>
            <Rows
              data={CONTENT.tableData}
              style={{ height: 28, }}
              textStyle={{ fontSize: 15, fontWeight: "bold", color: "black" }}
            />
          </Table>
    );
}

export default TransactionDetail;