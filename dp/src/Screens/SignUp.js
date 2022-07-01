import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import {Button, Checkbox} from 'react-native-ui-lib';
const SignUp = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.SignupContainer}>
          <View style={styles.InputStyle}>
            <TextInput
              placeholder="E-mail * "
              keyboardType="email-address"
              style={{color: '#a9a9a9', paddingLeft: 20}}
            />
          </View>

          <View style={styles.InputStyle}>
            <TextInput
              placeholder="Password * "
              keyboardType="default"
              secureTextEntry
              style={{color: '#a9a9a9', paddingLeft: 20}}
            />
          </View>

          <View style={styles.InputStyle}>
            <TextInput
              placeholder="Re-enter password * "
              keyboardType="default"
              secureTextEntry
              style={{color: '#a9a9a9', paddingLeft: 20}}
            />
          </View>
        </View>

        <View style={styles.SignupContainer}>
          <View style={styles.InputStyle}>
            <TextInput
              placeholder="First name * "
              keyboardType="default"
              style={{color: '#a9a9a9', paddingLeft: 20}}
            />
          </View>

          <View style={styles.InputStyle}>
            <TextInput
              placeholder="Last name * "
              keyboardType="default"
              secureTextEntry
              style={{color: '#a9a9a9', paddingLeft: 20}}
            />
          </View>

          <View style={styles.InputStyle}>
            <TextInput
              placeholder="Phone number * "
              keyboardType="phone-pad"
              secureTextEntry
              maxLength={11}
              style={{color: '#a9a9a9', paddingLeft: 20}}
            />
          </View>
          <Checkbox
            value={isSelected}
            color={'black'}
            label={
              <Text>
                I accept the{' '}
                <Text style={{color: '#f6bd2e', fontWeight: 'bold'}}>
                  terms & conditions
                </Text>
              </Text>
            }
            size={20}
            labelStyle={{color: '#9b9b9b', fontSize: 12}}
            onValueChange={setSelection}
            style={{
              backgroundColor: '#ebebeb',
              borderWidth: 0,
            }}
          />
          <Button
            label={'Continue'}
            size={Button.sizes.medium}
            black
            style={{backgroundColor: '#f6bd2e', height: 50, marginTop: 20}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SignupContainer: {
    padding: 15,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 15,
    elevation: 3,
  },
  InputStyle: {
    backgroundColor: '#f8f9fb',
    borderRadius: 25,
    elevation: 1,
    marginBottom: 30,
    justifyContent: 'center',
    height: 60,
  },
});

export default SignUp;
