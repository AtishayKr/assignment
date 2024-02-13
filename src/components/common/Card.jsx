import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Card = ({ uri, customStyle }) => {
    // console.log(uri);
    //   const imgUri = 'https://picsum.photos/id/0/5000/3333';
    return (
        <View style={styles.container}>
            <Image source={{ uri: uri }} style={[styles.image, customStyle]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // marginTop: 25,
        marginBottom: 20,
        marginHorizontal: 10
    },
    image: {
        backgroundColor: 'gray',
        width: 350,
        height: 200,
        borderRadius: 20,
    },
});

export default Card;
