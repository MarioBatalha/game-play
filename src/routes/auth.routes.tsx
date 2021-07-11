import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';
import Home from '../screens/Home';
import SignIn from '../screens/Signin';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Navigator intialState='SignIn'>
             <Screen
              name='SignIn'
              component={SignIn}              
             />

            <Screen
              name='Home'
              component={Home}              
             />
        </Navigator>
    );
}

export default AuthRoutes;