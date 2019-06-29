import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const images = [
  {
    id: 1,
    source: require('../assets/raj.jpg')
  },
  {
    id: 2,
    source: require('../assets/nita.jpg')
  },
  {
    id: 3,
    source: require('../assets/pramod.jpg')
  },
  {
    id: 4,
    source: require('../assets/harshiv.jpg')
  },
  {
    id: 5,
    source: require('../assets/dharmistha.jpg')
  }
];

class Subscriptions extends Component {
  renderAllImages = () => {
    return images.map(image => {
      return (
        <View style={{ flex: 1, marginLeft: 10 }} key={image.id}>
          <Image
            source={image.source}
            style={{ width: 65, height: 65, borderRadius: 32.5 }}
          />
        </View>
      );
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1.5,
            borderBottomColor: '#999',
            marginVertical: 3
          }}
        >
          <View
            style={{
              flex: 4,
              alignItems: 'center'
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {this.renderAllImages()}
            </ScrollView>
          </View>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ fontSize: 18, color: '#0A79DF' }}>All</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Subscriptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 30
  }
});
