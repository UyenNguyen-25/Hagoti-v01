import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';

export default function FormFields({ title, value, handleChangeText, otherStyles, ...props }) {
    const [showPass, setShowPass] = useState(false)

    return (
        <View style={{ width: "100%", gap: 10, ...otherStyles }}>
            <Text>{title}</Text>
            <View
                style={{
                    backgroundColor: "#F2F2F2",
                    height: 50,
                    borderRadius: 10,
                    paddingHorizontal: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 10
                }}>
                <TextInput
                    style={{ flex: 1, fontFamily: 'inter' }}
                    value={value}
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "MẬT KHẨU" && !showPass}
                    {...props}
                />

                {title === "MẬT KHẨU" && (
                    <TouchableOpacity onPress={() => {
                        setShowPass(!showPass)
                    }}>
                        <Feather name={!showPass ? "eye" : "eye-off"} size={24} color="black" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}