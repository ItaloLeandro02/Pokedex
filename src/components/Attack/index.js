import React from 'react';

import { Container, Damage, IconCost, Name, Separator, Text } from './styles';
import { ReturnIconCost } from '../../utils/CostIcons';

const Attack = ({ attack: { cost, damage, name, text } }) => {
  const iconsCost = cost.map(icon => ReturnIconCost(icon));

  return (
    <Container>
      <Name>
        {iconsCost.map((icon, index) => (
          <IconCost key={index} source={icon} />
        ))}
        {name}{' '}
        {damage ? (
          <Separator>
            | <Damage>{damage}</Damage>
          </Separator>
        ) : null}
      </Name>
      <Text>{text}</Text>
    </Container>
  );
};

export default Attack;
