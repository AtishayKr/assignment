import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Error, Input, CustomBtn} from '../components/common';
import {loginSchema} from '../schema';

const LogInScreen = () => {
  const navigation = useNavigation();

  const handleFormSubmission = async value => {
    console.log(value);
    const data = JSON.parse(await AsyncStorage.getItem(value.email));
    console.log('data is ->' + data);
    if (data === null) {
      Alert.alert('User with this email is not exist');
    } else {
      if (data.password === value.password) {
        Alert.alert('User is successfully login');
      }
    }
  };

  const initialState = {
    email: '',
    password: ''
  };

  return (
    <Formik
      initialValues={initialState}
      validateOnMount={true}
      validationSchema={loginSchema}
      onSubmit={handleFormSubmission}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched, isValid}) => (
        <View style={styles.mainContainer}>
          <View style={styles.logInform}>
            <Input
              placeholder={'Enter Your Email'}
              customStyle={styles.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email && <Error message={errors.email} />}
            <Input
              placeholder={'Enter Your Password'}
              customStyle={styles.password}
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && touched.password && <Error message={errors.password} />}
          </View>
          <CustomBtn
            customStyle={styles.logInBtn}
            title={'LOGIN'}
            color={'white'}
            onPress={handleSubmit}
          />
          <Text style={styles.text}>
            Don't have an account?{' '}
            <Text
              style={styles.register}
              onPress={() => {
                navigation.push('SignUp');
              }}>
              Register
            </Text>
          </Text>
        </View>
      )}
    </Formik>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  logInform: {
    width: '100%'
  },
  logInBtn: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    marginTop: 20
  },
  text: {
    marginTop: 20,
    fontSize: 18
  },
  register: {
    fontWeight: 'bold'
  }
});
