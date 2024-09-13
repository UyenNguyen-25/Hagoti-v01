import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'

export default function AuthLayout() {
    return (
        <>
            <Stack >
                <Stack.Screen name='sign-in' options={{ headerShown: false }} />
                <Stack.Screen name='sign-up' options={{
                    title: "",
                    headerBackTitle: "",
                    headerTitleStyle: [styles.headerText],
                    headerLeft: () => (
                        <TouchableOpacity onPress={router.back}>
                            <Ionicons name="arrow-back" size={26} color={"#A5A3A3"} />
                        </TouchableOpacity>
                    )
                }} />
                <Stack.Screen name='policies' options={{
                    title: "Điều Khoản & Chính Sách",
                    headerTitleAlign: 'center',
                    headerTitleStyle: [styles.headerText],
                    presentation: "modal",
                    headerBackTitle: "",
                    headerLeft: () => (
                        <TouchableOpacity onPress={router.back}>
                            <Ionicons name="arrow-back" size={26} color={"#A5A3A3"} />
                        </TouchableOpacity>
                    ),
                }} />
                <Stack.Screen name='OTP-code' options={{ headerShown: false }} />
                <Stack.Screen name='forgot-password' />
            </Stack>
        </>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "inter-bold",
        fontSize: 20,
        color: Colors.PRIMARY,
        letterSpacing: 3
    },
})