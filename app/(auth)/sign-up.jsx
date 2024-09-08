import { Text, SafeAreaView, ScrollView, StyleSheet, View, Alert, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import FormFields from '../../components/FormFields'
import { Link, router, Stack } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import auth from "@react-native-firebase/auth"
import Checkbox from 'expo-checkbox'

const { height } = Dimensions.get("window")

export default function SignIn() {
    const [form, setForm] = useState({
        username: "",
        phoneNumber: "",
        password: "",
        confirmPass: "",
        gender: 0,
        dob: "",
        isChecked: false,
    })
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const onCreateAccount = async (e) => {
        const phoneNumber = "+84" + form.phoneNumber.slice(1)

        if (phoneNumber.length > 8) {
            try {
                const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
                setConfirm(confirmation)
                console.log('====================================');
                console.log("Confirmation: ", confirmation);
                console.log('====================================');
                router.push("/OTP-code")
            } catch (error) {
                Alert.alert("Ối giời ơi", "Lỗi rồi kìa!!! Kiểm tra lại thông tin đăng ký đi")
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            }
        }
    }

    return (
        <SafeAreaView style={{ height: "100%", flex: 1 }}>
            <ScrollView contentContainerStyle={{ justifyContent: "flex-start", ...styles.containerStyles }} scrollEnabled>
                <Text style={styles.headerText}> ĐĂNG KÝ TÀI KHOẢN </Text>
                <Text style={{ ...styles.customText }}>Bạn đã có tài khoản? <Link href={'/sign-in'} style={{ color: Colors.PRIMARY, fontWeight: "900" }}>Đăng nhập</Link></Text>
                <FormFields title={"Tên của bạn"} value={form.username} handleChangeText={(e) => setForm({ ...form, username: e })} keyboardType="username" />
                <FormFields title={"Số điện thoại"} value={form.phoneNumber} handleChangeText={(e) => setForm({ ...form, phoneNumber: e })} keyboardType="phone-number" />
                <FormFields title={"Mật khẩu"} value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} keyboardType="password" />
                <FormFields title={"Nhập lại mật khẩu"} value={form.confirmPass} handleChangeText={(e) => setForm({ ...form, confirmPass: e })} keyboardType="password" />
                <FormFields title={"Giới tính"} value={form.gender} handleChangeText={(e) => setForm({ ...form, gender: e })} keyboardType="gender" />
                <FormFields title={"Ngầy sinh của bạn"} value={form.dob} handleChangeText={(e) => setForm({ ...form, dob: e })} keyboardType="dob" />
                <View style={{ flexDirection: "row", gap: 10, justifyContent: "flex-start", width: "100%" }}>
                    <Checkbox value={form.isChecked}
                        onValueChange={() => setForm({ ...form, isChecked: !form.isChecked })}
                        color={form.isChecked ? Colors.PRIMARY : undefined} />
                    <Text style={[styles.customText]}>Tôi đã đọc
                        <Link href={"/policies"}>
                            <Text style={[styles.customText, { color: Colors.PRIMARY, fontWeight: '800' }]}> Điều khoản </Text>
                        </Link>
                        và đồng ý </Text>
                </View>
                <CustomButton title={"Tiếp tục"} containerStyles={styles.btn} textStyles={styles.btnText} handlePress={onCreateAccount} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
        height: height,
        backgroundColor: "#FFF",
        padding: 40,
        alignItems: "center",
        justifyContent: "space-between",
        rowGap: 20
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
        paddingVertical: 10,
    }
})