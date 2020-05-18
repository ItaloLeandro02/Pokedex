import React from 'react';
import { abilityIcon } from '../../utils/Images64/';

import { Container, ContentRow, Icon, Text, Title } from './styles';

const Ability = ({ ability: { name, text } }) => {
  return (
    <Container>
      <ContentRow>
        <Icon source={{ uri: abilityIcon }} />
        <Title>{name}</Title>
      </ContentRow>
      <Text>{text}</Text>
    </Container>
  );
};

export default Ability;
