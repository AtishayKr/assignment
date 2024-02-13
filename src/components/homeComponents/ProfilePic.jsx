import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

export default function ProfilePic() {
  const [picUri, setPicUri] = useState('');

  const pressHandle = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('user cencil the action');
      } else if (response.errorCode) {
        console.log(`Error while openig the gallery ${response.errorCode}`);
      } else if (response.errorMessage) {
        console.log(`error message is ${response.errorMessage}`);
      } else {
        // console.log(response.assets[0].uri);
        setPicUri(response.assets[0].uri);
      }
    });
  };

  return (
    <TouchableOpacity onPress={pressHandle}>
      <View style={styles.profilePic}>
        {picUri === '' ? (
          <Text>Upload Pic</Text>
        ) : (
          <Image
            style={styles.img}
            source={{
              uri: picUri
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profilePic: {
    marginTop: 20,
    marginHorizontal: 5,
    borderWidth: 2,
    width: 200,
    height: 200,
    borderRadius: 80,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: 'gray'
  }
});
