import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Keyboard } from "react-native";
import Input from "../../views/components/Input";
import { useNavigation } from "@react-navigation/native";

const FormSignUp = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = React.useState({
    email: "",
    username: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.username) {
      handleError("Please Input Your Username", "username");
      isValid = false;
    }

    if (!inputs.phone) {
      handleError("Please Input Your Phone Number", "phone");
      isValid = false;
    }

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
    <View style={{ marginTop: 40 }}>
      {/* <View>
        <Text style={style.textInputTittle}>Username</Text>
        <View style={style.inputContainer}>
          <Icon2 name="user" size={25} />
          <TextInput
            placeholder="Username"
            style={{ color: "black", marginLeft: 15, fontSize: 16 }}
          />
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={style.textInputTittle}>Phone Number</Text>
        <View style={style.inputContainer}>
          <Icon name="contacts" size={25} />
          <TextInput
            placeholder="Phone Number"
            secureTextEntry
            style={{ color: "black", marginLeft: 15, fontSize: 16 }}
          />
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={style.textInputTittle}>Email Address</Text>
        <View style={style.inputContainer}>
          <Icon name="mail-outline" size={25} />
          <TextInput
            placeholder="Email"
            style={{ color: "black", marginLeft: 15, fontSize: 16 }}
          />
        </View>
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
        onChangeText={(text) => handleOnchange(text, "username")}
        onFocus={() => handleError(null, "username")}
        iconName="account-outline"
        label="Username"
        placeholder="Enter your username"
        error={errors.username}
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

      <TouchableOpacity
        style={style.btnPrimary}
        activeOpacity={0.8}
        onPress={validate}
      >
        <View style={style.btn}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Sign Up
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
        <Text style={{ color: "grey" }}>Have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ color: "#534390", fontWeight: "bold", marginLeft: 5 }}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormSignUp;

const style = StyleSheet.create({
  btnPrimary: {
    backgroundColor: "#534390",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
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
