import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
    button:{
        fontSize:40,
        height:50,
        width:50,
        backgroundColor:'#f0f0f0',
        textAlign:'center',
        borderWidth:1,
        borderColor:'#888'
    },operationButton:{
        backgroundColor:'brown',
        color:'#ffffff'
    },
    clear:{
        width:200
    }
})
export default props =>{
    const stylesButton = [styles.button]
    if(props.operation) stylesButton.push(styles.operationButton)
    if(props.clear) stylesButton.push(styles.clear)
    return (
        <TouchableOpacity onPress={props.onClick}>
<Text style={stylesButton}>{props.label}</Text>
        </TouchableOpacity>
    )
}