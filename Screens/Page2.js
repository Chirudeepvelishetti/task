import { View, Text, StyleSheet, Dimensions, TouchableOpacity,Image,Animated} from 'react-native'
import * as Animatable from 'react-native-animatable';
import React from 'react'
const { width, height } = Dimensions.get('window')
export default function Page2({ scrollY }) {
    const translateX = scrollY.interpolate({
        inputRange: [0, height * 0.90],
        outputRange: [-width*0.70, 0], // Slide in from the left
        extrapolate: 'clamp',
    });

    const opacity = scrollY.interpolate({
        inputRange: [0, height * 0.90],
        outputRange: [0.5, 1],
        extrapolate: 'clamp',
    });

    
    return (
        <View style={styles.bg}>
        <Animated.View
        style={[ styles.he,{
            transform: [{ translateX }], 
            opacity: opacity,
        }]}
    >
            <View>
                <Text style={styles.textt1}>It’s different working with us</Text>
            </View>
            <View>
                <Text style={styles.text2}>We curate senior leadership and creative for each client, so there’s no one-size-fits-all solution. This approach ensures you get the deep knowledge that comes with experience in your industry, and a flat.</Text>
            </View>

            <View style={{ paddingTop: width * 0.07, paddingBottom: width * 0.10 }}>
                <Text style={styles.text1}>Image from <Text style={styles.green}>Freepik</Text></Text>
            </View>

            <View>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.but1}>read more</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Animated.View>
    <Animated.View style={[styles.c , {
        transform: [
                     { translateX }, // Ensure translateY is a number
                    
                 ],
     }]}> 
        <View>
            <View style={
                styles.cardview}> 
                <View>
                <Image source={require('../assets/pto1.png')} style={styles.pto} />
                </View>
                <View>
                    <Text style={styles.heading}>Terri ​Stojceski</Text>
                    <Text style={styles.sub}>Founder, Design Director</Text>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', marginHorizontal: width * 0.05, height: 1 }} />
        </View>
        <View>
        <View style={styles.cardview}> 
            <View>
            <Image source={require('../assets/pto2.png')} style={styles.pto} />
            </View>
            <View>
                <Text style={styles.heading}>Kelly Savala</Text>
                <Text style={styles.sub}>Brand & MessagingDirector</Text>
            </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', marginHorizontal: width * 0.05, height: 1 }} />
    </View>
    <View>
        <View style={styles.cardview}> 
            <View>
            <Image source={require('../assets/pto3.png')} style={styles.pto} />
            </View>
            <View>
                <Text style={styles.heading}> Shane Reynolds         </Text>
                <Text style={styles.sub}>  Strategy Director    </Text>
            </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', marginHorizontal: width * 0.05, height: 1 }} />
    </View>
           
    <View>
        <View style={styles.cardview}> 
            <View>
            <Image source={require('../assets/pto4.png')} style={styles.pto} />
            </View>
            <View>
                <Text style={styles.heading}>  Lindsay Watson        </Text>
                <Text style={styles.sub}>  Art Director</Text>
            </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', marginHorizontal: width * 0.05, height: 1 }} />
    </View>
    <View>
        <View style={styles.cardview}> 
            <View>
            <Image source={require('../assets/pto5.png')} style={styles.pto} />
            </View>
            <View>
                <Text style={styles.heading}> Chung Schlueter</Text>
                <Text style={styles.sub}>Head ProductManagement</Text>
            </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', marginHorizontal: width * 0.05, height: 1 }} />
    </View>
    <View>
        <View style={styles.cardview}> 
            <View>
            <Image source={require('../assets/pto6.png')} style={styles.pto} />
            </View>
            <View>
                <Text style={styles.heading}>  David Bell                   </Text>
                <Text style={styles.sub}>  Lead Developer</Text>
            </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', marginHorizontal: width * 0.05, height: 1 }} />
    </View>
        
        </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#F2F2F2'
    },
    textt1: {
        textAlign: 'center',
        fontSize: width * 0.08,
        paddingHorizontal: width * 0.20,
        fontWeight: '600',
        color: 'green',
        marginVertical: width * 0.10
    },
    text2: {
        fontSize: width * 0.04,
        paddingHorizontal: width * 0.15,
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: width * 0.09
    },
    green: {
        borderColor: 'green',
        textDecorationLine: 'underline',
    },
    text1: {
        fontSize: width * 0.04,
        textAlign: 'center',
    },
    but1: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'green',
        paddingHorizontal: width * 0.05,
        paddingVertical: width * 0.04,
        marginHorizontal: width * 0.20,
        marginBottom: width * 0.10,
        borderRadius: 20,
    },
    pto:{
        width:width*0.27,
        height:width*0.27,
        borderRadius:100,
        borderWidth:4,
        borderColor:'green'
    },
    cardview:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingVertical:width*0.07,
        
    },
    heading:{
        fontSize:width*0.06,
        fontWeight:'700'
    },
    sub:{
        fontSize:width*0.05,
        fontWeight:'300',
        paddingVertical:width*0.03
    },
    pageContainer: {
    width: '100%',
    height: 700, // Adjust based on content
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
 

})