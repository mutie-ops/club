import React from "react";
import {Text, View,StyleSheet, ImageBackground,Image,TextInput, Pressable,  KeyboardAvoidingView,Platform} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function CreateAccout(){
    const background = require('../assets/out-door.jpg')
    const Logo = require('../assets/final-logo.png')
    const eyeOpen =  require('../assets/eye-open.png')
    const eyeClose =  require('../assets/closed-eye.png')

    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const [toggle, setToggle] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')


    function onSubmitClick(){
        if(password.length >0 && password === confirmPassword){
            console.log(fullName,email,password,confirmPassword)
            setErrorMessage('')
        }
        else{
            setErrorMessage(<Text style={{fontSize:12,color:'red'}}>Password Dont Match</Text>)
        }
                            
    }

    function toggleEye(){
        setToggle(!toggle)
    }                     
    let eye = eyeOpen
    if(toggle){
        eye = eyeClose
    }

    const create_account = 

       <ImageBackground source={background} style={styles.container} blurRadius={4}>
       
            <View>
                <Text style={styles.logoText}>Club Management</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={Logo}  style={styles.logoImage}/>
            </View> 

            <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}
                                    style={styles.container2}>
                    
                        <TextInput placeholder="Full Names"
                                     style={styles.inputText} 
                                     placeholderTextColor="#f0f0f0cc"   
                                     onChangeText={text=> setFullName(text)}
                                     value={fullName}></TextInput>

                        <TextInput placeholder="Email Address" style={styles.inputText} 
                                    placeholderTextColor="#f0f0f0cc"
                                    keyboardType="email-address" 
                                    autoCapitalize="none" 
                                    autoCorrect={false}
                                    onChangeText={text=> setEmail(text)}
                                    value={email} ></TextInput>
                        {/* {<Text style={{fontSize:12,color:'red'}}>Incorrect Email Fomart</Text>} */}

                        <View>
                            <TextInput placeholder="Password" style={styles.inputText}
                            placeholderTextColor="#f0f0f0cc"
                            secureTextEntry={toggle}
                            onChangeText={text=> setPassword(text)}
                            value={password}></TextInput>
                            <Pressable onPress={toggleEye}>
                                <Image source={eye} style={styles.eyeStyle} />
                            </Pressable>
                            
                        </View>
                       
                        {errorMessage}

                        <TextInput placeholder="ConfirmPassword" style={styles.inputText}
                        placeholderTextColor="#f0f0f0cc"
                        secureTextEntry={toggle}
                        onChangeText={text=> setConfirmPassword(text)}
                        value={confirmPassword}></TextInput>

                        
                        {errorMessage}      

            </KeyboardAvoidingView>
                
            

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
        justifyContent:'space-evenly',
        resizeMode:'cover',
        alignItems:'center',
        // gap:50
        
                },
    imageContainer:{
        Width:200,
        height:50
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
            marginBottom:15,
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
            },

            container2:{
                // flex: 1,
                // // justifyContent: "space-evenly",
                // // alignItems: "center",
                // padding:
            },
            eyeStyle:{
                position:'absolute',
                width:20,
                height:20,
                left:220,
                bottom:26
            }

    
})




export default CreateAccout