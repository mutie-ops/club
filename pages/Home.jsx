import React from "react"
import {View,StyleSheet, Text} from 'react-native'


function Home(){


const home =

<View style={styles.onBoardContainer}>
    <Text>This is the Home Screen</Text>
</View>

return home

}
const styles =  StyleSheet.create({
    onBoardContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


export default Home