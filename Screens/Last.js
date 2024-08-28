import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const {width}= Dimensions.get('window')
export default function Last() {
  return (
    <View style={{backgroundColor:'lightgray' , height:700}}>
        <View style={styles.bgcard}>
        </View>
        <View style={styles.whitebg}>
                <View style={{marginVertical:width*0.10}}>
                <Text style={styles.tx}>Contact Info</Text>
                </View>
            <View style={styles.flx}>
                    <View>
                    <Feather name="phone-call" size={30} color="green"  />
                    </View>
                    <View>
                    <Text style={{fontSize:width*0.06,paddingLeft:width*0.05}}>+1 (234) 567-8910</Text>
                    </View>
            </View>
            <View style={styles.flx}>
            <View>
            <Feather name="mail" size={30} color="green"  />
            </View>
            <View>
                <Text style={{fontSize:width*0.05,paddingLeft:width*0.05}}>contact @yourmail.com</Text>
            </View>
            </View>
            <View style={styles.flx}>
            <View>
            <Ionicons name="location-outline" size={30} color="green"  />
            </View>
            <View>
            <Text style={{fontSize:width*0.04,paddingLeft:width*0.05}}> 203 , Envato Labs , Behind Alis   Steet, Australia</Text>
            </View>
            
            </View>
           
            <TextInput placeholder='Enter Your Name' style={styles.txtip}></TextInput>
            <TextInput placeholder='Enter a valid email address' style={styles.txtip}></TextInput>
            <TextInput placeholder='Enter Your message' style={styles.txtip1}></TextInput>
           <View >
           <TouchableOpacity>
           <Text style={styles.te}>
           Submit
           </Text>
           </TouchableOpacity>
           </View>

        </View>
    </View>
  )
}
const styles = StyleSheet.create({
bgcard:{
    backgroundColor:'green',
    height:200
},
tx:{
    fontSize:width*0.07,
    fontWeight:'600',
    paddingLeft:width*0.07,
    color:'green'
},
flx:{
    flexDirection:'row',
    paddingVertical:width*0.04,
    paddingLeft:width*0.06
},
whitebg:{
marginHorizontal:width*0.10,
marginVertical:-width*0.70 ,
 backgroundColor:'white',
//   borderRadius:10 
},
txtip:{
    paddingVertical:width*0.03,
   marginHorizontal:width*0.08,
   marginVertical:width*0.03,
   backgroundColor:'lightgray',
   paddingLeft:width*0.05
},
txtip1:{
    paddingTop:width*0.03,
    paddingBottom:width*0.10,
   marginHorizontal:width*0.08,
   marginVertical:width*0.03,
   backgroundColor:'lightgray',
   paddingLeft:width*0.05
},
te:{
    textAlign:'center',
    paddingHorizontal:width*0.10,
    paddingVertical:width*0.03,
    backgroundColor:'green',
    fontSize:width*0.05,
    marginHorizontal:width*0.08,
    color:'white',
    borderRadius:10,
    fontWeight:'600',
    marginBottom:width*0.08

    
}
})