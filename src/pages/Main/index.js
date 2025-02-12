import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import {
  Avatar,
  Cards,
  Container,
  ContentRow,
  EmptyListContent,
  EmptyListIcon,
  EmptyListTitle,
  Input,
} from './styles';
import api from '../../service/api';

const Main = ({ navigation }) => {
  const [state, setState] = useState({
    cards: [],
    cardsVisible: false,
  });

  useEffect(() => {
    const getCards = async () => {
      const {
        data: { cards },
      } = await api.get('/cards');

      setState({ ...state, cards, cardsVisible: true });
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

  const renderRows = (numberRows = 3) => {
    let shimmerRows = [];

    for (let i = 0; i < numberRows; i++) {
      shimmerRows.push(<Avatar key={i} visible={cardsVisible} />);
    }

    return <ContentRow>{shimmerRows}</ContentRow>;
  };

  const { cards, cardsVisible } = state;

  return (
    <Container>
      <Header isHome />

      {renderRows()}
      {renderRows()}
      {renderRows()}

      <Avatar key="key" visible={cardsVisible}>
        <Input onChangeText={handleSearchCard} />
        <Cards
          data={cards}
          keyExtractor={card => String(card.id)}
          renderItem={({ item }) => (
            <Card navigation={navigation} card={item} />
          )}
          ListEmptyComponent={rederEmptyList}
        />
      </Avatar>
    </Container>
  );
};

export default Main;
