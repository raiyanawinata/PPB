import { useState } from "react";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";

import COLORS from "../../consts/colors";
import Input from "../components/Input.js";
import Loader from "../components/Loader";
import { CheckBox } from "react-native-elements";
import DatePicker from "react-native-datepicker";
import Date from "../components/Date";

const Form = ({ navigation }) => {

  const [checked1, MySelf] = useState(false);
  const [checked2, Another] = useState(false);

  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    phone: "",
    checkin: "",
    checkout: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Please Input Your Email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please Input a Valid Email", "email");
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError("Please Input Your Full Name", "fullname");
      isValid = false;
    }

    if (!inputs.phone) {
      handleError("Please Input Your Phone Number", "phone");
      isValid = false;
    }

    // if (!inputs.checkin) {
    //   handleError("Please Input Check-In Date", "checkin");
    //   isValid = false;
    // }

    // if (!inputs.checkout) {
    //   handleError("Please Input Check-Out Date", "checkout");
    //   isValid = false;
    // }

    if (isValid) {
      // register();
      navigation.navigate("CheckOut");
    }
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: "10%", paddingHorizontal: "7%" }}
      >
        <Text
          style={{ color: COLORS.purple, fontSize: 30, fontWeight: "bold" }}
        >
          Registration Form
        </Text>
        <Text
          style={{ color: COLORS.greeen, fontSize: 18, marginVertical: "2%" }}
        >
          Your privacy is protected!
        </Text>
        <View style={{ marginTop: "10%", marginBottom: "5%" }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "fullname")}
            onFocus={() => handleError(null, "fullname")}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
          />

          <Input
            keyboardType="numeric"
            onChangeText={(text) => handleOnchange(text, "phone")}
            onFocus={() => handleError(null, "phone")}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone number"
            error={errors.phone}
          />

          {/* <Input
            keyboardType="numeric"
            onChangeText={(text) => handleOnchange(text, "checkin")}
            onFocus={() => handleError(null, "checkin")}
            iconName="calendar-today"
            label="Check-In"
            // placeholder="Enter your check-in"
            placeholder="dd-mm-yyyy"
            error={errors.checkin}
          />

          <Input
            keyboardType="numeric"
            onChangeText={(text) => handleOnchange(text, "checkout")}
            onFocus={() => handleError(null, "checkout")}
            iconName="calendar-today"
            label="Check-Out"
            // placeholder="Enter your check-out"
            placeholder="dd-mm-yyyy"
            error={errors.checkout}
          /> */}

          <Date
            mode="date"
            iconName="calendar-today"
            label="Check-In"
          />

          <Date
            mode="date"
            iconName="calendar-today"
            label="Check-Out"
          />

          <View style={{ marginBottom: "10%", paddingTop: "2%" }}>
            <CheckBox
              title="Book For MySelf"
              checked={checked1}
              onPress={() => MySelf(!checked1)}
            />

            <CheckBox
              title="Book For Another Person"
              checked={checked2}
              onPress={() => Another(!checked2)}
            />
          </View>

          <TouchableOpacity activeOpacity={0.8} onPress={validate}>
            <View style={style.btn}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Form;

const style = StyleSheet.create({
  btn: {
    height: 55,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#534390",
    borderRadius: 10,
  },
});
