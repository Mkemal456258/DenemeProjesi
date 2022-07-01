import React, {setState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';
import {Avatar} from 'react-native-ui-lib';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import HomeDelivery from './HomeDelivery';

const SecondRoute = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View>
      <Text>...</Text>
    </View>
  </ScrollView>
);

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 10,
          marginVertical: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="map-marker-alt" size={20} color={'#000'} />
          <Picker
            dropdownIconColor={'black'}
            style={{
              width: '75%',
              color: 'black',
            }}>
            <Picker.Item label="Selected Location" value="0" enabled={false} />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
          </Picker>
        </View>
        <View style={{marginTop: 5}}>
          <Avatar
            label={'MKA'}
            backgroundColor={'#f6bd2e'}
            labelColor={'black'}
            size={42}
          />
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            textTransform: 'capitalize',
            fontWeight: '500',
            fontSize: 15,
          },
        }}>
        <Tab.Screen
          name="Delivery"
          component={HomeDelivery}
          options={{
            tabBarActiveTintColor: '#f6bd2e',
            tabBarInactiveTintColor: 'black',
            title: 'Delivery',
            tabBarIndicatorStyle: {backgroundColor: '#f6bd2e', height: 4},
          }}
        />
        <Tab.Screen
          name="Pickup"
          component={SecondRoute}
          options={{
            tabBarActiveTintColor: '#f6bd2e',
            tabBarInactiveTintColor: 'black',
            title: 'Pickup',
            tabBarIndicatorStyle: {backgroundColor: '#f6bd2e', height: 4},
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Home;
