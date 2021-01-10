import React, {Component, useCallback} from 'react';
import {View , Text , ImageBackground , Image , Animated , TouchableOpacity , Easing} from 'react-native';
import styles from './styles'

const backGroundImageLoading = require('../imgForSplashScreen/loadingBackground.jpg')
const loadingImg = require('../imgForSplashScreen/loadingimg.png')


const arr = []
for (var i = 0; i < 6; i++) {
  arr.push(i)
}

export class LoadingScreen extends React.Component {
    constructor () {
        super()
        this.animatedValue = []
        arr.forEach((value) => {
          this.animatedValue[value] = new Animated.Value(0)
        })
      }
      componentDidMount () {
        this.animate()
      }
      animate () {
        const animations = arr.map((item) => {
          return Animated.timing(
            
            this.animatedValue[item],
            {
              toValue: 1,
              duration: 500,
              useNativeDriver:true,
            },
            this.animatedValue[item].setValue(0)
          )
        })
        Animated.sequence(animations).start(() => this.animate())
      }
    render() {
            const animations = arr.map((a, i) => {
            return <Animated.View key={i} style={{opacity: this.animatedValue[a], height: 30, width: 30, backgroundColor: 'white', marginLeft: 9, marginTop: 9, borderRadius:180}} />
          })
        return(
            <ImageBackground
            source={backGroundImageLoading}
            style={{height:'100%' , width:'100%' , alignItems:'center' , justifyContent:'center'}}>
                <View style={{justifyContent:'center' , alignItems:'center'}}>
                  <Image source={loadingImg}>
                  </Image>
                </View>
                <View style={{flexDirection:"row",justifyContent:'center',alignItems:'center'}}>
                    {animations} 
                </View> 
            </ImageBackground>
        );
    }
}//////////////////////////mellim toje samoye kogda propisivayu styles menayetsa razmer
