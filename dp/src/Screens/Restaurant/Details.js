import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native-ui-lib';

import Menus from './Menus';
import CommentsList from '../../Components/CommentsList';

const Informations = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Informations</Text>
      </View>
    </SafeAreaView>
  );
};

const Comments = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View margin-20>
          <CommentsList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Tab = createMaterialTopTabNavigator();

const Details = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            textTransform: 'capitalize',
            fontWeight: '500',
            fontSize: 15,
          },
        }}>
        <Tab.Screen
          name="Menus"
          component={Menus}
          options={{
            tabBarActiveTintColor: '#f6bd2e',
            tabBarInactiveTintColor: 'black',
            title: 'Menus',
            tabBarIndicatorStyle: {backgroundColor: '#f6bd2e', height: 4},
          }}
        />
        <Tab.Screen
          name="Informations"
          component={Informations}
          options={{
            tabBarActiveTintColor: '#f6bd2e',
            tabBarInactiveTintColor: 'black',
            title: 'Informations',
            tabBarIndicatorStyle: {backgroundColor: '#f6bd2e', height: 4},
          }}
        />
        <Tab.Screen
          name="Comments"
          component={Comments}
          options={{
            tabBarActiveTintColor: '#f6bd2e',
            tabBarInactiveTintColor: 'black',
            title: 'Comments',
            tabBarIndicatorStyle: {backgroundColor: '#f6bd2e', height: 4},
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Details;
