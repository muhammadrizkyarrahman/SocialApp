import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => {
  return (
    <TouchableOpacity style={styles.navSkipWrapper} {...props}>
      <Text style={styles.navSkipText}>Skip</Text>
    </TouchableOpacity>
  );
};

const Next = ({...props}) => {
  return (
    <TouchableOpacity style={styles.navWrapper} {...props}>
      <Text style={styles.navText}>Next</Text>
    </TouchableOpacity>
  );
};

const Done = ({...props}) => {
  return (
    <TouchableOpacity style={styles.navWrapper} {...props}>
      <Text style={styles.navText}>Done</Text>
    </TouchableOpacity>
  );
};

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Signin')}
      onDone={() => navigation.navigate('Signin')}
      bottomBarHighlight={false}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/Onboarding-Img/onboarding-img1.png')}
              style={styles.onboardingImage}
            />
          ),
          title: <Text style={styles.titleOnboarding}>Read Qur'an</Text>,
          subtitle: (
            <Text style={styles.subtitleOnboarding}>
              Done with React Native Onboarding Swiper'
            </Text>
          ),
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/Onboarding-Img/onboarding-img2.png')}
              style={styles.onboardingImage}
            />
          ),
          title: <Text style={styles.titleOnboarding}>Adzan</Text>,
          subtitle: (
            <Text style={styles.subtitleOnboarding}>
              Done with React Native Onboarding Swiper'
            </Text>
          ),
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/Onboarding-Img/onboarding-img3.png')}
              style={styles.onboardingImage}
            />
          ),
          title: <Text style={styles.titleOnboarding}>Qibla Compass</Text>,
          subtitle: (
            <Text style={styles.subtitleOnboarding}>
              Done with React Native Onboarding Swiper'
            </Text>
          ),
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardingImage: {
    width: 100,
    height: 100,
  },
  titleOnboarding: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4db6ac',
  },
  subtitleOnboarding: {
    fontSize: 14,
    color: '#ffca28',
  },
  navSkipWrapper: {
    backgroundColor: '#fff',
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4db6ac',
  },
  navSkipText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4db6ac',
  },
  navWrapper: {
    backgroundColor: '#4db6ac',
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
  },
  navText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
