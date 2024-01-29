import React from "react"
import { StatusBar } from "react-native"
import {View,StyleSheet, Text, Button,Pressable, ImageBackground, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const background = require('../assets/out-door.jpg')
const Logo = require('../assets/final-logo.png')

function OnBoarding(){

    const Navigation = useNavigation()



    function onHandleClick(){
        Navigation.navigate('CreateAccount')
    }


const on_boarding =
<ImageBackground source={background} style={styles.onBoardContainer} blurRadius={4}>
    {/* <StatusBar /> */}
        <View>
            <Text style={styles.logoText}>Club Management</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image source={Logo}  style={styles.logoImage}/>
        </View>
        <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>
                    Explore efficient club management with our app! 
                    Simplify event planning, track memberships, and
                     enhance communication effortlessly.
                      Elevate your club experience – sign up now!
            </Text>
        </View>

      <Pressable onPress={onHandleClick}>
        <View style={styles.getStarted}>
            <Text style={{color:'white',elevation:10, letterSpacing:1,}}>Get Started</Text>
        </View>
      </Pressable>

</ImageBackground>

return on_boarding

}
const styles =  StyleSheet.create({
    onBoardContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:60
    },
    imageContainer:{
        Width:200,
        height:100
                },


    logoImage:{
            width:200,
            height:100,
            resizeMode:'contain'
            },

    logoText:{
        color:'#ffffff',
        fontSize:24,
        fontWeight:'bold'
    },

    infoTextContainer:{
        width:'80%'
    },
    infoText:{
        textAlign:'center',
        color:'#ffffff',
        lineHeight:26
    },
    getStarted:{
        backgroundColor:'#ffffff2b',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#fff', // You can set the border color to any color you prefer
        padding: 10,
        alignItems: 'center',
        width:200
    }

})


export default OnBoarding