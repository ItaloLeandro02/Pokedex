import styled from 'styled-components/native';
import { Animated, Dimensions, PixelRatio } from 'react-native';

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

export const Container = styled.View``;

export const IconCost = styled(Animated.Image)`
  width: ${widthPercentageToDP('6.1%')}px;
  height: ${heightPercentageToDP('3.45%')}px;
  margin: 0 ${widthPercentageToDP('0.7%')}px;
`;

export const Name = styled.Text`
  font-size: ${widthPercentageToDP('5.8%')}px;
  color: #363636;
`;

export const Separator = styled.Text`
  font-size: ${widthPercentageToDP('7.8%')}px;
  color: #95a5a6;
`;

export const Damage = styled.Text`
  font-size: ${widthPercentageToDP('5.8%')}px;
  color: #363636;
`;

export const Text = styled.Text`
  font-size: ${widthPercentageToDP('3.9%')}px;
  color: #4a4a4a;
  padding-bottom: ${heightPercentageToDP('3.3%')}px;
`;
