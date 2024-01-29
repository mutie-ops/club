import React from "react";
import {Text, View,SafeAreaView,StyleSheet, ImageBackground,StatusBar,Image} from 'react-native'


function CreateAccout(){
    const background = require('../assets/out-door.jpg')
    const Logo = require('../assets/final-logo.png')

    const create_account = 

       <ImageBackground source={background} style={styles.container} blurRadius={4}>
        
            <View>
                <Text>THIS IS THE LOGO</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={Logo}  style={styles.logoImage}/>
            </View>
      
        </ImageBackground>
        

    return create_account 

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        // justifyContent:'center',
        paddingTop:100,
        resizeMode:'cover',
        alignItems:'center'
        
                },
    imageContainer:{
        Width:200,
        height:100
                },


    logoImage:{
            width:200,
            height:100,
            resizeMode:'contain'
            }
    
})




export default CreateAccout