import { View, Text, StyleSheet, Image, Dimensions,Animated } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { MaterialIcons } from '@expo/vector-icons';
const {width , height}= Dimensions.get('window')
export default function Page3({ scrollY }) {
    const translateX = scrollY.interpolate({
        inputRange: [0, height * 0.90],
        outputRange: [-width*0.70, 0], // Slide in from the left
        extrapolate: 'clamp',
    });

    const opacity = scrollY.interpolate({
        inputRange: [0, 400],
        outputRange: [0.5, 1],
        extrapolate: 'clamp',
    });

    const imageScale = scrollY.interpolate({
        inputRange: [0, 400],
        outputRange: [0.5, 1], // Adjust scale range as needed
        extrapolate: 'clamp',
      });
  return (
    <View style={{backgroundColor:'white'}}>
        <View style={styles.background}>
        <Animated.View
        style={[ styles.he,{
            transform: [{ translateX }], 
            opacity: opacity,
        }]}
    >
    <Animated.Image
    source={require('../assets/image2.png')}
    style={[styles.img2, { transform: [{ scale: imageScale }] }]}
  />
          </Animated.View>
        </View>
        <View style={styles.headcont}>
                <View style={styles.card}>
                    <Text style={styles.cardhead}>Brand strategy</Text>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <MaterialIcons name='arrow-right-alt' size={20} color="white" style={{paddingLeft:width*0.04,paddingVertical:width*0.02}}></MaterialIcons>
                        </View>
                        <View>
                        <Text style={styles.cardtext}>Brand equity audit</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <MaterialIcons name='arrow-right-alt' size={20} color="white" style={{paddingLeft:width*0.04 ,paddingVertical:width*0.02}}></MaterialIcons>
                        </View>
                        <View>
                        <Text style={styles.cardtext}>Audience analysis</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <MaterialIcons name='arrow-right-alt' size={20} color="white" style={{paddingLeft:width*0.04,paddingVertical:width*0.02}}></MaterialIcons>
                        </View>
                        <View>
                        <Text style={styles.cardtext}>Competitive review</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <MaterialIcons name='arrow-right-alt' size={20} color="white" style={{paddingLeft:width*0.04,paddingVertical:width*0.02}}></MaterialIcons>
                        </View>
                        <View>
                        <Text style={styles.cardtext}>Strategic direction</Text>
                        </View>
                    </View>
                </View>
        </View>

      

        <View style={styles.headcont1}>
                <View style={styles.card}>
                    <Text style={styles.cardhead}>Brand identity</Text>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <MaterialIcons name='arrow-right-alt' size={20} color="white" style={{paddingLeft:width*0.04,paddingVertical:width*0.02}}></MaterialIcons>
                        </View>
                        <View>
                        <Text style={styles.cardtext}>Visual positioning</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <MaterialIcons name='arrow-right-alt' size={20} color="white" style={{paddingLeft:width*0.04 ,paddingVertical:width*0.02}}></MaterialIcons>
                        </View>
                        <View>
                        <Text style={styles.cardtext}>Visual identity system</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <MaterialIcons name='arrow-right-alt' size={20} color="white" style={{paddingLeft:width*0.04,paddingVertical:width*0.02}}></MaterialIcons>
                        </View>
                        <View>
                        <Text style={styles.cardtext}>Icon & illustration guide</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <MaterialIcons name='arrow-right-alt' size={20} color="white" style={{paddingLeft:width*0.04,paddingVertical:width*0.02}}></MaterialIcons>
                        </View>
                        <View>
                        <Text style={styles.cardtext}>Brand application</Text>
                        </View>
                    </View>
                </View>
        </View>

        <View style={styles.headcont1}>
                <View style={styles.card}>
                    <Text style={styles.cardhead}>Communication strategy</Text>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <MaterialIcons name='arrow-right-alt' size={20} color="white" style={{paddingLeft:width*0.04,paddingVertical:width*0.02}}></MaterialIcons>
                        </View>
                        <View>
                        <Text style={styles.cardtext}>Verbal identity</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <MaterialIcons name='arrow-right-alt' size={20} color="white" style={{paddingLeft:width*0.04 ,paddingVertical:width*0.02}}></MaterialIcons>
                        </View>
                        <View>
                        <Text style={styles.cardtext}>Tagline exploration</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <MaterialIcons name='arrow-right-alt' size={20} color="white" style={{paddingLeft:width*0.04,paddingVertical:width*0.02}}></MaterialIcons>
                        </View>
                        <View>
                        <Text style={styles.cardtext}>Communication style</Text>
                        </View>
                    </View>
                    
                </View>
        </View>

        <View style={{ paddingTop: width * 0.07, paddingBottom: width * 0.10 }}>
                <Text style={styles.text1}>Image from <Text style={styles.green}>Freepik</Text></Text>
            </View>

    </View>
  )
}
const styles= StyleSheet.create({
    background:{
        backgroundColor:'#f2f2f2',
        // height:700,
       
    },
    img2:{
        width: width * 0.70,
        height: width * 0.70,
        borderRadius: 20,
        marginHorizontal: width * 0.15,
        marginTop: width * 0.20,
        marginBottom: width * 0.10,
    },
    card:{
        marginHorizontal:width*0.10,
        backgroundColor:'green',
        marginBottom:width*0.10,
        paddingVertical:width*0.05,
        borderRadius:20,
       elevation:10,
    },
    cardhead:{
        fontSize:width*0.06,
        fontWeight:'500',
        color:'white',
        paddingLeft:width*0.05,
        paddingVertical:width*0.05
    },
    cardtext:{
        fontSize:width*0.05,
        fontWeight:'500',
        color:'white',
        paddingLeft:width*0.05,
        paddingVertical:width*0.02
    },
    headcont:{
        marginTop: width * 0.0,
    },
    headcont1:{
        // marginTop: -width * 0.20,
    },
    green: {
        borderColor: 'green',
        textDecorationLine: 'underline',
    },
    text1: {
        fontSize: width * 0.051,
        textAlign: 'center',

    },
})