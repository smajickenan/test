import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PhoneInputScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Enter your mobile number</Text>

      <View style={styles.phoneInputContainer}>
        <TouchableOpacity style={styles.countrySelector}>
          <Image
            source={{ uri: "https://flagcdn.com/w40/gb.png" }}
            style={styles.flagIcon}
          />
          <Text style={styles.countryCode}>▼</Text>
        </TouchableOpacity>

        <View style={styles.numberInputWrapper}>
          <Text style={styles.prefix}>+44</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('PasswordInput' as never)}
      >
        <Text style={styles.nextButtonText}>Next</Text>
        <Text style={styles.arrowIcon}>→</Text>
      </TouchableOpacity>

      <Text style={styles.disclaimer}>
        By proceeding, you consent to get calls, Whatsapp or SMS messages,
        including by automated means, from Uber and its affiliates to the
        number provided.
      </Text>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Image style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.bottomIndicator} />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "white",
  padding: 24,
  justifyContent: "space-between",
},
content: { flex: 1, paddingTop: 40 },
title: { fontSize: 24, fontWeight: "bold", marginBottom: 24 },
phoneInputContainer: { flexDirection: "row", marginBottom: 24 },
countrySelector: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#f2f2f2",
  padding: 12,
  borderRadius: 8,
  marginRight: 10,
  width: 90,
  justifyContent: "space-between",
},
flagIcon: { width: 28, height: 20 },
countryCode: { fontSize: 16 },
numberInputWrapper: {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#f2f2f2",
  padding: 12,
  borderRadius: 8,
},
prefix: { marginRight: 8, color: "#000", fontSize: 16 },
input: { flex: 1, fontSize: 16, color: "#000" },
nextButton: {
  backgroundColor: "#000",
  borderRadius: 8,
  padding: 16,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
},
nextButtonText: { color: "#fff", fontSize: 16, fontWeight: "500" },
arrowIcon: { color: "#fff", fontSize: 22 },
disclaimer: { color: "#777", fontSize: 14, lineHeight: 20, marginBottom: 24 },
dividerContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 24,
},
divider: { flex: 1, height: 1, backgroundColor: "#e0e0e0" },
dividerText: { marginHorizontal: 10, color: "#777" },
googleButton: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
},
googleIcon: { width: 24, height: 24, marginRight: 12 },
googleButtonText: { fontSize: 16, fontWeight: "500" },
bottomIndicator: {
  alignSelf: "center",
  width: 120,
  height: 5,
  backgroundColor: "#000",
  borderRadius: 100,
  marginBottom: 8,
},
});

