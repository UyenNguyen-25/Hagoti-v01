import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';

export default function Profile() {
    return (
        <SafeAreaView style={{ backgroundColor: Colors.SECONDARY, height: "100%" }}>
            <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/images/spirit.png')}
                />
                <Text style={styles.nameText}>Nancy Do</Text>
                <LinearGradient
                    colors={['#FFFFFF', '#FFF2F7', '#FFFFFF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradientBorder}
                >
                    <View style={styles.vip}>
                        <TouchableOpacity style={styles.vipItem}>
                            <View style={{ borderWidth: 2, borderRadius: 8, padding: 5, borderColor: '#FFEBD4' }}>
                                <FontAwesome5 name="crown" size={24} color="#FFDA76" />
                            </View>
                            <View style={{ flexDirection: 'column', height: 50 }}>
                                <Text style={styles.vipText}>Hagoti Vip</Text>
                                <Text style={{ fontSize: 16, color: '#FFEBD4' }}>Mở khóa các tính năng tốt nhất của HAGOTI</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <View style={{ width: '85%' }}>
                    <Text style={styles.text}>Mục Lục</Text>
                    <View style={styles.menu}>
                        <TouchableOpacity style={styles.menuItem}>
                            <Feather name="heart" size={24} color="black" />
                            <Link style={{ fontSize: 16 }} href={''}>Yêu thích</Link>
                        </TouchableOpacity>
                        <View style={styles.horizoltal} />
                        <TouchableOpacity style={styles.menuItem}>
                            <Entypo name="paper-plane" size={24} color="black" />
                            <Link style={{ fontSize: 16 }} href={''}>Kế hoạch của bạn</Link>
                        </TouchableOpacity>
                        <View style={styles.horizoltal} />
                        <TouchableOpacity style={styles.menuItem}>
                            <Feather name="package" size={24} color="black" />
                            <Link style={{ fontSize: 16 }} href={''}>Gói của bạn</Link>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '85%' }}>
                    <Text style={styles.text}>Cài đặt</Text>
                    <View style={styles.menu}>
                        <TouchableOpacity style={styles.menuItem}>
                            <Ionicons name="person" size={24} color="black" />
                            <Link style={{ fontSize: 16 }} href={''}>Chỉnh sửa thông tin cá nhân</Link>
                        </TouchableOpacity>
                        <View style={styles.horizoltal} />
                        <TouchableOpacity style={styles.menuItem}>
                            <AntDesign name="lock1" size={24} color="black" />
                            <Link style={{ fontSize: 16 }} href={''}>Đổi mật khẩu</Link>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{...styles.menu, width: '85%', marginTop: 35}}>
                    <TouchableOpacity 
                        style={{...styles.menuItem, justifyContent: 'center'}} 
                        onPress={() => router.push("/index")}
                    >
                        <Link style={{ fontSize: 16, color: '#C56161' }} href={''}>Đăng xuất</Link>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    avatar: {
        resizeMode: 'contain',
        height: 100,
        width: 100,
        borderColor: '#FF4E88',
        borderWidth: 3,
        borderRadius: 60,
        marginTop: 20
    },
    nameText: {
        color: Colors.PRIMARY,
        marginTop: 20,
        fontSize: 26,
        fontStyle: 'italic'
    },
    menu: {
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 15,
        flexDirection: 'column',
        borderRadius: 15,
        marginTop: 13,
        borderWidth: 3,
        borderColor: '#FF4E88'
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,

    },
    horizoltal: {
        width: '100%',
        height: 1,
        backgroundColor: '#FF4E88',
        marginVertical: 16
    },
    text: {
        fontSize: 17,
        marginTop: 20
    },
    vip: {
        width: '100%',
        backgroundColor: '#FF4E88',
        paddingHorizontal: 14,
        paddingVertical: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    gradientBorder: {
        borderRadius: 15,
        padding: 2,
        marginTop: 20,
        width: '85%'
    },
    vipItem: {
        flexDirection: 'row',
        gap: 9,
        alignItems: 'center'
    },
    vipText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#FFF2F7',
        flex: 2
    }
})
