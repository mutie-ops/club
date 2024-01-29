import React from "react";
import {Text, View,StyleSheet, ImageBackground,Image,TextInput, Pressable,  KeyboardAvoidingView,Platform} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function CreateAccout(){
    const background = require('../assets/out-door.jpg')
    const Logo = require('../assets/final-logo.png')

    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');


    function onSubmitClick(){

    }



    const create_account = 

       <ImageBackground source={background} style={styles.container} blurRadius={4}>
       
            <View>
                <Text style={styles.logoText}>Club Management</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={Logo}  style={styles.logoImage}/>
            </View>
            <View >
                <KeyboardAwareScrollView>
                    <TextInput placeholder="Full Names" style={styles.inputText} placeholderTextColor="#f0f0f0cc"></TextInput>

                    <TextInput placeholder="Email Address" style={styles.inputText} 
                                placeholderTextColor="#f0f0f0cc"
                                keyboardType="email-address" 
                                autoCapitalize="none" 
                                autoCorrect={false} ></TextInput>
                    {/* {<Text style={{fontSize:12,color:'red'}}>Incorrect Email Fomart</Text>} */}

                    <TextInput placeholder="Password" style={styles.inputText}
                    placeholderTextColor="#f0f0f0cc"
                    secureTextEntry></TextInput>
                    {/* {<Text style={{fontSize:12,color:'red'}}>Password Dont Match</Text>} */}

                    <TextInput placeholder="ConfirmPassword" style={styles.inputText}
                    placeholderTextColor="#f0f0f0cc"
                    secureTextEntry></TextInput>
                    {/* {<Text style={{fontSize:12,color:'red'}}>Password Dont Match</Text>} */}
                </KeyboardAwareScrollView>
            </View>

            <Pressable onPress={onSubmitClick}>
                <View style={styles.SubmitInfo}>
                    <Text style={{color:'white',elevation:10, letterSpacing:1,}}>Submit</Text>    
                </View>
            </Pressable>

        </ImageBackground>
        

    return create_account 

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        resizeMode:'cover',
        alignItems:'center',
        gap:50
        
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
            width:240,
            borderColor:'#ffffff',
            color:'white',
            paddingHorizontal:10,
            paddingVertical:1,
            borderBottomWidth:1,
            marginBottom:20,
            textDecorationLine:'none'
            
            },

    SubmitInfo:{
                backgroundColor:'#ffffff2b',
                borderRadius: 24,
                borderWidth: 1,
                borderColor: '#fff', // You can set the border color to any color you prefer
                padding: 10,
                alignItems: 'center',
                width:200
            }
    
})




export default CreateAccout