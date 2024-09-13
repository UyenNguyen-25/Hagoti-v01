import { Text, SafeAreaView, ScrollView, StyleSheet, View, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import FormFields from '../../components/FormFields'
import { Link, router } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import Checkbox from 'expo-checkbox'

const formError = {
    username: "Vui lòng điền đầy đủ thông tin",
    phoneNumber: "Vui lòng nhập số điện thoại của bạn",
    password: "Vui lòng nhập mật khẩu của bạn",
    confirmPass: "Không khớp với mật khẩu phía trên",
    gender: "Vui lòng chọn giới tính",
    dob: "Vui lòng nhập ngày sinh của bạn",
}

export default function SignIn() {
    const [form, setForm] = useState({
        username: "",
        phoneNumber: "",
        password: "",
        confirmPass: "",
        gender: -1,
        dob: "",
        isChecked: false,
    })

    const [isLoading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const onCreateAccount = () => {
        try {
            setLoading(true)
            setIsError(false)
            console.log('====================================');
            console.log("Success");
            console.log('====================================');
        } catch (error) {
            setLoading(false)
            console.log('================== onCreateAccount Function ==================');
            console.log(error);
            console.log('====================================');
        }
    }

    useEffect(() => {
        if (!form.username || !form.phoneNumber || !form.password || !form.confirmPass || form.gender < 0 || !form.dob || !form.isChecked) {
            setIsError(true)
        } else setIsError(false)
    }, [form])

    return (
        <SafeAreaView style={{ height: "100%", flex: 1 }}>
            <ScrollView contentContainerStyle={{ justifyContent: "flex-start", ...styles.containerStyles }} scrollErrord>
                <Text style={styles.headerText}> ĐĂNG KÝ TÀI KHOẢN </Text>
                <Text style={{ ...styles.customText }}>Bạn đã có tài khoản? <Link href={'/sign-in'} style={{ color: Colors.PRIMARY, fontWeight: "900" }}>Đăng nhập</Link></Text>
                <FormFields title={"Tên của bạn"}
                    value={form.username}
                    handleChangeText={(e) => setForm({ ...form, username: e })}
                    autoComplete={"username"}
                    errorMsg={formError.username}
                />
                <FormFields title={"Số điện thoại"}
                    value={form.phoneNumber}
                    handleChangeText={(e) => setForm({ ...form, phoneNumber: e })}
                    autoComplete={"phone-number"}
                    errorMsg={formError.phoneNumber}
                />
                <FormFields title={"Mật khẩu"}
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    keyboardType="password"
                    errorMsg={formError.password}
                />
                <FormFields title={"Nhập lại mật khẩu"}
                    value={form.confirmPass}
                    handleChangeText={(e) => setForm({ ...form, confirmPass: e })}
                    keyboardType="password"
                    errorMsg={formError.confirmPass}
                />
                <FormFields title={"Giới tính"}
                    value={form.gender}
                    handleChangeText={(e) => setForm({ ...form, gender: e })}
                    keyboardType="gender"
                    errorMsg={formError.gender}
                />
                <FormFields title={"Ngày sinh của bạn"}
                    value={form.dob}
                    handleChangeText={(e) => setForm({ ...form, dob: e })}
                    errorMsg={formError.dob}
                />
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
                <CustomButton title={"Tiếp tục"} containerStyles={styles.btn} textStyles={styles.btnText} handlePress={() => onCreateAccount()} isLoading={isError} />
            </ScrollView>
            {isLoading && <><ActivityIndicator size={"large"} /><Text>Vui lòng đợi...</Text></>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
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