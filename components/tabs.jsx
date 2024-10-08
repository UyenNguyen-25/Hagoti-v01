import React from 'react'
import { Link, router } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import { Colors } from "../constants/Colors"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Home from '../app/(tabs)/home';
import Favorite from '../app/(tabs)/favorite';
import MakingPlan from '../app/(tabs)/making-plan';
import History from '../app/(tabs)/history';
import Profile from '../app/(tabs)/profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function HomeTabs() {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: Colors.PRIMARY,
            tabBarActiveBackgroundColor: Colors.PRIMARY,
            tabBarActiveTintColor: Colors.ACTIVE,
            tabBarStyle: {
                height: 60
            }
        }}>
            <Tab.Screen name='home' component={Home}
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

            <Tab.Screen name='favorite' component={Favorite}
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

            <Tab.Screen name='making-plan' component={MakingPlan}
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
                            }} onPress={() => router.push("/making-plan")}>
                                <AntDesign name="pluscircle" size={60} color={Colors.PRIMARY} />
                            </TouchableOpacity>
                        )
                    }
                }}
            />

            <Tab.Screen name='history' component={History}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <View style={styles.customView}>
                                <Entypo name="paper-plane" size={24} color={color} />
                                <Text style={{ ...styles.customText, color: focused ? "#FFF" : Colors.PRIMARY }}>Kế hoạch</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name='profile' component={Profile}
                options={{
                    tabBarButton: () => {
                        return (
                            <TouchableOpacity style={[styles.customView, { paddingHorizontal: 20  }]} onPress={() => router.push("/profile")}>
                                <Feather name="user" size={25} color={Colors.PRIMARY} />
                                <Text style={{ ...styles.customText, color: Colors.PRIMARY }}>Tài khoản</Text>
                            </TouchableOpacity>
                        )
                    }
                }}
            />

        </Tab.Navigator>
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