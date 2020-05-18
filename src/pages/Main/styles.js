import styled from 'styled-components/native';
import { Animated, Dimensions, PixelRatio } from 'react-native';

import { NotFound } from '../../assets/Images';

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100
  );
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100
  );
};

export const Container = styled.View`
  padding-bottom: ${heightPercentageToDP('16.6%')}px;
`;

export const Input = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
  placeholder: 'Pesquise o nome do pokémon',
})`
  padding: ${widthPercentageToDP('2.5%')}px;
`;

export const Cards = styled.FlatList.attrs({
  numColumns: 3,
  initialNumToRender: 5,
})``;

export const EmptyListContent = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${heightPercentageToDP('20%')}px;
`;

export const EmptyListTitle = styled.Text`
  font-size: ${widthPercentageToDP('6%')}px;
`;

export const EmptyListIcon = styled(Animated.Image).attrs({
  source: NotFound,
})`
  width: ${widthPercentageToDP('50%')}px;
  height: ${heightPercentageToDP('20%')}px;
  margin-top: ${heightPercentageToDP('2.3%')}px;
`;
