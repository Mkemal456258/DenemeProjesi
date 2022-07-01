import React from 'react';
import {TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import newRestaurant from '../../Data/newRestaurant';
const NewrestaurantCard = () => {
  return (
    <ScrollView
      horizontal={true}
      style={{paddingLeft: 10, paddingRight: 10}}
      showsHorizontalScrollIndicator={false}>
      <View row marginR-10>
        {newRestaurant.map(newrestaurant => (
          <TouchableOpacity>
            <View marginR-10 marginB-10 width={150} center>
              <Image
                source={{uri: newrestaurant.newRestaurant.image}}
                style={styles.CardImage}
                paddingV-5
                width={'100%'}
                height={125}
                center
              />
              <View style={styles.cardTextContainer}>
                <Text style={{color: '#363636', fontWeight: 'bold'}}>
                  {newrestaurant.newRestaurant.name}
                </Text>
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

export default NewrestaurantCard;
