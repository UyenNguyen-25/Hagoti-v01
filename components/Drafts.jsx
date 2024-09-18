import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlanCard from './PlanCard';

const Drafts = () => (
    <View style={styles.tabContent}>
        <PlanCard title={'Giao ne'} />
    </View>
);

const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        padding: 20,
    },
});

export default Drafts;
