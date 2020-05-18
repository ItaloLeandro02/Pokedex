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

      setTimeout(() => setState({ ...state, cards, cardsVisible: true })), 5000;
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

  const renderRows = (numberRows = 1) => {
    let shimmerRows = [];
    for (let i = 0; i < numberRows - 1; i++) {
        shimmerRows.push(<Avatar visible={cardsVisible} />);
    }
    
    return (
      <ContentRow>
        <Avatar visible={cardsVisible} />
        <Avatar visible={cardsVisible}>
          <Input onChangeText={handleSearchCard} />
          <Cards
            data={cards}
            keyExtractor={card => String(card.id)}
            renderItem={({ item }) => <Card navigation={navigation} card={item} />}
            ListEmptyComponent={rederEmptyList}
          />
        </Avatar>
      </ContentRow>
    );
  }

  const { cards, cardsVisible } = state;

  return (
    <Container>
      <Header isHome />
      
      {renderRows(3)}
      
    </Container>
  );
};

export default Main;
