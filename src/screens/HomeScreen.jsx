import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import ProfilePic from '../components/homeComponents/ProfilePic';
import UserDetails from '../components/homeComponents/UserDetails';

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <ProfilePic />
          <UserDetails />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center'
  }
});
