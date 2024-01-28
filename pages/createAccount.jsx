import React from "react";
import {Text, View,SafeAreaView,StyleSheet, ImageBackground,StatusBar} from 'react-native'


function CreateAccout(){
    const background = require('../assets/out-door.jpg')
    const Logo = require('../assets/final-logo.png')

    const create_account = 

       <ImageBackground source={background} style={styles.container} blurRadius={4}>
        
            <View>
                <Text>THIS IS THE LOGO</Text>
            </View>
            <View>
                <Image source={Logo}/>
            </View>
      
        </ImageBackground>
        

    return create_account 

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        resizeMode:'cover',
        alignItems:'center'
        
    }
   
    
})




export default CreateAccout