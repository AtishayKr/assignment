import {StyleSheet, View, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import Input from '../common/Input';
import CustomBtn from '../common/CustomBtn';

const UserDetails = () => {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setcnfPassword] = useState('');

  const handlePress = async () => {
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      cnfPassword.length === 0
    ) {
      Alert.alert('Please Enter all required fields');
    } else if (password !== cnfPassword) {
      Alert.alert("Password an CnfPassword doesn't matched");
    } else {
      const obj = {
        firstName,
        lastName,
        email,
        address,
        password,
        cnfPassword
      };

      let data = '';
      try {
        data = JSON.parse(await AsyncStorage.getItem(email));
      } catch (error) {
        console.log(error);
      }

      if (data.length !== 0) {
        Alert.alert('User already exist');
      } else {
        try {
          await AsyncStorage.setItem(email, JSON.stringify(obj));
        } catch (error) {
          console.log(error);
        }
        Alert.alert('User is registered successfully');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setcnfPassword('');
        setAddress('');
      }
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

  return (
    <View style={styles.mainContainer}>
      <View style={styles.name}>
        <Input
          customStyle={styles.firstName}
          placeholder="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <Input
          customStyle={styles.lastName}
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
      </View>

      <Input placeholder="Email Address" value={email} onChangeText={text => setEmail(text)} />

      <View style={styles.addressCnt}>
        <Input
          customStyle={styles.address}
          placeholder="Enter Your Address"
          value={address}
          onChangeText={text => setAddress(text)}
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
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Input
        placeholder="Confirm Your Password"
        secureTextEntry={true}
        value={cnfPassword}
        onChangeText={text => setcnfPassword(text)}
      />

      <CustomBtn
        onPress={handlePress}
        title={'SUBMIT'}
        color={'white'}
        customStyle={styles.submitBtn}
      />
    </View>
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
