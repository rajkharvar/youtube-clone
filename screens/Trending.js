import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Animated
} from 'react-native';
import Content from '../components/Content';
import Header from '../components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const icons = [
  {
    id: 1,
    icon: 'music',
    title: 'Music'
  },
  {
    id: 2,
    icon: 'youtube-gaming',
    title: 'Gaming'
  },
  {
    id: 3,
    icon: 'newspaper',
    title: 'News'
  },
  {
    id: 4,
    icon: 'filmstrip',
    title: 'Films'
  },
  {
    id: 5,
    icon: 'television',
    title: 'Television'
  },
  {
    id: 6,
    icon: 'android',
    title: 'Android'
  },
  {
    id: 7,
    icon: 'apple',
    title: 'Apple'
  }
];

class Trending extends Component {
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
  renderAllIcons = () => {
    return icons.map(item => (
      <View
        style={{ flex: 1, marginVertical: 10, marginLeft: 18 }}
        key={item.id}
      >
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: '#444',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MaterialCommunityIcons
            name={item.icon}
            style={{ color: '#ddd', borderRadius: 24, borderColor: '#333' }}
            size={26}
          />
        </View>
        <Text
          style={{
            fontSize: 14,
            color: '#aaa',
            marginTop: 10,
            alignSelf: 'center'
          }}
        >
          {item.title}
        </Text>
      </View>
    ));
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ paddingTop: 10, backgroundColor: '#333' }} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            animatedHeight={this.animatedHeaderHeight}
            animatedOpacity={this.animatedOpacity}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {this.renderAllIcons()}
          </ScrollView>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            <Content />
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}
export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  }
});
