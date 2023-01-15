import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from "../../consts/colors";
import DatePicker from 'react-native-datepicker';


const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  // const [date, setDate] = useState("09-10-2021");
  const [date, setDate] = useState();
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}
        >
        <Icon
          name={iconName}
          style={{color: "#534390", fontSize: 22, marginRight: 10}}
        />
        <DatePicker
          style={style.datePickerStyle}
          date={date}
          // mode="date"
          // placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-2020"
          maxDate="01-01-2030"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 14,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        {/* <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: "black", flex: 1}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.darkBlue, fontSize: 22}}
          />
        )} */}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: "red", fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "#534390",
  },
  inputContainer: {
    height: 55,
    backgroundColor: "lavender",
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
  datePickerStyle: {
    width: '90%',
  },
});

export default Input;