import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Library extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Library</Text>
      </View>
    );
  }
}
export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
