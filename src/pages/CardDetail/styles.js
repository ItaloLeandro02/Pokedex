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

export const Container = styled.ScrollView`
  padding: ${widthPercentageToDP('2%')}px;
`;

export const Image = styled(Animated.Image)`
  width: ${widthPercentageToDP('90%')}px;
  height: ${heightPercentageToDP('70%')}px;
  resize-mode: contain;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: ${widthPercentageToDP('7.8%')}px;
  font-weight: bold;
  margin-top: ${widthPercentageToDP('5%')}px;
  color: #363636;
  text-align: center;
`;

export const SuperType = styled.Text`
  font-size: ${widthPercentageToDP('5.8%')}px;
  color: #95a5a6;
  text-align: center;
`;

export const SubType = styled.Text`
  font-size: ${widthPercentageToDP('5.8%')}px;
  color: #95a5a6;
  text-align: center;
`;

export const Hp = styled.Text`
  font-size: ${widthPercentageToDP('5%')}px;
  color: #363636;
  margin: ${heightPercentageToDP('1.4%')}px 0 ${heightPercentageToDP('1.4%')}px
    0;
  text-align: center;
`;

export const IconCost = styled(Animated.Image)`
  width: ${widthPercentageToDP('6.1%')}px;
  height: ${heightPercentageToDP('3.45%')}px;
  margin: 0 ${widthPercentageToDP('0.7%')}px;
`;

export const Attacks = styled.FlatList.attrs({
  initialNumToRender: 5,
})``;

export const RulesTitle = styled.Text`
  font-size: ${widthPercentageToDP('5.8%')}px;
  color: #363636;
`;

export const RulesText = styled.Text`
  font-size: ${widthPercentageToDP('3.9%')}px;
  color: #4a4a4a;
  padding-bottom: ${heightPercentageToDP('3.3%')}px;
`;

export const ContentProperties = styled.View`
  align-items: center;
  padding: ${widthPercentageToDP('2.5%')}px;
`;

export const ContentRow = styled.View`
  flex-direction: row;
  margin-top: ${heightPercentageToDP('1.5%')}px;
  align-items: center;
`;

export const TitleProperties = styled.Text`
  font-size: ${widthPercentageToDP('2.7%')}px;
  text-transform: uppercase;
  letter-spacing: ${widthPercentageToDP('0.3%')}px;
`;

export const ValueProperties = styled.Text`
  font-size: ${widthPercentageToDP('5%')}px;
  color: #363636;
`;

export const NaText = styled.Text`
  font-size: ${widthPercentageToDP('5%')}px;
  color: #363636;
  text-transform: uppercase;
`;
