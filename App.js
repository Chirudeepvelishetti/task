import React from 'react';
import { View, ScrollView, Animated } from 'react-native';
import Head from './Screens/Head';
import Page1 from './Screens/Page1';
import Page2 from './Screens/Page2';
import Page3 from './Screens/Page3';
import Page4 from './Screens/Page4';
import Page5 from './Screens/Page5';
import Page6 from './Screens/Page6';
import Page7 from './Screens/Page7';
import Last from './Screens/Last';

export default function App() {
  const scrollY = new Animated.Value(0);

  return (
    
      <View>
        <Head />
        <Animated.ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}>
        <Page1 scrollY={scrollY} />
        <Page2 scrollY={scrollY} />
        <Page3 scrollY={scrollY} />
        <Page4 scrollY={scrollY} />
        <Page5 scrollY={scrollY} />
        <Page6 scrollY={scrollY} />
        <Page7 scrollY={scrollY} />
        <Last scrollY={scrollY} />
        </Animated.ScrollView>
      </View>
    
  );
}
