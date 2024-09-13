import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Octicons from '@expo/vector-icons/Octicons';
import { Colors } from '../constants/Colors';

const PlaceCard = ({ item }) => {
    return (
        <View style={styles.list}>
            <Image style={styles.itemImg} source={{ uri: item.thumbnail }} />
            <View style={styles.text}>
                <Text style={{ fontSize: 20, fontWeight: '400' }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', gap: 6 }}>
                    <Octicons name="star-fill" size={20} color="#F4E34A" />
                    <Text style={styles.text}>
                        {item.rating}
                    </Text>
                </View>
                <Text style={styles.text}>Giá cả: {item.name}</Text>
                <Text style={styles.text}>Thời gian: {item.open} - {item.close}</Text>
                <Text style={styles.text}>Địa chỉ: {item.address}</Text>
            </View>
            <TouchableOpacity style={{ right: 0, position: 'absolute' }}>
                <Octicons name="heart-fill" size={24} color={Colors.PRIMARY} />
            </TouchableOpacity>
        </View>
    )
}

export default PlaceCard;

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'column',
        marginVertical: 30
    },
    itemText: {
        flexDirection: 'column'
    },
    itemImg: {
        width: 100,
        height: 110,
        borderRadius: 10
    },
    list: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 15
    }
})