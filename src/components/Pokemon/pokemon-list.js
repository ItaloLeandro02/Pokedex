import React, {useEffect, useState} from 'react';
import { FlatList, Image, SafeAreaView, View } from 'react-native';
import { Text } from 'native-base';

import CustomHeader from '../custom-header';
import api from '../../service/api';

export const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function getPokemons() {
            try {
                const response = await api.get('/cards');

                const { data } = response;

                setPokemons(data);
            } catch (error) {
                console.log('Error: ', error.message);                
            }
        }

        getPokemons();
    }, [])

  return (
    <View style={{flex: 1}}>
        <CustomHeader />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList 
                keyExtractor={item => item.id}
                data={pokemons.cards}
                renderItem={({ item: card }) => {
                    return (
                        <SafeAreaView>
                            {/* <Image source={{ uri: card.imageUrl }} style={{ height: 200, width: 100, resizeMode: 'stretch' }} /> */}
                            <Text>{card.name}</Text>
                        </SafeAreaView>
                    );
                }}
            />
        </View>
    </View>
  );
}
