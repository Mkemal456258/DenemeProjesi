import React from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import Inregion from '../../Data/Inregion';
import Icon from 'react-native-vector-icons/Octicons';
import MetarialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const InregionCard = ({onPress}) => {
  return (
    <SafeAreaView>
      {Inregion.map(inregion => (
        <TouchableOpacity onPress={onPress}>
          <View
            backgroundColor="white"
            marginH-20
            marginV-10
            padding-10
            style={{borderRadius: 10}}>
            <View row>
              <View width={110}>
                <Image
                  source={{uri: inregion.Inregion.image}}
                  style={styles.CardImage}
                />
              </View>
              <View>
                <View row>
                  <Text
                    style={{fontSize: 12, color: '#b2b2b2', fontWeight: '300'}}>
                    {inregion.Inregion.workHours}
                  </Text>
                  <View row center style={{left: 20}}>
                    <Text color="#b2b2b2" style={{fontWeight: '300'}}>
                      {inregion.Inregion.rate}{' '}
                    </Text>
                    <Icon name="star-fill" size={15} color="#f6bd2e" />
                    <Icon
                      name="star-fill"
                      style={{marginHorizontal: 2}}
                      size={15}
                      color="#f6bd2e"
                    />
                    <Icon
                      name="star-fill"
                      style={{marginHorizontal: 2}}
                      size={15}
                      color="#f6bd2e"
                    />
                    <Icon
                      name="star-fill"
                      style={{marginHorizontal: 2}}
                      size={15}
                      color="#f6bd2e"
                    />
                    <Icon name="star-fill" size={15} color="#9b9b9b" />
                  </View>
                </View>
                <Text color="black" style={{fontSize: 14}}>
                  {inregion.Inregion.name}
                </Text>
                <Text
                  marginT-30
                  style={{fontSize: 14, color: '#b2b2b2', fontWeight: '300'}}>
                  {inregion.Inregion.foodtype}
                </Text>
              </View>
            </View>
            <View
              backgroundColor="#edeef0"
              style={{width: '100%', height: 2, marginTop: 10}}
            />
            <View row marginT-5>
              <View row center>
                <MetarialIcon
                  name="database-arrow-down"
                  size={20}
                  color={'#b2b2b2'}
                />
                <Text style={{fontWeight: '300'}}>
                  {' '}
                  € {inregion.Inregion.discount}
                </Text>
              </View>
              <View row center marginH-15>
                <FontAwesome
                  name="hourglass-half"
                  size={13}
                  color={'#b2b2b2'}
                />
                <Text style={{fontWeight: '300'}}>
                  {' '}
                  {inregion.Inregion.deliveryTime}
                </Text>
              </View>
              <View row center>
                <FontAwesome name="motorcycle" size={18} color={'#b2b2b2'} />
                <Text style={{fontWeight: '300'}}>
                  {' '}
                  € {inregion.Inregion.cartage}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  CardImage: {
    height: 100,
    width: 100,
    zIndex: 999,
  },
});

export default InregionCard;
