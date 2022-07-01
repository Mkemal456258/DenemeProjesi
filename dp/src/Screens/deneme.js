import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useQuery, gql} from '@apollo/client';

const Deneme = () => {
  const GET_USERS = gql`
    {
      users(roles: CUSTOMER) {
        firstName
        lastName
        email
        role
        password
      }
    }
  `;

  const {data, loading, error} = useQuery(GET_USERS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>error...</Text>;
  return (
    <SafeAreaView>
      <View>
        {data.users.map(us => (
          <Text
            style={{
              color: 'black',
              backgroundColor: 'red',
            }}>
            {us.firstName}: {us.lastName} {us.email} {us.password}
          </Text>
        ))}
      </View>
      <View>
        <FlatList
          data={data.users}
          renderItem={({item}) => (
            <Text>
              {item.firstName} {item.lastName}
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default Deneme;
