import React from "react";
import {Text, View, StyleSheet} from 'react-native'


function Event(){

    const event = 
        <View style={styles.EventContainer}>
            <Text>THIS IS EVENT SCREEN</Text>
        </View>

    return event

}

const styles =   StyleSheet.create({
    EventContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default  Event