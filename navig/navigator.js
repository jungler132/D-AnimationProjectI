import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {LoadingScreen} from '../loadingScreen/ScreenTwo'
import SplashScreen from '../splashScreen/SplashScreen'

const splashStack = createStackNavigator();

// function Splash({navigation}) {`
//     return(
//         <View style={{flex:1}}>
//             <SplashScreen/>
//             <TouchableOpacity onPress={() => navigation.navigate("newsScreen")} style={{flex:1 , backgroundColor:"red"}}>
//                 <Text>
//                     BUTTON
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     )
// }
export class SplashStackNavigator extends React.Component {

    render() {
        return(  
        <splashStack.Navigator headerMode={"none"}>
        <splashStack.Screen name="splashScreen" component={SplashScreen}/>
        <splashStack.Screen  name="loadingScreen" component={LoadingScreen}/>
        </splashStack.Navigator>  
        )
    }
}