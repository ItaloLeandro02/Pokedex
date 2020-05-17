import React from 'react';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';

const CustomHeader = ({isHome, navigation, title}) => {
  return (
    <Header>
      <Left>
        {isHome ? (
          <Button transparent>
            <Icon name="menu" />
          </Button>
        ) : (
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        )}
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
  );
};

export default CustomHeader;
