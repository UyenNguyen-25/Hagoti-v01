import { Octicons } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, View } from 'react-native'

const PlaceCardHome = ({ item }) => {
    return (
        <View style={{ borderRadius: 10, flexDirection: 'column', padding: 4, gap: 5, height: 300, width: 170 }}>
            <Image
                source={{ uri: item.thumbnail }}
                style={{ width: '100%', height: '30%', borderRadius: 10, borderWidth: 1 }} />
                
            <View>
                <Text
                    style={{ fontWeight: '500', fontSize: 12 }}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                >{item.name}</Text>
                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                    <Octicons name="star-fill" size={15} color="#F4E34A" />
                    <Text style={{ color: '#4F4F4F' }}>
                        {item.rating}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default PlaceCardHome