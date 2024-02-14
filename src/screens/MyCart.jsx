import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { dummyData } from '../data/dummyData'
import { Usercontext } from '../context/UserContextProvider'
import { FlatList } from 'react-native-gesture-handler'
import { Card, Header } from '../components/common'
import { useSelector } from 'react-redux'

const MyCart = () => {
    // const { cart } = useContext(Usercontext);
    const cart = useSelector((value) => value.cart)
    const [newData, setNewData] = useState([]);

    let newRenderData;

    useEffect(() => {
        newRenderData = dummyData.filter(item => cart.includes(item.id))
        // console.log(newRenderData)
        setNewData(newRenderData);
    }, [cart])

    return (
        <>
            <Header title={"MYCART"} leftIcon={true} rightIcon={true} />
            <View style={styles.mainContainer}>
                <View style={styles.verticalSection}>
                    <FlatList
                        data={newData}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Card
                                uri={item.download_url}
                                id={item.id}
                                isChecked={true}
                            />
                            // <Text>"atishay"</Text>
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