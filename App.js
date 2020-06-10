import Explain1 from "./Components/Explain/Explain_1";
import Explain2 from "./Components/Explain/Explain_2";
import Explain3 from "./Components/Explain/Explain_3";
import Home from "./Components/Home/Home";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./Components/Explain/Start";
import Signin from "./Components/User/Signin";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Explain1" component={Explain1} />
      <Stack.Screen name="Explain2" component={Explain2} />
      <Stack.Screen name="Explain3" component={Explain3} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}

export default function App(props) {
  return (
    <NavigationContainer>
      <MyStack props={props} />
    </NavigationContainer>
  );
}
