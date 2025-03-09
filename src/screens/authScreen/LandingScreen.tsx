import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import backgroundImage from "../../../assets/images/background1.jpeg";
import { useNavigation } from "expo-router";

const LandingScreen = () => {
    const navigation = useNavigation();
    
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0} // Dodatna prilagodba
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          {/* Slika pozadine */}
          <Image source={backgroundImage} style={styles.image} />

          {/* Sadržaj */}
          <View style={styles.content}>
            <Text style={styles.title}>
              Use your Uber account to get started
            </Text>

            {/* Input za broj telefona */}
            <View style={styles.inputContainer}>
              <Image
                source={{ uri: "https://flagcdn.com/w40/gb.png" }}
                style={styles.flag}
              />
              <Text style={styles.countryCode}>+44</Text>
              <TextInput
                placeholder="232 188 7651"
                style={styles.input}
                keyboardType="phone-pad"
                editable={true} 
                onPress={() => navigation.navigate("PhoneInput" as never)}
                onBlur={() => console.log("Input blurred")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  scrollContainer: {
    flexGrow: 1, 
  },
  image: {
    width: "100%",
    height: "75%",
    resizeMode: "cover",
    
  },
  content: {
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default LandingScreen;
