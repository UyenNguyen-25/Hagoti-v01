import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({ title, handlePress, containerStyles, textStyles, isLoading }) {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={[containerStyles, { opacity: isLoading ? "opacity-50" : "" }]} disabled={isLoading}>
            <Text
                style={textStyles}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
