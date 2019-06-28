import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import Header from '../components/Header';
import Content from '../components/Content';

class Home extends Component {
  componentWillMount() {
    this.scrollY = new Animated.Value(0);
    this.startHeaderHeight = 70;
    this.endHeaderHeight = 0;

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: 'clamp'
    });

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#333' barStyle='light-content' />
        <SafeAreaView style={{ paddingTop: 10, backgroundColor: '#333' }} />
        <Header
          animatedHeight={this.animatedHeaderHeight}
          animatedOpacity={this.animatedOpacity}
        />

        <View style={{ flex: 1 }}>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            <Content />
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },
  imageContainer: {
    height: 200
  },
  detailsContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
