import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoardScreen from "./src/views/screens/OnBoardScreen";
import Dashboard from "./src/views/screens/Dashboard";
import SignInScreen from "./src/views/screens/SignInScreen";
import SignUpScreen from "./src/views/screens/SignUpScreen";
import Facilities from "./src/views/screens/Fasilities";
import Bedroom from "./src/views/screens/Bedroom";
import BedroomInformation from "./src/views/screens/BedroomInformation";
import CheckOut from "./src/views/screens/CheckOut";
import Form from "./src/views/screens/Form";
import YourTransaction from "./src/views/screens/YourTransaction";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Facilities" component={Facilities} />
          <Stack.Screen name="Bedroom" component={Bedroom} />
          <Stack.Screen name="BedroomInformation" component={BedroomInformation}/>
          <Stack.Screen name="CheckOut" component={CheckOut} />
          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="YourTransaction" component={YourTransaction} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
