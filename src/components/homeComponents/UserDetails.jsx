import {StyleSheet, View, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Formik} from 'formik';
import {CustomBtn, Error, Input} from '../common';
import {UserDetailsSchema} from '../../schema';

const UserDetails = () => {
  const [count, setCount] = useState(0);
  const [address, setAddress] = useState('');

  const handleFoamSubmission = async userData => {
    // console.log(userData);
    const data = await AsyncStorage.getItem(userData.email);
    console.log('data is ->' + data);
    if (data !== null) {
      Alert.alert('User already exist');
    } else {
      await AsyncStorage.setItem(userData.email, JSON.stringify(userData));
      Alert.alert('User is registered successfully');
    }
  };

  const uniqueKey = Math.random() * 1000;

  const addressLine = (
    <View key={uniqueKey} style={styles.addressCnt}>
      <Input
        customStyle={styles.address}
        placeholder="Enter Your Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <CustomBtn
        onPress={() => {
          setCount(count - 1);
        }}
        title={'-'}
        color={'white'}
        customStyle={styles.addBtn}
      />
    </View>
  );

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: '',
    cnfPassword: ''
  };

  return (
    <Formik
      initialValues={initialState}
      validateOnMount={true}
      validationSchema={UserDetailsSchema}
      onSubmit={handleFoamSubmission}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched, isValid}) => (
        <View style={styles.mainContainer}>
          <View style={styles.name}>
            <Input
              customStyle={styles.firstName}
              placeholder="First Name"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
            />
            <Input
              customStyle={styles.lastName}
              placeholder="Last Name"
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
            />
          </View>

          {errors.firstName && touched.firstName && <Error message={errors.firstName} />}

          <Input
            placeholder="Email Address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && touched.email && <Error message={errors.email} />}

          <View style={styles.addressCnt}>
            <Input
              customStyle={styles.address}
              placeholder="Enter Your Address"
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address}
            />
            <CustomBtn
              onPress={() => {
                setCount(count + 1);
              }}
              title={'+'}
              color={'white'}
              customStyle={styles.addBtn}
            />
          </View>
          {Array(count).fill(addressLine)}
          <Input
            placeholder="Enter Your Password"
            secureTextEntry={true}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {errors.password && touched.password && <Error message={errors.password} />}
          <Input
            placeholder="Confirm Your Password"
            secureTextEntry={true}
            onChangeText={handleChange('cnfPassword')}
            onBlur={handleBlur('cnfPassword')}
            value={values.cnfPassword}
          />
          {errors.cnfPassword && touched.cnfPassword && <Error message={errors.cnfPassword} />}

          <CustomBtn
            onPress={handleSubmit}
            title={'SUBMIT'}
            color={'white'}
            customStyle={styles.submitBtn}
          />
        </View>
      )}
    </Formik>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    paddingHorizontal: 20
  },
  name: {
    marginTop: 40,
    flexDirection: 'row'
  },
  firstName: {
    height: 40,
    width: 180,
    marginRight: 10
  },
  lastName: {
    height: 40,
    width: 180
  },
  submitBtn: {
    marginTop: 20,
    height: 40,
    width: '100%',
    borderRadius: 10
  },
  addBtn: {
    borderRadius: 10,
    height: 40,
    width: '15%',
    marginTop: 20,
    marginLeft: 10
  },
  addressCnt: {
    flexDirection: 'row'
  },
  address: {
    width: '82%'
  }
});
