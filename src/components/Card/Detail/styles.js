import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    height: Dimensions.get('window').height * 0.75,
    width: Dimensions.get('window').width * 0.75,
    resizeMode: 'contain',
    marginTop: 0,
  },

  cardName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#363636',
  },

  cardPokemonStatusStage: {
    fontSize: 24,
  },

  cardPokemonStatusHp: {
    fontSize: 20,
    color: '#363636',
  },
});

export default styles;
