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

export const Container = styled.View`
  margin-bottom: ${heightPercentageToDP('1.4%')}px;
`;

export const ContentRow = styled.View`
  flex-direction: row;
`;

export const Icon = styled(Animated.Image)`
  width: ${widthPercentageToDP('25.1%')}px;
  height: ${heightPercentageToDP('3.6%')}px;
`;

export const Title = styled.Text`
  color: #363636;
  font-size: ${widthPercentageToDP('5.8%')}px;
`;

export const Text = styled.Text`
  color: #4a4a4a;
  font-size: ${widthPercentageToDP('3.9%')}px;
`;
