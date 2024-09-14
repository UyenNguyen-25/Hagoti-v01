import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import axios from 'axios';
import SearchInput from '../../../components/SearchInput';
import PlaceCard from '../../../components/PlaceCard';

const Place = () => {
  const { typeId, query } = useLocalSearchParams();
  const navigation = useNavigation();
  const [type, setType] = useState(typeId);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const router = useRouter();
  console.log('type', type);

  useEffect(() => {
    if (typeId !== type) {
      setType(type);
    }
  }, [type]);

  useEffect(() => {
    axios.get('https://65459563fe036a2fa954853b.mockapi.io/api/v1/place')
      .then(res => {
        setList(res.data);
        setLoading(false);
      })
      .catch(e => {
        console.log(e)
      })
  }, []);

  useEffect(() => {
    let filtered = list.filter(item => item.typeId === type);

    if (query) {
      filtered = filtered.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    };

    setFiltered(filtered);

  }, [list, type])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('home')}>
          <MaterialCommunityIcons name="arrow-left-thin" size={30} color="black" />
        </TouchableOpacity>
        <SearchInput style={styles.searchInput} />
      </View>
      <View style={styles.typeList}>
        <TouchableOpacity
          style={[styles.typeButton, type === '1' && styles.condition]}
          onPress={() => setType('1')}
        >
          <Image style={styles.typeImage} source={require('../../../assets/images/food.jpg')} />
          <Text style={styles.typeText}>Quán ăn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeButton, type === '2' && styles.condition]}
          onPress={() => setType('2')}
        >
          <Image style={styles.typeImage} source={require('../../../assets/images/beverage.jpg')} />
          <Text style={styles.typeText}>Quán nước</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeButton, type === '3' && styles.condition]}
          onPress={() => setType('3')}
        >
          <Image style={styles.typeImage} source={require('../../../assets/images/entertainment.jpg')} />
          <Text style={styles.typeText}>Giải trí</Text>
        </TouchableOpacity>

      </View>
      <FlatList
        style={{ flexDirection: 'column', marginVertical: 30 }}
        data={filtered}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        renderItem={({ item }) => (
          <PlaceCard item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 80,
    marginHorizontal: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
  },
  typeList: {
    flexDirection: 'row',
    gap: 10
  },
  typeButton: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 79,
    marginBottom: 20,
  },
  typeImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 5,
  },
  typeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  condition: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10
  }
});

export default Place;
