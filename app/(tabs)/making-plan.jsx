import { View, Text, StyleSheet, TextInput, Alert, Button, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import Feather from '@expo/vector-icons/Feather';
import { useController, useForm } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { RadioButton } from 'react-native-paper';
import TimePicker from '../../components/TimePicker';
import DatePicker from '../../components/DatePicker';
import { Octicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Popup from '../../components/Popup';
import { useNavigation } from 'expo-router';

export default function MakingPlan() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [toTime, setToTime] = useState(new Date());
    const [fromTime, setFromTime] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            namePlan: "Kế hoạch của bạn",
            selectedOption: null,
            toTime: new Date(),
            fromTime: new Date(),
            date: new Date(),
        }
    });
    const { field } = useController({
        control,
        name: 'namePlan',
    })
    const onSubmit = (formData) => {
        const fullData = {
            ...formData,
            selectedOption,
            toTime,
            fromTime,
            date
        };
        Alert.alert(JSON.stringify(fullData));
    };

    const options = [
        { id: 1, label: 'Một mình', image: require('../../assets/images/alone.jpg') },
        { id: 2, label: 'Người yêu', image: require('../../assets/images/lover.jpg') },
        { id: 3, label: 'Nhóm bạn', image: require('../../assets/images/team.jpg') },
    ];
    return (
        <SafeAreaView>
            <ScrollView>
                <View>

                    <View style={styles.headerView}>
                        <TouchableOpacity style={{ left: 0, position: 'absolute' }} onPress={() => navigation.navigate('home')}>
                            <MaterialCommunityIcons name="arrow-left-thin" size={30} color="black" />
                        </TouchableOpacity>
                        <TextInput style={styles.namePlan} value={field.value} onChangeText={field.onChange} />
                        <Feather name="edit" size={24} color={Colors.PRIMARY} />
                    </View>
                    <View style={{ flexDirection: 'column', gap: 5, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: '#3A30FE', fontSize: 18 }}>Chỉnh sửa kế hoạch</Text>
                        <View style={{ height: 2, width: 110, backgroundColor: '#3A30FE' }} />
                    </View>
                    <View style={{ marginHorizontal: 25 }}>
                        <Text style={styles.text}>Đi với:</Text>
                        <View style={styles.optionsContainer}>
                            {options.map(option => (
                                <TouchableOpacity
                                    key={option.id}
                                    style={styles.option}
                                    onPress={() => setSelectedOption(option.id)}
                                >
                                    <View style={styles.imageContainer}>
                                        <Image source={option.image} style={styles.image} />
                                        <RadioButton
                                            value={option.id}
                                            status={selectedOption === option.id ? 'checked' : 'unchecked'}
                                            color='#6200ee'
                                            uncheckedColor='#000'
                                        />
                                    </View>
                                    <Text style={styles.label}>{option.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TimePicker label="Từ" time={toTime} setTime={setToTime} />
                        <TimePicker label="Tới" time={fromTime} setTime={setFromTime} />
                    </View>
                    <DatePicker label="Ngày" date={date} setDate={setDate} />
                    <View style={{ flexDirection: 'row', marginLeft: 20, gap: 20 }}>
                        <Text style={styles.text}>Ngân sách:</Text>
                        <View style={{ borderWidth: 1, borderColor: '#A6A6A6', borderRadius: 7, width: '50%', flexDirection: 'row' }}>

                            <TextInput style={{ flex: 1 }} />
                            <Text style={{ fontSize: 18, marginRight: 8 }}>VNĐ</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 20, gap: 20 }}>
                        <Text style={styles.text}>Điểm đến:</Text>
                    </View>
                    <View style={{ marginHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row', gap: 25 }}>
                            <View style={{ width: 80, height: 30, backgroundColor: Colors.PRIMARY, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 18 }}>#1</Text>
                            </View>
                            <View style={{ width: 160, height: 30, backgroundColor: '#D4E6BD', alignItems: 'center', justifyContent: 'center', borderRadius: 15, flexDirection: 'row', gap: 15 }}>
                                <Image source={require('../../assets/images/Vector.png')} />
                                <Text style={{ color: 'black', fontSize: 18 }}>Quán ăn</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 20, backgroundColor: '#E7E5E5', paddingHorizontal: 15, paddingVertical: 20, marginVertical: 20, borderRadius: 10 }}>
                            <Image style={{ flex: 1, borderRadius: 10, height: '80%' }} source={require('../../assets/images/alone.jpg')} />
                            <View style={{ flex: 3 }}>
                                <Text style={{ fontSize: 20, fontWeight: '500' }}>The Refinery Bar & Restaurant</Text>
                                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                    <Octicons name="star-fill" size={15} color="#F4E34A" />
                                    <Text style={{ color: '#4F4F4F' }}>
                                        4.4
                                    </Text>
                                </View>
                                <Text style={{ fontSize: 17, fontWeight: '300' }}>Giá cả: 100k</Text>
                                <Text style={{ fontSize: 17, fontWeight: '300' }}>Thời gian: 11:0 - 17:00</Text>
                                <Text style={{ fontSize: 17, fontWeight: '300' }}>Địa chỉ: 74/7C Hai Bà Trưng</Text>
                            </View>
                            <Popup />
                        </View>
                        <View style={{ flexDirection: 'row', gap: 20, borderWidth: 2, borderColor: Colors.PRIMARY, paddingHorizontal: 20, width: '50%', paddingVertical: 10 }}>
                            <Feather name="plus-circle" size={24} color={Colors.PRIMARY} />
                            <Text style={{ fontSize: 17 }}>Thêm địa điểm</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={handleSubmit(onSubmit)}
                        activeOpacity={0.7}
                        style={{ backgroundColor: Colors.PRIMARY, paddingHorizontal: 20, paddingVertical: 10, width: '80%', marginHorizontal: 'auto', marginVertical: 50, borderRadius: 15 }}
                    >
                        <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', fontWeight: '700', letterSpacing: 4 }}>
                            TIẾP TỤC
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerView: {
        width: '100%',
        height: 100,
        backgroundColor: '#EAF8D7',
        flexDirection: 'row',
        paddingHorizontal: 60,
        paddingTop: 37,
        gap: 20,
        alignItems: 'center'
    },
    namePlan: {
        fontSize: 20,
        fontWeight: '700',
        fontStyle: 'italic',
        color: Colors.PRIMARY
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginVertical: 23
    },
    option: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 20
    },
    imageContainer: {
        position: 'relative',
        width: 100,
        height: 100
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    label: {
        marginTop: 10,
        fontSize: 16,
        marginLeft: 35
    },
    text: {
        fontSize: 18
    }
})