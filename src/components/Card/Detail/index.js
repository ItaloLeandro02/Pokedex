import React from 'react';
import {Image, View, Dimensions} from 'react-native';
import {Text} from 'native-base';

import {CustomHeader} from '../../custom-header';

export const CardDetail = ({navigation, route}) => {
  const {card} = route.params;
  console.log(card);

  return (
    <View style={{flex: 1}}>
      <CustomHeader title={card.name} navigation={navigation} />
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '50%'}}>
          <Image
            source={{uri: card.imageUrl}}
            style={{
              height: Dimensions.get('window').height / 2,
              width: Dimensions.get('window').width / 2,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{padding: 60, flexDirection: 'row'}}>
          <Text style={{paddingRight: 5}}>{card.name}</Text>
          <Text>
            {card.supertype} - {card.subtype}
          </Text>
          {card.hp ? <Text>HP {card.hp}</Text> : ''}
        </View>
      </View>
    </View>
  );
};
