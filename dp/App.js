import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

import Icon from 'react-native-vector-icons/FontAwesome5';

import SignIn from './src/Screens/SignIn';
import SignUp from './src/Screens/SignUp';
import Home from './src/Screens/index/Home';
import Order from './src/Screens/Order';
import Basket from './src/Screens/Basket';
import Contact from './src/Screens/Contact';
import Other from './src/Screens/Other';
import deneme from './src/Screens/deneme';
import Details from './src/Screens/Restaurant/Details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#feb103',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          paddingBottom: 7,
          paddingTop: 7,
          marginBottom: 20,
          marginHorizontal: 20,
          borderRadius: 50,
          shadowColor: 'white',
          borderTopColor: 'white',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarItemStyle: {borderRightWidth: 1, borderRightColor: '#fafafa'},
          title: 'Home',
          headerShown: false,
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 11},
          tabBarIcon: props => <Icon name="store" {...props} />,
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarItemStyle: {borderRightWidth: 1, borderRightColor: '#fafafa'},
          title: 'Order',
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 11},
          tabBarIcon: props => <Icon name="utensils" {...props} />,
        }}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{
          tabBarItemStyle: {borderRightWidth: 1, borderRightColor: '#fafafa'},
          title: 'Basket',
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 11},
          tabBarIcon: props => <Icon name="shopping-basket" {...props} />,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarItemStyle: {borderRightWidth: 1, borderRightColor: '#fafafa'},
          title: 'Contact',
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 11},
          tabBarIcon: props => <Icon name="comment-dots" {...props} />,
        }}
      />
      <Tab.Screen
        name="Other"
        component={Other}
        options={{
          title: 'Other',
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 11},
          tabBarIcon: props => <Icon name="bars" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const client = new ApolloClient({
  uri: 'http://foodabout-api.flycep.com/graphql/',
  cache: new InMemoryCache(),
});

export default function () {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="HomeBottom"
            component={HomeBottom}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerShadowVisible: false,
              title: 'Restaurant details',
              headerRight: props => (
                <View style={{marginLeft: 10}}>
                  <Icon
                    name="search"
                    size={20}
                    color={'black'}
                    onPress={() => alert('Soon...')}
                    {...props}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="deneme"
            component={deneme}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
