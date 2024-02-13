import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ title, leftIcon, rightIcon, leftIconPress, rightIconPress }) => {

    const pressHandle = () => {
        console.log("pressed")
    }

    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
            {leftIcon ? <TouchableHighlight onPress={() => navigation.goBack()}><Image style={styles.leftIcon} source={require('../../assets/BackIcon.png')} /></TouchableHighlight> : <Text>{" "}</Text>}
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.rightContainer} >
                {rightIcon ? rightIcon : <Text>{" "} </Text>}
            </View>
        </View >
    )
}

export default Header

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: '100%',
        // backgroundColor: 'gray'
    },
    leftIcon: {
        height: 25,
        width: 35
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

})
