import React from 'react';
import {Image, ScrollView, View, Dimensions, StyleSheet} from 'react-native';
import {Text} from 'native-base';

import {CustomHeader} from '../../custom-header';
import styles from './styles';

import ColorLessIcon from '../../../assets/Images/colorless.png';
import DarknessIcon from '../../../assets/Images/darkness.png';
import DragonIcon from '../../../assets/Images/dragon.png';
import FairyIcon from '../../../assets/Images/fairy.png';
import FightingIcon from '../../../assets/Images/fighting.png';
import FireIcon from '../../../assets/Images/fire.png';
import GrassIcon from '../../../assets/Images/grass.png';
import LightningIcon from '../../../assets/Images/lightning.png';
import MetalIcon from '../../../assets/Images/metal.png';
import PsychicIcon from '../../../assets/Images/psychic.png';
import WaterIcon from '../../../assets/Images/water.png';

const EnergyTypes = [ 
  {
    name: 'Colorless',
    icon: ColorLessIcon,
  },
  {
    name: 'Darkness',
    icon: DarknessIcon,
  },
  {
    name: 'Dragon',
    icon: DragonIcon
  },
  {
    name: 'Fairy',
    icon: FairyIcon,
  },
  {
    name: 'Fighting',
    icon: FightingIcon,
  },
  {
    name: 'Fire',
    icon: FireIcon,
  },
  {
    name: 'Grass',
    icon:  GrassIcon,
  },
  {
    name: 'Lightning',
    icon:  LightningIcon,
  },
  {
    name: 'Metal',
    icon:  MetalIcon,
  }, 
  {
    name: 'Psychic',
    icon:  PsychicIcon,
  },
  {
    name: 'Water',
    icon:  WaterIcon,
  }
]
const Attack = ({ attack }) => {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        {
          attack.cost.map(cost => (
            <Image source={EnergyTypes.find(x=>x.name === cost).icon} style={{ height:25, width: 25, resizeMode: 'contain' }} />
          ))
        }
        <Text style={{ fontSize: 24, color: '#363636',  }}>{ attack.name } { attack.damage ? `| ${ attack.damage }`: null }</Text>
      </View>
      <View>
        <Text style={{ textAlign: "justify", paddingBottom: 20, fontSize: 16, color: '#4A4A4A' }}>{ attack.text }</Text>
      </View>
    </>
  );
};

const Weaknesse = ({ weaknesse }) => {
  return (
    <>
      <Text style={{ paddingBottom: 11 }}>WEAKNESS</Text>
      <View style={{ flexDirection: 'row' }}>
        <Image source={EnergyTypes.find(x=>x.name === weaknesse.type).icon} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
        <Text style={{ fontSize: 20, color: '#363636', }}> {weaknesse.value}</Text>
      </View>
    </>
  );
};

const Resistence = ({ resistance }) => {
  return (
    <>
      <Text style={{ paddingBottom: 11, marginTop: 11 }}>RESISTANCES</Text>
      <View style={{ flexDirection: 'row' }}>
        <Image source={EnergyTypes.find(x=>x.name === resistance.type).icon} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
        <Text style={{ fontSize: 20, color: '#363636', }}> {resistance.value}</Text>
      </View>
    </>
  );
};

const RetreatCost = ({ retreatCost }) => {
  return <Image source={EnergyTypes.find(x=>x.name === retreatCost).icon} style={{ height: 25, width: 25, resizeMode: 'contain' }} />;
};

export const CardDetail = ({navigation, route}) => {
  const {card} = route.params;

  return (
    <ScrollView>
      <View style={styles.content}>
        <CustomHeader title={card.name} navigation={navigation} />
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: card.imageUrlHiRes}} style={styles.card} />
            <Text style={styles.cardName}>{card.name}</Text>
            <Text note style={styles.cardPokemonStatusStage}>
              {card.supertype} - {card.subtype}
            </Text>
            <View style={{flexDirection: 'row'}}>
              {card.hp !== 'None' ? (
                <Text style={styles.cardPokemonStatusHp}>HP {card.hp}</Text>
              ) : (
                null
              )}
              {card.types ? (
                <Image source={EnergyTypes.find(x=>x.name == card.types[0]).icon} style={styles.pokemonEnergyType}/>
              ) : (
                null
              )}
            </View>
            {
              card.attacks ? (
                <View style={{ padding: 20 }}>
                { card.attacks.map(attack => <Attack key={attack.name} attack={attack}/> )}
                </View>
              )
              : (
                null
              )
            }
            {
              card.weaknesses ? (
                card.weaknesses.map(weaknesse => <Weaknesse key={weaknesse.type} weaknesse={weaknesse} /> )
              )
              : (
                null
              )
            }
            {
              card.resistances ? (
                card.resistances.map(resistance => <Resistence key={resistance.type} resistance={resistance} />)
              ) 
              : (
                null
              )
            }
            {
              card.retreatCost ? (
                <>
                  <Text style={{ paddingBottom: 11, marginTop: 11 }}>RETREAT COST</Text>
                  <View style={{ flexDirection: 'row' }}>
                    { card.retreatCost.map(retreatCost => <RetreatCost retreatCost={retreatCost} /> ) }
                  </View>
                </>
              )
              : (
                null
              )
            }
            <Text style={{ marginTop: 40, fontSize: 11, color: '#4A4A4A' }}>ARTIST</Text>
            <Text style={{ fontSize: 20, color: '#363636' }}>{ card.artist }</Text>

            <Text style={{ marginTop: 40, fontSize: 11, color: '#4A4A4A' }}>RARITY</Text>
            <Text style={{ fontSize: 20, color: '#363636' }}>{ card.rarity }</Text>

            <Text style={{ marginTop: 40, fontSize: 11, color: '#4A4A4A' }}>SET</Text>
            <Text style={{ fontSize: 20, color: '#363636' }}>{ card.set }</Text>
        </View>
      </View>
    </ScrollView>
  );
};

