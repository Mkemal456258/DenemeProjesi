import React from 'react';
import {TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import Featured from '../../Data/Featured';
import Icon from 'react-native-vector-icons/FontAwesome5';
const FeaturedCard = () => {
  return (
    <ScrollView
      horizontal={true}
      style={{paddingHorizontal: 10}}
      showsHorizontalScrollIndicator={false}>
      <View row marginR-10>
        {Featured.map(featured => (
          <TouchableOpacity>
            <View marginR-10 marginB-10 width={150} center>
              <Image
                source={{uri: featured.Featured.image}}
                style={styles.CardImage}
                paddingV-5
                width={'100%'}
                height={125}
                center
              />
              <View style={styles.cardTextContainer}>
                <Text style={{color: '#363636', fontWeight: 'bold'}}>
                  {featured.Featured.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#f6bd2e'}}>
                    {featured.Featured.rate}
                  </Text>
                  <Icon name="star" color={'#f6bd2e'} size={12} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  CardImage: {
    zIndex: 999,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 7,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default FeaturedCard;
