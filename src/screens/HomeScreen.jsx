import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Card, CustomBtn, Header } from '../components/common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Usercontext } from '../context/UserContextProvider';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardData } from '../store/cardData';
// import { dummyData } from '../data/dummyData';


const HomeScreen = () => {

  const { user, setUser } = useContext(Usercontext);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.cardData);

  useEffect(() => {
    dispatch(fetchCardData());
  }, [dispatch])

  const getData = async () => {
    const data = JSON.parse(await AsyncStorage.getItem("loggedInUser"))
    const currUserData = JSON.parse(await AsyncStorage.getItem(data.email));
    console.log("currUserData => " + currUserData);
  }

  useEffect(() => {
    getData();
  }, [])

  const logOut = async () => {
    await AsyncStorage.removeItem("loggedInUser");
    setUser(null);
    Alert.alert("user is loggedOut");
  }
  return (
    <>
      <Header title={"HOME"} rightIcon={true} />
      <View style={styles.mainContainer}>
        <View style={styles.verticalSection}>

          {loading ? <ActivityIndicator size={'large'} /> : <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={<Text>Nothing to Show</Text>}
            renderItem={({ item }) => (
              <Card
                // customStyle={styles.verticalSectionCard}
                uri={item.download_url}
                id={item.id}
              />
            )}
            keyExtractor={item => item.id}
          />}

        </View>
        <CustomBtn onPress={logOut} customStyle={styles.btn} title={"LOGOUT"} color={'white'} />
      </View>
    </>
  );
};

export default HomeScreen;

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
