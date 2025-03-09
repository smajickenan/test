import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '@/src/screens/authScreen/LandingScreen';
import PhoneInputScreen from '@/src/screens/authScreen/PhoneInputScreen';
import PasswordInputScreen from '@/src/screens/authScreen/PasswordInputScreen';
import PhoneVerificationScreen from '@/src/screens/authScreen/PhoneVerificationScreen';
import EmailVerification from '@/src/screens/authScreen/EmailVerificationScreen';
import WelcomeScreen from '@/src/screens/WelcomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingScreen"
        screenOptions={{ headerShown: false }} // Set headerShown to false globally
      >
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="PhoneInput" component={PhoneInputScreen} />
        <Stack.Screen name="PasswordInput" component={PasswordInputScreen} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} />
        <Stack.Screen name="EmailVerification" component={EmailVerification} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}
