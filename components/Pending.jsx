import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Pending = () => (
    <View style={styles.tabContent}>
        <Text>Danh sách các kế hoạch chờ thực hiện</Text>
    </View>
);

const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        padding: 20,
    },
});

export default Pending;
