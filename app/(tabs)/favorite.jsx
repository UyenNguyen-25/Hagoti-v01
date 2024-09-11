import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Colors } from '../../constants/Colors';
import { router, useNavigation } from 'expo-router';
import PlaceCard from '../../components/PlaceCard';

export default function Favorite() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    console.log(navigation);


    useEffect(() => {
        axios.get('https://65459563fe036a2fa954853b.mockapi.io/api/v1/place')
            .then(res => {
                setList(res.data);
                setLoading(false);
            })
            .catch(e => {
                console.log(e)
            })
    }, []);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
    return (
        <View style={{ marginVertical: 50, marginHorizontal: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                <TouchableOpacity style={{ left: 0, position: 'absolute' }} onPress={() => navigation.navigate('home')}>
                <MaterialCommunityIcons name="arrow-left-thin" size={30} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 23, fontWeight: '500' }}>Yêu thích</Text>
            </View>
            <FlatList
                style={styles.container}
                data={list}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                renderItem={({ item }) => (
                    <PlaceCard item={item}/>
                )}
            />
        </View>
    )
}

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