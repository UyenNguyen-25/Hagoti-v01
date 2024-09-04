import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout() {
    return (
        <>
            <Stack
                screenOptions={{
                    headerShown: false
                }} initialRouteName='sign-in'>
                <Stack.Screen name='sign-in' />
                {/* <Stack.Screen name='sign-up' /> */}
            </Stack>
        </>
    )
}