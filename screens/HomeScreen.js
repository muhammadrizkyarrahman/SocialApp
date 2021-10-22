import React, {useContext, useReducer} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>HomeScreen {user.uid}</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
