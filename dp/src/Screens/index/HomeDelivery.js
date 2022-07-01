import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Text} from 'react-native-ui-lib';
import FoodcategoryCard from '../../Components/FoodcategoryCard';
import FeaturedCard from '../../Components/FeaturedCard';
import NewrestaurantCard from '../../Components/NewrestaurantCard';
import Inregion from '../../Components/InregionCard';
import {useNavigation} from '@react-navigation/native';

const HomeDelivery = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View marginV-10 marginH-15 row>
        <TouchableOpacity style={styles.filterbtn}>
          <Icon name="sliders-h" size={18} />
          <Text text80 black marginL-5>
            Filter
          </Text>
        </TouchableOpacity>
        <View style={styles.searchbtn}>
          <TextInput placeholder="Search Restaurant" />
          <TouchableOpacity>
            <Icon name="search" size={18} color={'#767676'} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text black marginV-10 marginH-20 style={styles.categoryTitles}>
          Food categories
        </Text>
        <View>
          <FoodcategoryCard />
        </View>
        <Text black marginV-10 marginH-20 style={styles.categoryTitles}>
          Featured
        </Text>
        <View>
          <FeaturedCard />
        </View>
        <Text black marginV-10 marginH-25 style={styles.categoryTitles}>
          Newly added restaurants
        </Text>
        <View>
          <NewrestaurantCard />
        </View>
        <Text black marginT-5 marginH-25 style={styles.categoryTitles}>
          Restaurants in the region
        </Text>
        <View>
          <Inregion onPress={() => navigation.navigate('Details')} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryTitles: {
    fontWeight: '400',
    fontSize: 14,
  },
  CardImage: {
    height: 100,
    width: 100,
    zIndex: 999,
  },
  cardTextContainer: {
    backgroundColor: '#f6bd2e',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 7,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  searchbtn: {
    backgroundColor: '#ececee',
    paddingHorizontal: 15,
    borderRadius: 25,
    marginLeft: 10,
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6bd2e',
    width: '22%',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 25,
  },
});

export default HomeDelivery;
