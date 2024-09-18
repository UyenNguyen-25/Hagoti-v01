import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Octicons, Feather } from '@expo/vector-icons'; 
import { Colors } from '../constants/Colors';
import axios from 'axios';
import { BASE_URL } from '../api/apiConfig';

const PlaceCardMaking = ({ placeId, order, key }) => {
    const [placeDetails, setPlaceDetails] = useState();

    useEffect(() => {
        const fetchPlaceDetails = async () => {
            try {
                console.log('placeId', placeId)
                const response = await axios.get(`${BASE_URL}/place//get-place-by-id/${placeId}`);
                console.log('response', response)
                const data = await response.data;
                setPlaceDetails(data);
            } catch (error) {
                console.error('Error fetching place details:', error);
            }
        };

        fetchPlaceDetails();
    }, [placeId]);
    console.log('place detail', placeDetails)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.indexContainer}>
                    <Text style={styles.indexText}>#{order}</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <Image source={require('../assets/images/Vector.png')} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Quán ăn</Text>
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <Image
                    style={styles.image}
                    source={placeDetails?.thumbnail ? { uri: placeDetails?.thumbnail } : require('../assets/images/alone.jpg')}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{placeDetails?.name}</Text>
                    <View style={styles?.ratingContainer}>
                        <Octicons name="star-fill" size={15} color="#F4E34A" />
                        <Text style={styles.rating}>{placeDetails?.rating ? placeDetails?.rating.toFixed(1) : 'N/A'}</Text>
                    </View>
                    <Text style={styles.infoText}>Giá cả: {placeDetails?.price ? placeDetails?.price : 'N/A'}</Text>
                    <Text style={styles.infoText}>Thời gian mở cửa: {placeDetails?.open ? new Date(placeDetails?.open).toLocaleTimeString() : 'N/A'} - {placeDetails?.close ? new Date(placeDetails?.close).toLocaleTimeString() : 'N/A'}</Text>
                    <Text style={styles.infoText}>Địa chỉ: {placeDetails?.address}</Text>
                    <Text style={styles.infoText}>Số điện thoại: {placeDetails?.phoneNumber ? placeDetails?.phoneNumber : 'N/A'}</Text>
                </View>
            </View>
            <View style={styles.addButtonContainer}>
                <Feather name="plus-circle" size={24} color={Colors.PRIMARY} />
                <Text style={styles.addButtonText}>Thêm địa điểm</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    indexContainer: {
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    indexText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryImage: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    categoryText: {
        fontSize: 16,
        color: '#333',
    },
    detailsContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
    },
    info: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    rating: {
        marginLeft: 5,
        fontSize: 16,
        color: '#4F4F4F',
    },
    infoText: {
        fontSize: 14,
        color: '#4F4F4F',
        marginBottom: 3,
    },
    addButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    addButtonText: {
        fontSize: 16,
        color: Colors.PRIMARY,
        marginLeft: 5,
    },
});

export default PlaceCardMaking;
