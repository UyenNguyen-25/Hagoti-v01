import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '../constants/Colors';
import { router } from 'expo-router';

const SearchInput = ({ initialQuery }) => {
  const [query, setQuery] = useState(initialQuery || "");
  const onSearch = ({ query }) => {
    if(query === "") {
      return (
        alert("Missing keyword")
      );
    }
    router.push(`/navigators/place?typeId=1&search=${encodeURIComponent(query)}`);
  }
  return (
    <View style={styles.searchContainer}>
      <AntDesign name="search1" size={20} color="black" style={styles.searchIcon} />
      <TextInput
        style={styles.textInput}
        value={query}
        placeholder="Tìm địa điểm"
        onChangeText={(text) => setQuery(text)}
        placeholderTextColor="#A9A9A9"
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => onSearch(query)}
      >
        <Text style={styles.searchButtonText}>Tìm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    marginHorizontal: 30,
    paddingLeft: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4, 
    marginTop: -20
  },
  searchIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333'
  },
  searchButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  }
});
