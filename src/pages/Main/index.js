import React, {useEffect, useState} from 'react';

import Header from '../../components/custom-header';
import Card from '../../components/Card';
import {Cards, Container} from './styles';
import api from '../../service/api';

const Main = ({navigation}) => {
  const [state, setState] = useState({
    cards: [],
  });

  useEffect(() => {
    const getCards = async () => {
      const {
        data: {cards},
      } = await api.get('/cards');

      setState({...state, cards});
    };

    getCards();
  }, []);

  const {cards} = state;

  return (
    <Container>
      <Header />

      <Cards
        data={cards}
        keyExtractor={card => String(card.id)}
        renderItem={({item}) => <Card navigation={navigation} card={item} />}
      />
    </Container>
  );
};

export default Main;
