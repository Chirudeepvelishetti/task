import { View, Text, StyleSheet, Dimensions,TouchableOpacity ,FlatList,Image} from 'react-native'
import React from 'react'
const {width ,height } = Dimensions.get('window')
const images = [
    require('../assets/amazon.png'),
    require('../assets/amazon.png'),
    require('../assets/amazon.png'),
    require('../assets/amazon.png'),
  require('../assets/amazon.png'),
  require('../assets/amazon.png'),
  require('../assets/amazon.png'),
  require('../assets/amazon.png'),
  require('../assets/amazon.png'),
  require('../assets/amazon.png'),
  require('../assets/amazon.png'),
  require('../assets/amazon.png'),
  ];

export default function Page6() {


  return (
    <View style={{backgroundColor:'green'}}>
        <View>
            <View>
                <Text style={styles.clitext}>Our clients.</Text>
            </View>
            <View style={{paddingHorizontal:width*0.10 , paddingBottom:width*0.10}}>
            <Text style={styles.clitext1}>Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum . Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</Text>
            </View>
            <View >
                    <TouchableOpacity>
                        <Text style={styles.but1}>read more</Text>
                    </TouchableOpacity>
                </View>

        </View>

        <View>
            <View>
            <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item} style={styles.image} />
        )}
        numColumns={2} // Display 2 images per row
      />
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    clitext:{
        fontSize:width*0.08,
        fontWeight:'700',
        color:'white',
        textAlign:'center',
        paddingTop:width*0.15,
        paddingBottom:width*0.10
    },
    clitext1:{
        fontSize:width*0.04,
        color:'white',
        textAlign:'center',
        lineHeight:width*0.07
    },
    but1: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        backgroundColor: 'white',
        paddingHorizontal: width * 0.05,
        paddingVertical: width * 0.04,
        marginHorizontal: width * 0.20,
        marginBottom: width * 0.10,
        borderRadius: 20,
       
    },
    image: {
    width: width*0.30,
    height: width*0.10,
    margin:width*0.10
    
  },
})