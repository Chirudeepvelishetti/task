import { View, Text, StyleSheet, Dimensions, Image ,TouchableOpacity } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window')
export default function Page5() {
    return (
        <View style={{ backgroundColor: 'lightgray' }} >
            <View style={styles.bgcard}>
            </View>
            <View>
                <Image source={require('../assets/image4.png')} style={styles.img4} />
            </View>
            <View>
                <Text style={styles.ctext}>Great design is born from the careful balancing act of these forces of nature</Text>
            </View>
            <View style={styles.ctext1v}>
                <Text style={styles.ctext1}>Quis viverra nibh cras pulvinar mattis nunc sed. Lacus sed turpis tincidunt id aliquet risus feugiat in.  Auctor augue mauris augue neque gravida in fermentum et. Feugiat in fermentum posuereurna.</Text>

                <View style={{ paddingTop: width * 0.07, paddingBottom: width * 0.15 }}>
                    <Text style={styles.text1}>Image from <Text style={styles.green}>Freepik</Text></Text>
                </View>

                <View style={{paddingLeft:width*0.05}}>
                    <TouchableOpacity>
                        <Text style={styles.but1}>read more</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    bgcard: {
        backgroundColor: 'green',
        height: 250
    },
    img4: {
        width: width * 0.70,
        height: width * 0.60,
        marginTop: -width * 0.45,
        marginLeft: width * 0.10,
        marginBottom: width * 0.10
    },
    ctext: {
        fontSize: width * 0.06,
        marginHorizontal: width * 0.10,
        // textAlign:'center',
        padding: width * 0.08,
        lineHeight: width * 0.08,
        fontWeight: '600',
        color: 'green',
        backgroundColor: 'white'
    },
    ctext1: {
        fontSize: width * 0.04,
        padding: width * 0.08,
        lineHeight: width * 0.08,
        fontWeight: '400',
        

    },
    ctext1v: {
        marginHorizontal: width * 0.10,
        backgroundColor: 'white',
        marginBottom:width*0.10
    },
    text1: {
        fontSize: width * 0.04,
        paddingLeft: width * 0.08

    },
    green: {
        borderColor: 'green',
        textDecorationLine: 'underline',
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
        marginBottom: width * 0.10,
        borderRadius: 20,
        width:width*0.50
    },

})