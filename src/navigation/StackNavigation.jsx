import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, WelcomeScreen, SignUpScreen, LogInScreen, MyCart } from '../screens';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Usercontext } from '../context/UserContextProvider';

const Stack = createStackNavigator();
const StackNavigation = () => {
  const [userData, setUserData] = useState(null);
  const { user } = useContext(Usercontext);

  const getData = async () => {
    const data = JSON.parse(await AsyncStorage.getItem("loggedInUser"));
    setUserData(data);
  }

  useEffect(() => {
    getData();
  }, [user])


  return (
    <Stack.Navigator>
      {userData ? <><Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyCart" component={MyCart} options={{ headerShown: false }} /></>
        :
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LogIn" component={LogInScreen} options={{ headerShown: false }} />
        </>}


    </Stack.Navigator>
  );
};

export default StackNavigation;
