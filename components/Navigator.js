import React from 'react'
import {createAppContainer, createSwitchNavigator} from'react-navigation'

import Home from '../src/index';
import Auth from '../src/Auth';

const mainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: Home
    }
}

const MainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Auth'
})

export default createAppContainer(MainNavigator)