import React from 'react';

import Ability from '../../components/Ability';
import Attack from '../../components/Attack';
import {
  Attacks,
  Container,
  ContentRow,
  ContentProperties,
  Hp,
  IconCost,
  Image,
  NaText,
  RulesText,
  RulesTitle,
  SubType,
  SuperType,
  Title,
  TitleProperties,
  ValueProperties,
} from './styles';
import { ReturnIconCost } from '../../utils/CostIcons';

const CardDetail = ({ route }) => {
  const {
    card: {
      ability,
      artist,
      attacks,
      hp,
      imageUrlHiRes,
      name,
      rarity,
      resistances = [],
      retreatCost = [],
      set,
      setCode,
      subtype,
      supertype,
      text = [],
      types = [],
      weaknesses = [],
    },
  } = route.params;

  const iconsType = types.map(icon => ReturnIconCost(icon));

  const FormattedResistances = resistances.map(resistance => ({
    ...resistance,
    icon: ReturnIconCost(resistance.type),
  }));

  const iconsRetreatCost = retreatCost.map(icon => ReturnIconCost(icon));

  const FormattedWeaknesses = weaknesses.map(weakness => ({
    ...weakness,
    icon: ReturnIconCost(weakness.type),
  }));

  return (
    <Container>
      <Image source={{ uri: imageUrlHiRes }} />
      <Title>{name}</Title>
      <SuperType>
        {supertype} - <SubType>{subtype}</SubType>
      </SuperType>

      {hp && String(hp) !== String('None') && (
        <Hp>
          HP {hp}{' '}
          {iconsType.map((icon, index) => (
            <IconCost key={index} source={icon} />
          ))}
        </Hp>
      )}

      {ability && <Ability ability={ability} />}

      {/* Rules */}
      {text.length > 0 ? (
        <>
          <RulesTitle>Rules</RulesTitle>
          {text.map((rule, index) => (
            <RulesText key={index}>{rule}</RulesText>
          ))}
        </>
      ) : null}

      <Attacks
        data={attacks}
        keyExtractor={attack => String(attack.name)}
        renderItem={({ item }) => <Attack attack={item} />}
      />

      {/* Weakness */}
      <ContentProperties style={{ marginTop: 15 }}>
        <TitleProperties>Weakness</TitleProperties>

        {FormattedWeaknesses.length > 0 ? (
          FormattedWeaknesses.map(({ icon, value }, index) => (
            <ContentRow key={index}>
              <IconCost source={icon} />
              <ValueProperties>{value}</ValueProperties>
            </ContentRow>
          ))
        ) : (
          <NaText>n/a</NaText>
        )}
      </ContentProperties>

      {/* Resistances */}
      <ContentProperties>
        <TitleProperties>Resistances</TitleProperties>
        {FormattedResistances.length > 0 ? (
          FormattedResistances.map(({ icon, value }, index) => (
            <ContentRow key={index}>
              <IconCost source={icon} />
              <ValueProperties>{value}</ValueProperties>
            </ContentRow>
          ))
        ) : (
          <NaText>n/a</NaText>
        )}
      </ContentProperties>

      {/* Retreat cost */}
      <ContentProperties>
        <TitleProperties>Retreat Cost</TitleProperties>
        <ContentRow>
          {iconsRetreatCost.length > 0 ? (
            iconsRetreatCost.map((icon, index) => (
              <IconCost key={index} source={icon} />
            ))
          ) : (
            <NaText>n/a</NaText>
          )}
        </ContentRow>
      </ContentProperties>

      {/* Artist */}
      <ContentProperties style={{ marginTop: 15 }}>
        <TitleProperties>Artist</TitleProperties>
        {artist ? (
          <ValueProperties>{artist}</ValueProperties>
        ) : (
          <NaText>n/a</NaText>
        )}
      </ContentProperties>

      {/* Rarity */}
      <ContentProperties>
        <TitleProperties>Rarity</TitleProperties>
        {rarity ? (
          <ValueProperties>{rarity}</ValueProperties>
        ) : (
          <NaText>n/a</NaText>
        )}
      </ContentProperties>

      {/* Set */}
      <ContentProperties>
        <TitleProperties>Set</TitleProperties>
        <ContentRow>
          <ValueProperties>{set}</ValueProperties>
          <IconCost
            source={{
              uri: `https://images.pokemontcg.io/${setCode}/symbol.png`,
            }}
          />
        </ContentRow>
      </ContentProperties>
    </Container>
  );
};

export default CardDetail;
