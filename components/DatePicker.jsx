import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const DatePicker = ({ label, date, setDate }) => {
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        setShow(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    return (
        <View style={styles.dateContainer}>
            <Text style={styles.label}>{label}:</Text>
            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />
            )}
            <TouchableOpacity style={styles.dateText} onPress={() => setShow(true)}>
                <Text style={styles.label}>{date.toLocaleDateString()}</Text>
                <MaterialIcons name="calendar-today" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default DatePicker;

const styles = StyleSheet.create({
    dateContainer: {
        flexDirection: 'row',
        margin: 20,
        gap: 20,
        alignItems: 'center',
    },
    dateText: {
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
