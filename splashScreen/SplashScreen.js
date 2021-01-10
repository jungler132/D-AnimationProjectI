import React, {Component, useCallback} from 'react';
import {View,ImageBackground,Image , Animated, Easing, TouchableOpacity} from 'react-native';
import styles from './styles'


const backGroundImage = require('../imgForSplashScreen/backgroundimg.jpg');
const logoImage = require('../imgForSplashScreen/logo.png');
const playButton = require('../imgForSplashScreen/playButton.png')



export default class SplashScreen extends React.Component {
    constructor (props) {
        super(props)
        this.animatedValueLogo = new Animated.Value(0),
        this.animatedValuePlayButton = new Animated.Value(0)
    }
    componentDidMount () {
        this.animate()
    }
    animate () {
        Animated.sequence([
            Animated.timing(
                this.animatedValueLogo,
                {
                    toValue:1,
                    duration:5000,
                    easing: Easing.cubic,
                    useNativeDriver:true
                }
            ),
            Animated.timing(
                this.animatedValuePlayButton,
                {
                    toValue:1,
                    duration:2000,
                    easing: Easing.cubic,
                    useNativeDriver:true
                }
            )
        ]).start()
    }
    navig() {
        const { navigate } = this.props.navigation
        navigate('loadingScreen')
    }
    render() {
        const opacityLogo = this.animatedValueLogo.interpolate({
            inputRange:[0 , 1],
            outputRange:[0 , 1]
        })
        const opacityPlayButton = this.animatedValuePlayButton.interpolate({
            inputRange:[0 , 0.5 ,  1],
            outputRange:[0 , 0 , 1]
        })
        return(
            <ImageBackground
            source={backGroundImage}
            style={{height:'100%', width:'100%'}}>
            <View
            style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Animated.Image
                source={logoImage}
                style={{opacity:opacityLogo , height:200,width:200,borderRadius:180,}}></Animated.Image>
            </View>
            <TouchableOpacity onPress={() => this.navig()} style={{alignItems:'center',marginBottom:50}}>
                <Animated.Image
                source={playButton}
                style={{opacity:opacityPlayButton , height:50,width:50}}></Animated.Image>  
            </TouchableOpacity>
            </ImageBackground>
        );
    }
//////////////////////////////////Mellim pri vinose stiley pocemuto oni razmer silno menayut xota vse propisano  ya prosto sdes vse ostavlu mojet u mena bagi v VS code.
}
            // <ImageBackground
            // source={backGroundImage}
            // style={styles.backGroundStyle}>
            // <View
            // style={styles.viewStyle}>
            //     <Animated.Image
            //     source={logoImage}
            //     style={styles.animatedImageStyle , {opacity:opacityLogo}}></Animated.Image>
            // </View>
            // <TouchableOpacity onPress={() => this.navig()} style={styles.TOstyle}>
            //     <Animated.Image
            //     source={playButton}
            //     style={styles.animatedImageButtonStyle , {opacity:opacityPlayButton}}></Animated.Image>  
            // </TouchableOpacity>
            // </ImageBackground>