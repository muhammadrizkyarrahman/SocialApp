import React, {useContext, useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassrord, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

  return (
    <ScrollView>
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

        <FormInput
          labelValue={confirmPassrord}
          placeholderText="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
          onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        />

        <FormButton
          buttonTitle="Sign Up"
          onPress={() => register(email, password)}
        />

        <View style={{marginTop: -10, flexDirection: 'row'}}>
          <Text style={styles.textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms of service Clicked')}>
            <Text style={[styles.textPrivate, {color: 'crimson'}]}>
              Terms of service
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 10, flexDirection: 'row'}}>
          <Text style={styles.textPrivate}>and </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.textPrivate, {color: 'crimson'}]}>
              Privacy policy
            </Text>
          </TouchableOpacity>
        </View>

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
          <Text style={styles.navText}>Have account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={[styles.navText, {color: '#ffca28'}]}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

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
  textPrivate: {
    fontSize: 10,
    fontWeight: '500',
    color: '#000',
  },
});
