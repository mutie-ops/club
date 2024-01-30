import React from "react"
import {View,StyleSheet, Text} from 'react-native'



function Home(){

    

const home =

    <View style={styles.HomeContainer}>
        <Text>Home Screen</Text>
    </View>

return home

}
const styles =  StyleSheet.create({
   HomeContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#001a16'
    }
})


export default Home