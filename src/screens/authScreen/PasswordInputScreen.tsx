import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function LoginScreen() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome back, John</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder={"Please enter your password"}
            placeholderTextColor="#A0A0A0"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>I've forgotten my password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer2}>
          <Text style={styles.buttonText}>I can't sign in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.navButton1}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.navigate("PhoneInput" as never)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("PhoneVerification" as never)}
        >
          <Text style={styles.buttonText}>Next</Text>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    paddingVertical: 12,
    width: 250,
    marginBottom: 15,
  },
  buttonContainer2: {
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    paddingVertical: 12,
    width: 150,
    marginBottom: 15,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    marginLeft: 10,
  },
  navigationContainer: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",

    zIndex: 1, // Add this to ensure it's on top of other elements
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
  nextButtonText: {
    fontSize: 18,
  },
});
