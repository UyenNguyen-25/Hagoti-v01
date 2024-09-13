import { View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchInput from '../../components/SearchInput'
import { Colors } from '../../constants/Colors'
import { Link, router, useNavigation } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import axios from 'axios'
import PlaceCardHome from '../../components/PlaceCardHome'

export default function Home() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(list)

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
        <View>
            <View style={styles.headerView} />
            <SearchInput />
            <View style={styles.content}>
                <View style={{ flexDirection: 'column', gap: 20 }}>
                    <View>
                        <Text style={{ fontWeight: '500' }}>Nếu cảm thấy mệt quá</Text>
                        <Text style={{ fontWeight: '500' }}>Mình cho bạn mượn bờ vai</Text>
                        <Text style={{ fontWeight: '500' }}>Thì thầm mình nói nhỏ</Text>
                        <Text style={{ fontWeight: '500' }}>Đi chơi hông ní ơii</Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => router.push("/making-plan")}>
                        <Text style={{ fontSize: 16, fontStyle: 'italic', color: Colors.PRIMARY }}>Let's go</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontStyle: 'italic', color: Colors.PRIMARY, fontWeight: '500' }}>Xin chào,</Text>
                    <Text style={{ fontSize: 20, fontStyle: 'italic', color: Colors.PRIMARY, fontWeight: '500' }}>Nancy!</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, marginLeft: 30, marginBottom: 20 }}>
                <View>
                    <TouchableOpacity
                        onPress={() => router.push('navigators/place?typeId=1')}
                    >
                        <Image style={{ width: 70, height: 70 }} source={require('../../assets/images/food.jpg')} />
                        <Text>Quán ăn</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.typeBtn}
                    onPress={() => router.push('navigators/place?typeId=2')}
                >
                    <Image style={{ width: 70, height: 70 }} source={require('../../assets/images/beverage.jpg')} />
                    <Text>Quán nướcc</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.typeBtn}
                    onPress={() => router.push('navigators/place?typeId=3')}
                >
                    <Image style={{ width: 70, height: 70 }} source={require('../../assets/images/entertainment.jpg')} />
                    <Text>Giải trí</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column', gap: 10 }}>
                <TouchableOpacity style={styles.container}>
                    <Link style={styles.text} href={''}>
                        Có thể bạn sẽ thích
                    </Link>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="arrow-right-thin" size={24} color={Colors.PRIMARY} />
                    </View>
                </TouchableOpacity>
                <View style={{ height: 150 }}>
                    <FlatList
                        style={{ marginHorizontal: 25 }}
                        data={list}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                        renderItem={({ item }) => (
                            <PlaceCardHome item={item} />
                        )}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity style={styles.container}>
                    <Link style={styles.text} href={''}>
                        Kế hoạch gần đây của bạn
                    </Link>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="arrow-right-thin" size={24} color={Colors.PRIMARY} />
                    </View>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '300' }}>Bạn chưa có chuyến đi nào</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        width: '100%',
        height: 100,
        backgroundColor: Colors.PRIMARY
    },
    content: {
        width: '90%',
        backgroundColor: Colors.SECONDARY,
        flexDirection: 'row',
        margin: 'auto',
        marginVertical: 30,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 40,
        gap: 65
    },
    btn: {
        width: 160,
        borderWidth: 2,
        borderColor: Colors.PRIMARY,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 3
    },
    typeBtn: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    text: {
        fontWeight: '600',
        fontSize: 19,
    },
    iconContainer: {
        borderRadius: 15,
        backgroundColor: Colors.SECONDARY,
        padding: 5,
    },
})