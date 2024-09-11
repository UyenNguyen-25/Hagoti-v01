import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

export default function OTPCode({ ...props }) {
    return (
        <View>
            <Text>OTPCode</Text>
            <CustomButton title={"Quay lai"} handlePress={() => router.back()} />

        </View>
    )
}