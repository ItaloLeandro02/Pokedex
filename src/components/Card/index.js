import React from 'react';

import { Button, Container, Image } from './styles';

const Card = ({ navigation, card }) => {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Card', { card })}>
        <Image source={{ uri: card.imageUrl }} />
      </Button>
    </Container>
  );
};

export default Card;
