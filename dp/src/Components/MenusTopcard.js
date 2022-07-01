import React from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Octicons';
import MetarialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const InregionCard = () => {
  return (
    <View>
      <View
        backgroundColor="white"
        margin-20
        padding-10
        style={{borderRadius: 10, elevation: 2}}>
        <TouchableOpacity>
          <View row>
            <View width={'30%'}>
              <Image
                source={{
                  uri: 'https://www.pngkey.com/png/full/217-2178380_mcdonalds-logo-png-mcdonalds-logo-png.png',
                }}
                style={styles.CardImage}
              />
            </View>
            <View marginT-15 marginL-15 style={{width: '57%'}}>
              <Text black style={{fontSize: 15, fontWeight: '500'}}>
                McDonald's
              </Text>
              <Text style={{fontSize: 12, width: 215}}>
                (Dummy Address Lorem Ipsum)
              </Text>

              <View row marginT-10>
                <View
                  center
                  paddingH-10
                  paddingV-2
                  style={{
                    borderWidth: 2,
                    borderColor: '#f6bd2e',
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: 12, color: '#f6bd2e'}}>SPEED</Text>
                  <Text color="#f6bd2e">
                    3 <Icon name="star" />{' '}
                  </Text>
                </View>
                <View
                  center
                  paddingH-10
                  paddingV-2
                  marginH-5
                  style={{
                    borderWidth: 2,
                    borderColor: '#f6bd2e',
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: 12, color: '#f6bd2e'}}>SPEED</Text>
                  <Text color="#f6bd2e">
                    3 <Icon name="star" />{' '}
                  </Text>
                </View>
                <View
                  center
                  paddingH-10
                  paddingV-2
                  style={{
                    borderWidth: 2,
                    borderColor: '#f6bd2e',
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: 12, color: '#f6bd2e'}}>SPEED</Text>
                  <Text color="#f6bd2e">
                    3 <Icon name="star" />{' '}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => alert('Star Clicked')}>
                <Icon name="star-fill" size={24} color="#f6bd2e" />
              </TouchableOpacity>
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
                color={'black'}
              />
              <Text black style={{fontSize: 12}}>
                {' '}
                € 4,50
              </Text>
            </View>
            <View row center marginH-15>
              <FontAwesome name="hourglass-half" size={13} color={'black'} />
              <Text black style={{fontSize: 12}}>
                {' '}
                20 - 30 min.
              </Text>
            </View>
            <View row center>
              <FontAwesome name="comment-dots" size={18} color={'black'} />
              <Text black style={{fontSize: 12}}>
                {' '}
                845 comments
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardImage: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
});

export default InregionCard;
