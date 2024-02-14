import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { dummyData } from '../data/dummyData'
import { Usercontext } from '../context/UserContextProvider'
import { FlatList } from 'react-native-gesture-handler'
import { Card, Header } from '../components/common'

const MyCart = () => {
    const { cart } = useContext(Usercontext);

    let newRenderData;

    useEffect(() => {
        newRenderData = dummyData.filter(item => { cart.includes(item.id) });
        console.log("newRenderData => " + newRenderData)
        console.log("cart data => " + cart)
    }, [cart])
    return (
        <>
            <Header title={"MYCART"} leftIcon={true} rightIcon={true} />
            <View style={styles.mainContainer}>
                <View style={styles.verticalSection}>
                    <FlatList
                        data={newRenderData}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Card
                                uri={item.download_url}
                                id={item.id}
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </>
    )
}

export default MyCart

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    btn: {
        height: 40,
        width: "100%",
        borderRadius: 10,
    },
    verticalSection: {
        marginBottom: 10,
        alignItems: 'center',
        height: 700

    }
})