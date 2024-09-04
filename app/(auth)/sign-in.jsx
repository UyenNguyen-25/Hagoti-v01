import { Text, SafeAreaView, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import FormFields from '../../components/FormFields'
import { Link, router } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import Animated, { Easing } from 'react-native-reanimated';

const { height } = Dimensions.get('window');

export default function SignIn() {
    const [form, setForm] = useState({
        phoneNumber: "",
        password: ""
    })

    // const translateY = new Animated.Value(0);

    // React.useEffect(() => {
    //     Animated.timing(translateY, {
    //         toValue: height - 100, // Chiều cao của hình vuông  
    //         duration: 2000,
    //         easing: Easing.linear,
    //         useNativeDriver: true,
    //     }).start();
    // }, [translateY]);

    return (
        <SafeAreaView style={{ backgroundColor: Colors.SECONDARY, height: "100%" }}>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "flex-end" }}>
                <Animated.View style={[styles.containerStyles,]}>
                    <Text style={styles.headerText}>ĐĂNG NHẬP TÀI KHOẢN</Text>
                    <FormFields title={"SỐ ĐIỆN THOẠI"} value={form.phoneNumber} handleChangeText={(e) => setForm({ ...form, phoneNumber: e })} keyboardType="phone-number" />
                    <FormFields title={"MẬT KHẨU"} value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} keyboardType="password" />
                    <Text style={{ ...styles.customText, width: "100%", textAlign: "right", marginTop: -10 }}>
                        <Link href={'/forgot-password'} >Quên mật khẩu?</Link>
                    </Text>
                    <CustomButton title={"Tiếp tục"} containerStyles={styles.btn} textStyles={styles.btnText} handlePress={() => router.push('/home')} />
                    <Text style={{ ...styles.customText }}>Bạn chưa có tài khoản?</Text>
                    <Text style={{ ...styles.customText, color: Colors.PRIMARY, marginTop: -10 }}><Link href={'/forgot-password'} >Đăng kí liền cho nóng</Link></Text>
                </Animated.View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
        minHeight: "55%",
        backgroundColor: "#FFF",
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        elevation: 2,
        shadowOpacity: 1,
        padding: 40,
        alignItems: "center",
        gap: 20
    },
    headerText: {
        fontFamily: "inter-bold",
        fontSize: 20,
        color: Colors.PRIMARY,
        letterSpacing: 3
    },
    customText: { fontFamily: "inter", letterSpacing: 2, fontSize: 13 },
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