import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CustomBtn, Header } from '../components/common';

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <Header title={"Welcome"} />
      <View style={styles.mainContainer}>

        <View style={styles.WelcomeMsg}>
          <Text style={styles.text}>WELCOME TO KRENAI</Text>
        </View>
        <View style={styles.BtnCont}>
          <CustomBtn
            title={'LOGIN'}
            customStyle={styles.BtnCustomSty}
            color={'white'}
            onPress={() => navigation.push('LogIn')}
          />
          <CustomBtn
            title={'SIGNUP'}
            customStyle={styles.BtnCustomSty}
            color={'white'}
            onPress={() => navigation.push('SignUp')}
          />
        </View>
      </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  WelcomeMsg: {
    width: '100%'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold'
  },
  BtnCont: {
    marginTop: 50,
    flexDirection: 'row'
  },
  BtnCustomSty: {
    height: 40,
    width: '45%',
    marginRight: 12,
    borderRadius: 10
  }
});
