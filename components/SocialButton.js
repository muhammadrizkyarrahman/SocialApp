import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';

const SocialButton = ({
  backgroundColor,
  color,
  iconType,
  buttonTitle,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome name={iconType} size={24} color={color} />
      </View>
      {/* <View style={styles.buttonTextWrapper}> */}
      <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      {/* </View> */}
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: windowHeight / 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: 'row',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 30,
  },
  buttonTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
