import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {SplashStackNavigator} from './navig/navigator'



export default class App extends React.Component {
    render() {
        return(
            <NavigationContainer>
            <SplashStackNavigator/>
            </NavigationContainer>
            
        );
    }
}