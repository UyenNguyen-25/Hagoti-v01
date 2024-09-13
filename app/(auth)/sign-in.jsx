import { Text, SafeAreaView, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import FormFields from '../../components/FormFields'
import { Link, router } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import auth from "@react-native-firebase/auth"
import { firebase } from '@react-native-firebase/firestore'

const { height } = Dimensions.get('window');

export default function SignIn() {
    const [form, setForm] = useState({
        phoneNumber: "",
        password: ""
    })
    const [confirm, setConfirm] = useState(null)

    const linear = useSharedValue(height);

    const animatedChanged = useAnimatedStyle(() => ({
        transform: [{ translateY: linear.value }],
    }));

    useEffect(() => {
        linear.value =
            withTiming(0, {
                duration: 1000,
                easing: Easing.linear,
            })
    }, [linear]);

    const signInWithPhoneNumber = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber(form.phoneNumber)
            setConfirm(confirmation)
        } catch (error) {
            console.log("Error sending code: ", error);

        }
    }

    const confirmCode = async () => {
        try {
            const userCredential = await confirm.confirm(code)
            const user = userCredential.user

            const userDocument = await firebase.firestore().collection("user").doc(user.uid).get()
            if (userDocument.exists) {
                router.push("/home")
            } else { router.push("/sign-up") }
        } catch (error) {
            console.log("Invalid code", error);

        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: Colors.SECONDARY, height: "100%" }}>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "flex-end" }}>
                <Animated.View style={[styles.containerStyles, animatedChanged]}>
                    <Text style={styles.headerText}> ĐĂNG NHẬP TÀI KHOẢN </Text>
                    <FormFields title={"SỐ ĐIỆN THOẠI"} value={form.phoneNumber} handleChangeText={(e) => setForm({ ...form, phoneNumber: e })} keyboardType="phone-number" />
                    <FormFields title={"MẬT KHẨU"} value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} keyboardType="password" />
                    <Text style={{ ...styles.customText, width: "100%", textAlign: "right", marginTop: -15 }}>
                        <Link href={'/forgot-password'} >Quên mật khẩu?</Link>
                    </Text>
                    <CustomButton title={"Tiếp tục"} containerStyles={styles.btn} textStyles={styles.btnText} handlePress={() => router.push('/home')} />
                    <Text style={{ ...styles.customText }}>Bạn chưa có tài khoản?</Text>
                    <Text style={{ ...styles.customText, color: Colors.PRIMARY, marginTop: -22, fontWeight: "700" }}><Link href={'/sign-up'} >Đăng kí liền cho nóng</Link></Text>
                </Animated.View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
        height: "58%",
        backgroundColor: "#FFF",
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        elevation: 2,
        shadowOpacity: 1,
        padding: 40,
        alignItems: "center",
        gap: 30
    },
    headerText: {
        fontFamily: "inter-bold",
        fontSize: 20,
        color: Colors.PRIMARY,
        letterSpacing: 3
    },
    customText: { fontFamily: "inter", letterSpacing: 2, fontSize: 14 },
    btn: {
        width: "100%",
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
    },
    btnText: {
        color: "#FFF",
        fontSize: 18,
        fontFamily: "inter-bold",
        textAlign: "center",
        letterSpacing: 2,
        paddingVertical: 10
    }
})