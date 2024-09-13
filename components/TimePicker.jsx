import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TimePicker = ({ label, time, setTime }) => {
    const [show, setShow] = useState(false);

    const onChange = (event, selectedTime) => {
        setShow(false);
        if (selectedTime) {
            setTime(selectedTime);
        }
    };

    return (
        <View style={styles.timeContainer}>
            <Text style={styles.label}>{label}:</Text>
            {show && (
                <DateTimePicker
                    value={time}
                    mode="time"
                    display="default"
                    onChange={onChange}
                />
            )}
            <TouchableOpacity style={styles.timeText} onPress={() => setShow(true)}>
                <Text style={styles.label}>{time.toLocaleTimeString()}</Text>
                <MaterialIcons name="access-time" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default TimePicker;

const styles = StyleSheet.create({
    timeContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeText: {
        borderWidth: 1,
        borderRadius: 7,
        paddingHorizontal: 15,
        paddingVertical: 5,
        flexDirection: 'row',
        gap: 10,
        borderColor: '#A6A6A6',
    },
    label: {
        fontSize: 18,
    },
});
