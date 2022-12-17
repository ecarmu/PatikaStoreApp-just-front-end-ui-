import React from "react"
import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
    container:{
        backgroundColor: '#f0f0f0',
        margin: 10, 
        padding: 10,
        borderRadius: 10,
        width: Dimensions.get('window').width / 2.4,
        flex: 1
    },
    image:{
        borderRadius: 10,
        height: Dimensions.get('window').height/3,
  
    },
    productName: {
        fontWeight: 'bold',
        textAlign: 'left'
    },
    price:{
        textAlign: 'left'
    },
    notInStock:{
        color: 'red'
    }
})