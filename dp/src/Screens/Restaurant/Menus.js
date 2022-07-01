import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import MenuList from '../../Components/MenuList';
import MenusTopcard from '../../Components/MenusTopcard';
const Menus = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <MenusTopcard />
        </View>
        <View>
          <MenuList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menus;
