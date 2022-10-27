/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  Text,
  View,
} from 'react-native';
import LoginScreen from './src/Screens/Components/LoginScreen';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from './src/Screens/Components/RegisterScreen';
import UsersList from './src/Screens/Components/UsersList';
import DetailsScreen from './src/Screens/DetailsScreen';

const Stack = createStackNavigator();
 
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="RegisterScreen">
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'LoginScreen', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
          //UsersList
        />
         <Stack.Screen
          name="UsersList"
          component={UsersList}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
          //UsersList
        />
        
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
          //UsersList
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
