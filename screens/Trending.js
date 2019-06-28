import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Content from '../components/Content';
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
  renderAllIcons = () => {
    return icons.map(item => (
      <View style={{ flex: 1, marginBottom: 10, marginLeft: 18 }} key={item.id}>
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
        <Text style={{ fontSize: 14, color: '#aaa', marginTop: 10 }}>
          {item.title}
        </Text>
      </View>
    ));
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ paddingTop: 10, backgroundColor: '#333' }} />
        <ScrollView>
          <ScrollView horizontal>{this.renderAllIcons()}</ScrollView>
          <ScrollView>
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
