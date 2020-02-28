import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardList: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.3,
    resizeMode: 'contain',
    marginLeft: Dimensions.get('window').width * 0.02,
  },
});

export default styles;
