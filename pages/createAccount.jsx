import React from "react";
import {Text, View,StyleSheet, ImageBackground,Image,TextInput} from 'react-native'


function CreateAccout(){
    const background = require('../assets/out-door.jpg')
    const Logo = require('../assets/final-logo.png')

    const create_account = 

       <ImageBackground source={background} style={styles.container} blurRadius={4}>
        
            <View>
                <Text style={styles.logoText}>Club Management</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={Logo}  style={styles.logoImage}/>
            </View>
            <View>
                <TextInput placeholder="Full Names" style={styles.inputText} placeholderTextColor="white"></TextInput>
                <TextInput placeholder="Email Address" style={styles.inputText} placeholderTextColor="white"></TextInput>
                <TextInput placeholder="Password" style={styles.inputText} placeholderTextColor="white"></TextInput>
                <TextInput placeholder="ConfirmPassword" style={styles.inputText} placeholderTextColor="white"></TextInput>
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
        inputText:{
            width:220,
            borderColor:'#ffffff',
            paddingHorizontal:10,
            paddingVertical:1,
            borderBottomWidth:1,
            
            }
    
})




export default CreateAccout