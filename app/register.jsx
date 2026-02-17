import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { styles } from "../styles/styles";
import { loginStyles } from "../styles/loginstyles";
import { regStyles } from "../styles/regstyles";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold,} from "@expo-google-fonts/inter";
import { Image } from "react-native";
import React, { useState } from "react";

export default function Register() {
  const [text, setText] = useState('');
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <LinearGradient
      colors={["#FFFFFF", "#7FAFD4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }} >

      <SafeAreaView style={styles.safeArea}>

        {/* Back Btn  */}
        <TouchableOpacity style={regStyles.topLeftButton} onPress={() => router.push("/")}>
           <Image
            source={require("../assets/icons/ic_left_arrow.png")}
            style={{ marginTop: 15, width: 30, height: 30 }}
            />
        </TouchableOpacity>

        {/* Header/Title Text */}
        <View style={regStyles.regHeader}>
          <View>
            <Text style={regStyles.titleText}>Create your free</Text>
            <Text style={regStyles.backText}>     Account Today!</Text>
          </View>
        </View>

        {/* Input Boxes */}
        <View style={regStyles.inputContainer}>
           <View>
            <TextInput
                style = {regStyles.inputText}
                onChangeText={newText => setText(newText)}
                placeholder="Enter Username: "
                placeholderTextColor="rgba(120,120,120,0.4)"
            />
           </View>
           <View>
            <TextInput
                style = {regStyles.inputText}
                onChangeText={newText => setText(newText)}
                secureTextEntry={true} 
                placeholder="Enter Password: "
                placeholderTextColor="rgba(120,120,120,0.4)"
            />
           </View>
           <View>
            <TextInput
                style = {regStyles.inputText}
                onChangeText={newText => setText(newText)}
                secureTextEntry={true} 
                placeholder="Re-enter Password: "
                placeholderTextColor="rgba(120,120,120,0.4)"
            />
           </View>
        </View>

        {/* Login btn */}
        <View style={regStyles.buttonContainer}>
          <TouchableOpacity style={regStyles.regButton}>
            <Text style={regStyles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}