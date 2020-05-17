import styled from 'styled-components/native';
import { Animated, Dimensions, PixelRatio } from 'react-native';
import Touchable from 'react-native-platform-touchable';

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
  padding: ${widthPercentageToDP('1%')}px;
`;

export const Image = styled(Animated.Image)`
  width: ${widthPercentageToDP('30%')}px;
  height: ${heightPercentageToDP('30%')}px;
  resize-mode: stretch;
`;

export const Button = styled(Touchable)``;
