import React from 'react'
import { Link, Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import { Colors } from "../../constants/Colors"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: Colors.PRIMARY,
            tabBarActiveBackgroundColor: Colors.PRIMARY,
            tabBarActiveTintColor: Colors.ACTIVE,
            tabBarStyle: {
                height: 60
            }
        }}>
            <Tabs.Screen name='home'
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <View style={styles.customView}>
                                <Feather name="home" size={25} color={color} />
                                <Text style={{ ...styles.customText, color: focused ? "#FFF" : Colors.PRIMARY }}>Trang chủ</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tabs.Screen name='favorite'
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <View style={styles.customView}>
                                <AntDesign name="heart" size={24} color={color} />
                                <Text style={{ ...styles.customText, color: focused ? "#FFF" : Colors.PRIMARY }}>Yêu thích</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tabs.Screen name='making-plan'
                options={{
                    tabBarButton: () => {
                        return (
                            <TouchableOpacity style={{
                                top: -30,
                                width: 75,
                                height: 75,
                                borderRadius: 50,
                                borderWidth: 4,
                                borderColor: "#FFF",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#FFF",
                            }}>
                                <Link href={"/(auth)"}><AntDesign name="pluscircle" size={60} color={Colors.PRIMARY} /></Link>
                            </TouchableOpacity>
                        )
                    }
                }}
            />

            <Tabs.Screen name='history'
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <View style={styles.customView}>
                                <Octicons name="history" size={24} color={color} />
                                <Text style={{ ...styles.customText, color: focused ? "#FFF" : Colors.PRIMARY }}>Lịch sử</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tabs.Screen name='profile'
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <View style={styles.customView}>
                                <Feather name="user" size={25} color={color} />
                                <Text style={{ ...styles.customText, color: focused ? "#FFF" : Colors.PRIMARY }}>Tài khoản</Text>
                            </View>
                        )
                    }
                }}
            />

        </Tabs>
    )
}

const styles = StyleSheet.create({
    customView: {
        alignItems: "center",
        justifyContent: "center",

    },
    customText: {
        color: Colors.PRIMARY,
        fontSize: 14,
        fontFamily: "inter"
    }
})