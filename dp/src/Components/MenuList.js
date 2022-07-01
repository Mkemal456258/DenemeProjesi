import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Image, Button} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MenuListData from '../../Data/MenuListData';

const MenuList = () => {
  return (
    <View>
      {MenuListData.map(menulistdata => (
        <View
          style={{
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#cdcdcd',
          }}>
          <View margin-10 row style={{justifyContent: 'flex-start'}}>
            <Image
              source={{
                uri: menulistdata.MenuList.image,
              }}
              style={styles.CardImage}
            />

            <View marginL-20>
              <Text black marginV-5 style={{fontSize: 15, fontWeight: '500'}}>
                {menulistdata.MenuList.name}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  maxWidth: 210,
                  textAlign: 'justify',
                }}>
                {menulistdata.MenuList.information}
              </Text>
            </View>
            <View right flexG>
              <View marginR-10 marginV-3>
                <Text
                  color="#f6bd2e"
                  style={{fontWeight: '500', maxWidth: 60, fontSize: 16}}>
                  € {menulistdata.MenuList.price}
                </Text>
              </View>
              <View margin-10>
                <TouchableOpacity>
                  <View
                    padding-6
                    backgroundColor="#cdcdcd"
                    style={{borderRadius: 3}}>
                    <Icon name="plus" color={'white'} size={14} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  CardImage: {
    height: 60,
    width: 60,
  },
});

export default MenuList;
