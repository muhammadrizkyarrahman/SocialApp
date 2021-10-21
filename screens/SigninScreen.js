import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';

const SigninScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          source={require('../assets/Logo/Logo-img.png')}
          style={styles.logoStyle}
        />
        <Text style={styles.titleText}>SocialMoslem</Text>
      </View>
      <FormInput
        labelValue={email}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <FormInput
        labelValue={password}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <FormButton buttonTitle="Sign in" onPress={() => {}} />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.navText}>Forgot Password?</Text>
      </TouchableOpacity>
      <SocialButton
        backgroundColor="#b3e5fc"
        iconType="facebook"
        color="#3b5998"
        buttonTitle="Facebook"
        onPress={() => {}}
      />
      <SocialButton
        backgroundColor="#ffccbc"
        iconType="google"
        color="#db4a39"
        buttonTitle="Google"
        onPress={() => {}}
      />
      <View style={styles.navTextContainer}>
        <Text style={styles.navText}>Don't have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={[styles.navText, {color: '#ffca28'}]}>create here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerWrapper: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4db6ac',
  },
  navTextContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  navText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4db6ac',
    marginBottom: 10,
    marginTop: -10,
  },
});
