import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import {
  Cards,
  Container,
  EmptyListContent,
  EmptyListIcon,
  EmptyListTitle,
  Input,
} from './styles';
import api from '../../service/api';

const Main = ({ navigation }) => {
  const [state, setState] = useState({
    cards: [],
  });

  useEffect(() => {
    const getCards = async () => {
      const {
        data: { cards },
      } = await api.get('/cards');

      setState({ ...state, cards });
    };

    getCards();
  }, []);

  const handleSearchCard = async pokemonName => {
    setState({ ...state, pokemonName });
    if (pokemonName.length > 3) {
      const {
        data: { cards },
      } = await api.get(`/cards?name=${pokemonName}`);

      setState({ ...state, cards });
    }
  };

  const rederEmptyList = () => {
    return (
      <EmptyListContent>
        <EmptyListTitle>Nenhum card encontrado</EmptyListTitle>
        <EmptyListIcon />
      </EmptyListContent>
    );
  };

  const { cards } = state;

  return (
    <Container>
      <Header isHome />
      <Input onChangeText={handleSearchCard} />
      <Cards
        data={cards}
        keyExtractor={card => String(card.id)}
        renderItem={({ item }) => <Card navigation={navigation} card={item} />}
        ListEmptyComponent={rederEmptyList}
      />
    </Container>
  );
};

export default Main;
