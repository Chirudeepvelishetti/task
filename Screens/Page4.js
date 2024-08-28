import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window')
export default function Page4() {
    return (
        <View style={{ backgroundColor: 'green' }}>
            <View style={styles.bgimg3}>
                <Image source={require('../assets/image3.png')} style={styles.img3} />
            </View>
            <View style={styles.bgw}>
                <View >
                    <Text style={styles.het}>We're a curious, ambitious and welcoming collective</Text>
                </View>
                <View>
                    <Text style={styles.tet}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</Text>
                </View>

                <View style={{ paddingTop: width * 0.15, paddingBottom: width * 0.15 }}>
                    <Text style={styles.text1}>Image from <Text style={styles.green}>Freepik</Text></Text>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text style={styles.but1}>read more</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    img3: {
        marginTop: width * 0.20,
        width: width * 0.65,
        height: width * 0.65,
        marginHorizontal: width * 0.15,
    },
    bgimg3: {
        backgroundColor: 'white',

    },
    bgw: {
        marginHorizontal: width * 0.10,
        backgroundColor: 'white',
        marginBottom: width * 0.20,
    },
    het: {
        marginTop: width * 0.20,
        fontSize: width * 0.1,
        textAlign: 'center',
        paddingHorizontal: width * 0.03,
        color: 'green',
        fontWeight: '600'
    },
    tet: {
        fontSize: width * 0.04,
        textAlign: 'center',
        lineHeight: width * 0.07,
        marginTop: width * 0.20,
        marginHorizontal:width*0.05,
        fontWeight:'450'
    },
    text1: {
        fontSize: width * 0.051,
        textAlign: 'center',

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
        marginHorizontal: width * 0.20,
        marginBottom: width * 0.10,
        borderRadius: 20,
    },
})