import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from '.';

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}

export default AppNavigation