import React from "react"
import {View,StyleSheet, Text} from 'react-native'


function OnBoarding(){


const on_boarding =

<View style={styles.onBoardContainer}>
    <Text>On Boarding Screen</Text>
</View>

return on_boarding

}
const styles =  StyleSheet.create({
    onBoardContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


export default OnBoarding