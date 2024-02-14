import React, { useContext, useEffect, useState } from 'react';
import { View, Image, StyleSheet, ImageBackground, Text } from 'react-native';
import Icons from 'react-native-vector-icons/Entypo'
// import { Usercontext } from '../../context/UserContextProvider';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/myCartAction';

const Card = ({ uri, customStyle, id, filled }) => {
    const [checked, setChecked] = useState(false);

    // const { cart, setCart } = useContext(Usercontext);
    const dispatch = useDispatch();
    const onPressHandle = (id) => {
        setChecked((checked) => !checked);
    }

    useEffect(() => {
        if (checked === true) {
            // setCart((value) => [...value, id]);
            dispatch(addItem({ id }));
        } else {
            // setCart((value) => value.filter((item => item != id)))
            dispatch(removeItem({ id }));
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
