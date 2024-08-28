import { View, Text, StyleSheet, Image, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import Icons from './Icons'
const {width , height}=Dimensions.get('window')
export default function Head() {
  return (
    <View>  
    <StatusBar />
            <View style={styles.head}>
            <View>
               <Image source={require('../assets/default-logo.png')} style={styles.imageh}/>
            </View>
            <View>
                <Icons />
            </View>
    </View>
    </View>
  )
}
const styles= StyleSheet.create({
    head: {
      flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center', 
        backgroundColor: 'white', 
        paddingVertical:width*0.05,
      },
      imageh:{
        width:width*0.16,
        height:width*0.08
      }
})