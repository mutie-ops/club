import React from "react";
import {Text, View, StyleSheet} from 'react-native'


function Invite(){

    const invite = 
        <View style={styles.inviteContainer}>
            <Text>THIS IS INVITE SCREEN</Text>
        </View>

    return invite

}

const styles =   StyleSheet.create({
    inviteContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default  Invite