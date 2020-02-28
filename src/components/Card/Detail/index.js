import React from 'react';
import {Image, View, Dimensions} from 'react-native';
import {Text} from 'native-base';

import {CustomHeader} from '../../custom-header';
import styles from './styles';

export const CardDetail = ({navigation, route}) => {
  const {card} = route.params;

  return (
    <View style={styles.content}>
      <CustomHeader title={card.name} navigation={navigation} />
      <View style={styles.body}>
        <Image source={{uri: card.imageUrl}} style={styles.card} />
        <Text style={styles.cardName}>{card.name}</Text>
        <Text note style={styles.cardPokemonStatusStage}>
          {card.supertype} - {card.subtype}
        </Text>
        {card.hp ? (
          <Text style={styles.cardPokemonStatusHp}>HP {card.hp}</Text>
        ) : (
          ''
        )}
      </View>
    </View>
  );
};
