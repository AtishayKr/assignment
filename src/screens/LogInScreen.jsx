import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Error, Input, CustomBtn, Header } from '../components/common';
import { loginSchema } from '../schema';
import { Usercontext } from '../context/UserContextProvider';

const LogInScreen = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(Usercontext)

  const handleFormSubmission = async value => {
    console.log(value);
    const data = JSON.parse(await AsyncStorage.getItem(value.email));
    console.log('data is ->' + data);
    if (data === null) {
      Alert.alert('User with this email is not exist');
    } else {
      if (data.password === value.password) {
        await AsyncStorage.setItem("loggedInUser", JSON.stringify(data));
        setUser(data);
        console.log("login data  => " + data);
        Alert.alert('User is successfully login');
      } else {
        Alert.alert("Wrong email id and password")
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
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
        <>
          <Header title={"LOGIN"} leftIcon={true} />
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
        </>
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
