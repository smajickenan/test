import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import TabLayout from './(tabs)/_layout';  // Importuj TabLayout

export default function RootLayout() {

  return (
    <NavigationContainer>
      <TabLayout /> {/* Sada samo prikazuje TabLayout unutar NavigationContainer */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
