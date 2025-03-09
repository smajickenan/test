import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

export default function EmailVerification() {
  const [code, setCode] = useState(['5', '', '', '']);
  const navigation = useNavigation();



  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Enter the 4-digit code sent to you at: johndoe@email.com</Text>
      
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={[
              styles.codeInput, 
              digit ? styles.filledCodeInput : {}
            ]}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
           
          />
        ))}
      </View>
      <TouchableOpacity style={styles.textTipContainer}>
        <Text style={styles.textTip}>Tip: Make sure to check your inbox and spam folders</Text>
      </TouchableOpacity>
   
      <TouchableOpacity style={styles.passwordLoginButton}>
        <Text style={styles.passwordLoginButtonText}>Log in with password</Text>
      </TouchableOpacity>
      
     <View style={styles.navigationContainer}>
             <TouchableOpacity style={styles.navButton1}>
               <Ionicons
                 name="arrow-back"
                 size={24}
                 color="black"
                 onPress={() => navigation.navigate("PhoneVerification" as never)}
               />
             </TouchableOpacity>
     
             <TouchableOpacity
               style={styles.navButton}
               onPress={() => navigation.navigate("WelcomeScreen" as never)}
             >
               <Text style={styles.buttonText}>Next</Text>
               <Ionicons name="arrow-forward" size={24} color="black" />
             </TouchableOpacity>
           </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  titleText: {
    fontSize: 18,
    marginBottom: 30,
    color: 'black',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textTipContainer: {
   
   marginBottom: 20
  },
  textTip: {
  color: 'gray'
  },
  codeInput: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
  filledCodeInput: {
    borderColor: 'blue',
  },
  noCodeButton: {
    marginBottom: 15,
    backgroundColor: '#F0F0F0',
    paddingVertical: 12,
    borderRadius: 20,
    width: 250
  },
  noCodeButtonText: {
   
    marginLeft: 10,
    color: 'gray',
    fontSize: 16,
   
  },
  passwordLoginButton: {
    width: 180,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingVertical: 12,
    marginBottom: 15,
  },
  passwordLoginButtonText: {
    color: 'black',
    fontSize: 16,
  marginLeft: 10
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  backButton: {
    padding: 10,
  },
  nextButton: {
    padding: 10,
  },
  nextButtonText: {
    fontSize: 18,
    color: 'black',
  },
  navButton1: {
    padding: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
  },
  navButton: {
    padding: 10,
    flexDirection: "row", // This is the key change
    alignItems: "center", // Vertically center icon and text
    backgroundColor: "#F0F0F0",
    color: "#9ca3af",
    borderRadius: 25,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    marginLeft: 10,
  },
});