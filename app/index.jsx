import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

export default function LoginScreen() {

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{
        height: "100%",
        backgroundColor: Colors.SECONDARY,
      }}>
        <View
          style={{
            minHeight: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
          }}>
          <Text style={{ ...styles.customText, color: Colors.PRIMARY }}>
            Cám ơn bạn đã đồng hành cùng
          </Text>
          <Image source={require("../assets/images/HAGOTI.png")} resizeMode="contain" alt="Logo" />
          <CustomButton
            title={"HAVE A GOOD TIME"}
            containerStyles={styles.btn}
            textStyles={[styles.customText, styles.textBtn]}
            handlePress={() => router.push("/sign-in")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  customText: {
    fontFamily: "inter",
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 50,
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textBtn: {
    color: "#fff",
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
  }
});
