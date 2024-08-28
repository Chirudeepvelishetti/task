import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image,Animated } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
const {width , height }= Dimensions.get('window')
export default function Page1({ scrollY }) {
  const imageScale = scrollY.interpolate({
    inputRange: [100, 300],
    outputRange: [0.5, 1.1],
    extrapolate: 'clamp',
  });
  return (
    <View>
        <View style={{paddingTop:width*0.26}}>
      <Text style={styles.text}>Grow Your Brand With Our Studio</Text>
      </View>
      <View style={{paddingTop:width*0.07}}>
        <Text style={styles.text1}>Image from <Text style={styles.green}>Freepik</Text></Text>
      </View>
      <View>
        <View>
            <TouchableOpacity>
                <Text style={styles.but1}>Our Projects</Text>
            </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
          <Text style={styles.but2}>Start a Project</Text>
        </TouchableOpacity>
        </View>
      </View>
      <Animated.View style={[
        styles.imageContainer,
        { transform: [{ scale: imageScale }] }
      ]} >
            <Animatable.Image  source={require('../assets/mainimg.png')} style={styles.img} animation="zoomInUp" duration={2000} />
      </Animated.View>
    </View>
  )
}
const styles=StyleSheet.create({
    text:{
        fontSize:width*0.1,
        fontWeight:'bold',
        paddingHorizontal:width*0.15,
        textAlign:'center',
        lineHeight:width*0.13,
        color:'green',
    },
    text1:{
        fontSize:width*0.051,
        textAlign:'center',

    },
    green:{
        borderColor:'green',
        textDecorationLine: 'underline',
    },
    but1:{
        fontSize:width*0.05,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        backgroundColor:'green',
        paddingHorizontal:width*0.05,
        paddingVertical:width*0.04,
        marginHorizontal:width*0.20,
        marginVertical:width*0.10,
        borderRadius:20,
    },
    but2:{
        fontSize:width*0.05,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
        backgroundColor:'lightgray',
        paddingHorizontal:width*0.05,
        paddingVertical:width*0.04,
        marginHorizontal:width*0.20,
        marginBottom:width*0.10,
        borderRadius:20,
    },
    img:{
        width:width*0.80,
        height:width*0.80,
        resizeMode:'contain',
        marginLeft:width*0.10,
        marginBottom:width*0.10
    },
    
})