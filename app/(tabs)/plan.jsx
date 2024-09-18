import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Colors } from '../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import PlanCard from '../../components/PlanCard';
import Drafts from '../../components/Drafts';
import Pending from '../../components/Pending';
import InProgress from '../../components/InProgress';
import Completed from '../../components/Completed';

const initialLayout = { width: Dimensions.get('window').width };

export default function PlansScreen() {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'drafts', title: 'Drafts' },
        { key: 'pending', title: 'Pending' },
        { key: 'inProgress', title: 'In Progress' },
        { key: 'completed', title: 'Completed' },
    ]);

    const renderScene = SceneMap({
        drafts: Drafts,
        pending: Pending,
        inProgress: InProgress,
        completed: Completed,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            style={styles.tabBar}
            indicatorStyle={styles.indicator}
            labelStyle={styles.label}
            scrollEnabled
            tabStyle={styles.tabStyle}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <MaterialCommunityIcons name="arrow-left-thin" size={30} color={Colors.PRIMARY} />
                </TouchableOpacity>
            </View>

            <View style={styles.tabViewContainer}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    renderTabBar={renderTabBar}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    backButtonContainer: {
        backgroundColor: Colors.SECONDARY,
        paddingTop: 40,
        paddingHorizontal: 15,
        height: 80,
        justifyContent: 'center',
    },
    tabViewContainer: {
        flex: 1,
    },
    tabBar: {
        backgroundColor: Colors.SECONDARY,
        height: 60,
    },
    indicator: {
        backgroundColor: Colors.PRIMARY,
        height: 3,
        borderRadius: 2,
    },
    label: {
        color: Colors.PRIMARY,
        fontWeight: '600',
        fontSize: 17,
        textAlign: 'center',
        textTransform: 'none',
    },
    tabStyle: {
        width: Dimensions.get('window').width / 4,
    },
});
