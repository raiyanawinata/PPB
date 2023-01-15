import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Input from "../../views/components/Input";
import { useNavigation } from "@react-navigation/native";

const FormSignIn = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = React.useState({
    phone: "",
    password: "",
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

    if (!inputs.password) {
      handleError("Please Input Your Password", "password");
      isValid = false;
    }

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
    <View style={{ marginTop: 50 }}>
      {/* <Text style={style.textInputTittle}>Email Address</Text>
      <View style={style.inputContainer}>
        <Icon name="mail-outline" size={25} />
        <TextInput
          placeholder="Email"
          style={{ color: "black", marginLeft: 15, fontSize: 16 }}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={style.textInputTittle}>Password</Text>
        <View style={style.inputContainer}>
          <Icon name="lock-outline" size={25} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={{ color: "black", marginLeft: 15, fontSize: 16 }}
          />
        </View>
      </View> */}
      <Input
        onChangeText={(text) => handleOnchange(text, "email")}
        onFocus={() => handleError(null, "email")}
        iconName="email-outline"
        label="Email"
        placeholder="Enter your email address"
        error={errors.email}
      />

      <Input
        onChangeText={(text) => handleOnchange(text, "password")}
        onFocus={() => handleError(null, "password")}
        iconName="lock-outline"
        label="Password"
        placeholder="Enter your password"
        error={errors.password}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text
          style={{
            color: "black",
            marginTop: -10,
            textDecorationLine: "underline",
          }}
        >
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.btnPrimary}
        activeOpacity={0.8}
        onPress={validate}
      >
        <View style={style.btn}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Sign In
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "grey" }}>Don`t have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ color: "#534390", fontWeight: "bold", marginLeft: 5 }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormSignIn;

const style = StyleSheet.create({
  btnPrimary: {
    backgroundColor: "#534390",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  // textInputTittle: {
  //   fontSize: 16,
  //   fontWeight: "bold",
  //   color: "#534390",
  // },
  // inputContainer: {
  //   height: 50,
  //   width: "100%",
  //   backgroundColor: "#fff",
  //   borderRadius: 5,
  //   flexDirection: "row",
  //   paddingHorizontal: 20,
  //   alignItems: "center",
  //   elevation: 5,
  //   marginTop: 10,
  // },
});
