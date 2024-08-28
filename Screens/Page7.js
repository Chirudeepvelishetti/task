import { View, Text, Image, StyleSheet, Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
const {width , height} = Dimensions.get('window')
export default function Page7() {
  return (
    <View style={{backgroundColor:'lightgray'}}>
      <View>
          <Image source={require('../assets/image5.png')} style={styles.img5}  />
      </View>
      <View style={{paddingHorizontal:width*0.12,paddingVertical:width*0.10}}>
        <Text style={styles.txt1}>We are a brand strategy, design and web studio. We help meaningful organisations build brands that matter.</Text>
      </View>
      <View style={{paddingLeft:width*0.25}}>
                    <TouchableOpacity>
                        <Text style={styles.but1}>read more</Text>
                    </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
img5:{
    width:width*0.60,
    height:width*0.60,
    marginHorizontal:width*0.20,
    marginVertical:width*0.10
    },
txt1:{
    fontSize:width*0.06,
    lineHeight:width*0.10,
    textAlign:'center',
    fontWeight:'700',
    color:'green'
},
but1: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'green',
        paddingHorizontal: width * 0.05,
        paddingVertical: width * 0.04,
        marginHorizontal: width * 0.0,
        marginBottom: width * 0.40,
        borderRadius: 20,
        width:width*0.50
    },
})