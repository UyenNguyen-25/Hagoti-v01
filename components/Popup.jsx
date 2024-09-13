import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Popup = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleDelete = () => {
        setModalVisible(false);
        console.log('Xóa item');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Feather name="more-vertical" size={24} color="black" />
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                animationType="fade"
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    onPress={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }}  onPress={() => setModalVisible(false)}>
                        <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }} onPress={handleDelete}>
                            <MaterialIcons name="delete" size={24} color="#ED4B4D" />
                            <Text style={styles.modalOption}>Xóa</Text>
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: 150,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalOption: {
        fontSize: 18,
        padding: 10,
        color: 'black',
    },
});

export default Popup;
