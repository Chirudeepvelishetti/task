
import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const {width ,height }=Dimensions.get('window')
export default function Icons() {
  return (
<View>
    <View style={styles.container}>
    <View style={{flexDirection:'row',paddingRight:width*0.19}}>
    <FontAwesome name="facebook" size={20} color="#fff" style={{paddingHorizontal:width*0.03,paddingVertical:width*0.02, backgroundColor:'#3B5998' , borderRadius:50,marginRight:width*0.01}} />
    <FontAwesome name="twitter" size={20} color="#fff" style={styles.icon} />
    <FontAwesome name="instagram" size={20} color="#fff" style={{padding:width*0.02, backgroundColor:'#C536A4' , borderRadius:500,marginRight:width*0.01}} />
   </View>
   <View style={styles.container1}>
   <FontAwesome name="bars" size={30} color="gray" style={{padding:width*0.03, alignItems:'center',borderRadius:500}} />
   </View>
   </View>
   </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      // paddingVertical:width*0.04
    },
    icon: {
        padding:width*0.015,
        backgroundColor:'#55ACEE',
        borderRadius:100,
        marginRight:width*0.01
    },
  });