import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'
// import { Usercontext } from '../../context/UserContextProvider'
import { useSelector } from 'react-redux'

const Header = ({ title, leftIcon, rightIcon, leftIconPress, rightIconPress }) => {

    // const { cart } = useContext(Usercontext);
    // const cart = useSelector((value) => value.cart);
    const cart = useSelector((state) => state.cart.value)
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            {leftIcon ? <TouchableHighlight onPress={() => navigation.goBack()}><Image style={styles.leftIcon} source={require('../../assets/BackIcon.png')} /></TouchableHighlight> : <Text>{" "}</Text>}
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.rightContainer} >
                {rightIcon ? <>
                    <View style={styles.textCont}>
                        <Text style={styles.text}>{cart.length}</Text>
                    </View>
                    <Icons onPress={() => navigation.push("MyCart")} name="heart-outlined" size={40} /></>
                    : <Text>{" "}</Text>}
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
        fontSize: 25,
        fontWeight: 'bold'
    },
    textCont: {
        position: 'absolute',
        zIndex: 100,
        marginTop: 20,
        marginLeft: 6,
        height: 28,
        width: 28,
        borderRadius: 14,
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontSize: 20,
        borderRadius: 50,
        alignSelf: 'center',
    }

})
