import React, { useContext, useEffect, useState } from 'react';
import { View, Image, StyleSheet, ImageBackground, Text } from 'react-native';
import Icons from 'react-native-vector-icons/Entypo'
// import { Usercontext } from '../../context/UserContextProvider';
import { useDispatch, useSelector } from 'react-redux';
// import { addItem, removeItem } from '../../store/myCartAction';
import { add, remove } from '../../store/myCartSlice';

const Card = ({ uri, customStyle, id, isChecked }) => {
    const [checked, setChecked] = useState(isChecked ? isChecked : false);

    // const { cart, setCart } = useContext(Usercontext);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.value);
    const onPressHandle = (id) => {
        setChecked((checked) => !checked);
    }

    useEffect(() => {

        if (checked === true) {
            { !cart.includes(id) && dispatch(add(id)) }
        } else {
            dispatch(remove(id));
        }
    }, [checked])

    return (
        <>
            <View style={styles.container}>
                <Image source={{ uri: uri }} style={[styles.image, customStyle]} />
                <Icons onPress={onPressHandle} style={styles.icon} name={checked ? "heart" : "heart-outlined"} size={40} color={"red"} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginHorizontal: 10,
    },
    image: {
        width: 350,
        height: 200,
        borderRadius: 15,
    },
    icon: {
        position: 'absolute',

    }
});

export default Card;
