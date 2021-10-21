import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Provider from './navigation';

const App = () => {
  return (
    <>
      <StatusBar translucent={false} backgroundColor="transparent" />
      <Provider />
    </>
  );
};

export default App;
