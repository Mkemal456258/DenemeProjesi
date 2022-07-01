import React from 'react';
import {TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import FoodCategory from '../../Data/FoodCategory';
const foodcategoryCard = () => {
  return (
    <ScrollView
      horizontal={true}
      style={{paddingHorizontal: 10}}
      showsHorizontalScrollIndicator={false}>
      <View row>
        {FoodCategory.map(foodcategory => (
          <TouchableOpacity>
            <View marginR-10 marginB-10 width={90} center>
              <View
                style={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
                paddingV-5
                backgroundColor="white"
                width={'100%'}
                center>
                <Image
                  source={foodcategory.foodCategory.image}
                  style={styles.CardImage}
                />
              </View>
              <View style={styles.cardTextContainer}>
                <Text style={{color: '#363636'}}>
                  {foodcategory.foodCategory.name}
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
    height: 50,
    width: 50,
    zIndex: 999,
  },
  cardTextContainer: {
    backgroundColor: '#f6bd2e',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 7,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default foodcategoryCard;
