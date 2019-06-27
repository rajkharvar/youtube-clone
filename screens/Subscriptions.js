import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Subscriptions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Subscriptions</Text>
      </View>
    );
  }
}
export default Subscriptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
