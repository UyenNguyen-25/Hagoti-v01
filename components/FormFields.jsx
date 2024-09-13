import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';

export default function FormFields({ title, value, handleChangeText, otherStyles, keyboardType, autoComplete, errorMsg, ...props }) {
    const [showPass, setShowPass] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (!value) {
            setIsError(true)
        } else setIsError(false)
    }, [value])

    return (
        <View style={[styles.container, otherStyles]}>
            <Text>{title}</Text>
            <View
                style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    value={value}
                    keyboardType={keyboardType}
                    onChangeText={handleChangeText}
                    secureTextEntry={keyboardType === "password" && !showPass}
                    autoComplete={autoComplete}
                    autoCorrect={false}
                />

                {title === "MẬT KHẨU" && (
                    <TouchableOpacity onPress={() => {
                        setShowPass(!showPass)
                    }}>
                        <Feather name={!showPass ? "eye" : "eye-off"} size={24} color="black" />
                    </TouchableOpacity>
                )}
            </View>
            {isError && <Text style={[styles.errorText, { display: isError && "none" }]}>{errorMsg}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { width: "100%", gap: 10 },
    inputView: {
        backgroundColor: "#F2F2F2",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10
    },
    input: { flex: 1, fontFamily: 'inter' },
    errorText: {
        fontFamily: 'inter',
        color: "#FF5252",
    }
})