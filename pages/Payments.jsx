import React from "react";
import {Text, View, StyleSheet} from 'react-native'


function Payments(){

    const payments = 
        <View style={styles.paymentsContainer}>
            <Text>THIS IS PAYMENT SCREEN</Text>
        </View>

    return payments

}

const styles =   StyleSheet.create({
    paymentsContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default  Payments