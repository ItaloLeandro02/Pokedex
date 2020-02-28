import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  contentCardInfo: {
    flexDirection: "row"
  },

  body: {
  },

  card: {
    height: Dimensions.get('window').height * 0.69,
    width: Dimensions.get('window').width * 0.95,
    resizeMode: 'stretch',
    marginTop: 10,
    alignSelf: "center"
  },

  cardName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#363636',
    marginTop: 10
  },

  cardPokemonStatusStage: {
    fontSize: 24,
  },

  cardPokemonStatusHp: {
    fontSize: 20,
    color: '#363636',
  },

  pokemonEnergyType: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginLeft: 3
  }
});

export default styles;
