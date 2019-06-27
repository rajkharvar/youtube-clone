import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  SafeAreaView,
  ScrollView,
  FlatList,
  PanResponder,
  Dimensions
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Home extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY({ x: 0, y: 0 });
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gesture) => {
        this.position.setValue({ x: 0, y: gesture.dy });
      },
      onPanResponderRelease: (evt, gesture) => {
        if (gesture.dy < 0) {
          Animated.spring(this.position.y, {
            toValue: 0,
            tension: 1
          }).start();
        } else if (gesture.dy > 0) {
          Animated.spring(this.position.y, {
            toValue: 80,
            tension: 1
          }).start();
        }
      }
    });
  }
  render() {
    animatedHeight = this.position.y.interpolate({
      inputRange: [-SCREEN_HEIGHT, 0, SCREEN_HEIGHT],
      outputRange: [80, 80, 0]
    });
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ backgroundColor: '#333' }} />
        <Animated.View style={[styles.header, { height: this.animatedHeight }]}>
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
            <MaterialIcons
              name='videocam'
              style={{ color: '#fff' }}
              size={25}
            />
            <MaterialIcons name='search' style={{ color: '#fff' }} size={30} />
            <MaterialIcons
              name='account-circle'
              style={{ color: '#fff' }}
              size={25}
            />
          </View>
        </Animated.View>
        <Animated.View
          style={{ backgroundColor: '#333', flex: 1 }}
          {...this.panResponder.panHandlers}
        >
          <ScrollView>
            <FlatList />
          </ScrollView>
        </Animated.View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    alignItems: 'center',
    flexDirection: 'row'
  }
});
