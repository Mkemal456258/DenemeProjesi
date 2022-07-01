import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text, Checkbox, Button} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
const SignIn = () => {
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={false} backgroundColor={'orange'} />
      <ImageBackground
        source={require('../img/bg.jpg')}
        style={styles.StyledBg}>
        <View style={styles.StyledSignInContainer}>
          <Text style={{color: '#b4b4b4', alignSelf: 'center', fontSize: 13}}>
            with your social network
          </Text>
          <View style={styles.StyledSocialContainer}>
            <TouchableOpacity>
              <View style={styles.StyledGoogleButton}>
                <Icon name="google" color={'white'} size={24} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.StyledFacebookButton}>
                <Icon name="facebook-f" color={'white'} size={24} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{backgroundColor: '#e3e3e3', height: 1, flex: 1}} />
            <Text style={{paddingHorizontal: 20, color: '#9b9b9b'}}>or</Text>
            <View style={{backgroundColor: '#e3e3e3', height: 1, flex: 1}} />
          </View>
          <View style={styles.StyledInputContainer}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 25,
                elevation: 1,
              }}>
              <Icon
                name="user-alt"
                size={22}
                color={'#a9a9a9'}
                style={{alignSelf: 'center', marginLeft: 15, marginRight: 5}}
              />
              <TextInput
                placeholder="User name / E-mail / Phone number"
                keyboardType="default"
                style={{color: '#a9a9a9'}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 25,
                elevation: 1,
                marginTop: 15,
              }}>
              <Icon
                name="unlock-alt"
                size={22}
                color={'#a9a9a9'}
                style={{alignSelf: 'center', marginLeft: 15, marginRight: 5}}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                width={'75%'}
                style={{color: '#a9a9a9'}}
              />
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  marginLeft: 15,
                  marginRight: 5,
                }}>
                <Icon name="eye-slash" size={15} color={'#a9a9a9'} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginVertical: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Checkbox
                value={isSelected}
                color={'black'}
                label={'Remember me'}
                size={20}
                labelStyle={{color: '#9b9b9b', fontSize: 12}}
                onValueChange={setSelection}
                style={{
                  backgroundColor: '#ebebeb',
                  borderWidth: 0,
                }}
              />
              <TouchableOpacity>
                <Text style={{color: '#9b9b9b', fontSize: 12}}>
                  Forgat password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Button
            onPress={() => navigation.navigate('HomeBottom')}
            label={'Sign in'}
            size={Button.sizes.medium}
            black
            style={{backgroundColor: '#f6bd2e', height: 50}}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{alignSelf: 'center', color: '#9b9b9b', marginVertical: 10}}>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  StyledBg: {
    flex: 1,
    justifyContent: 'center',
  },
  StyledSignInContainer: {
    backgroundColor: 'white',
    height: 420,
    marginHorizontal: 10,
    borderRadius: 25,
    padding: 15,
  },
  StyledSocialContainer: {
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  StyledGoogleButton: {
    backgroundColor: '#dd4c39',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: 175,
    borderRadius: 25,
  },
  StyledFacebookButton: {
    backgroundColor: '#3b5999',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: 175,
    borderRadius: 25,
  },
  StyledInputContainer: {
    marginVertical: 10,
  },
});

export default SignIn;
