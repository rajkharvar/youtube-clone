import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

class Header extends Component {
  render() {
    return (
      <Animated.View
        style={[
          styles.header,
          {
            height: this.props.animatedHeight,
            opacity: this.props.animatedOpacity
          }
        ]}
      >
        <View style={{ flex: 3, flexDirection: 'row' }}>
          <AntDesign
            name='youtube'
            style={{ color: '#E44236', marginLeft: 20 }}
            size={40}
          />
          <Text
            style={{
              fontSize: 25,
              paddingLeft: 10,
              color: '#fff'
            }}
          >
            YouTube
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
          <MaterialIcons name='videocam' style={{ color: '#fff' }} size={25} />
          <MaterialIcons name='search' style={{ color: '#fff' }} size={30} />
          <MaterialIcons
            name='account-circle'
            style={{ color: '#fff' }}
            size={25}
          />
        </View>
      </Animated.View>
    );
  }
}
export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    alignItems: 'center',
    flexDirection: 'row'
  }
});
