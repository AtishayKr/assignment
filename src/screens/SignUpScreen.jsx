import {KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProfilePic, UserDetails} from '../components/homeComponents';
import {useNavigation} from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <ProfilePic />
          <UserDetails />
          <Text style={styles.text}>
            Already have an account?{' '}
            <Text
              style={styles.register}
              onPress={() => {
                navigation.push('LogIn');
              }}>
              LogIn
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center'
  },
  text: {
    marginTop: 20,
    fontSize: 18
  },
  register: {
    fontWeight: 'bold'
  }
});
