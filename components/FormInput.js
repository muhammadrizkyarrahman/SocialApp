import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {windowHeight} from '../utils/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.iconWrapper}>
        <AntDesign name={iconType} size={24} color="#666" />
      </View>
      <TextInput
        style={styles.input}
        value={labelValue}
        placeholder={placeholderText}
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    height: windowHeight / 15,
    marginBottom: 20,
    flexDirection: 'row',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
  },
});
