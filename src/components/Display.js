import React from'react'
import {StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    display:{
        flex:1,
        padding:60,
        justifyContent:'center',
        backgroundColor:'#000000',
        alignItems:'flex-end',
        borderColor:'grey',
        borderWidth:5
    
    },
    display_value:{
        fontSize:60,
        color:'#fff'
    }
})
export default props =>
    <View style={styles.display}>
        <Text style={styles.display_value}>
            {props.value}
        </Text>
    </View>