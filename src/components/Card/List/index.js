import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Image, TouchableOpacity, View} from 'react-native';

import {CustomHeader} from '../../custom-header';
import api from '../../../service/api';

import styles from './styles';

export const CardList = ({navigation}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCards() {
      try {
        const response = await api.get('/cards');

        const {
          data: {cards},
        } = response;

        setCards(cards);
      } catch (error) {
        console.log('Error: ', error.message);
        Alert.alert(error.message);
      }
    }

    getCards();
  }, []);

  return (
    <View style={styles.content}>
      <CustomHeader isHome title="Cards" navigation={navigation} />
      <View style={styles.body}>
        <FlatList
          numColumns={3}
          keyExtractor={item => item.id}
          data={cards}
          renderItem={({item: card}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('CardDetail', {card})}>
                <Image
                  source={{uri: card.imageUrlHiRes}}
                  style={styles.cardList}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};
