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
  Dimensions,
  Image,
  StatusBar
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const data = [
  {
    id: 1,
    profile_pic: require('../assets/nita.jpg'),
    title: 'This is my new video',
    views: 922,
    duration: '2:06',
    cover_image: require('../assets/img1.jpg'),
    channel: 'A bussiness channel',
    timeStamp: '1 hour ago'
  },
  {
    id: 2,
    profile_pic: require('../assets/harshiv.jpg'),
    title: 'This is my new video',
    views: 922,
    duration: '2:06',
    cover_image: require('../assets/img2.jpg'),
    channel: 'Tech channel',
    timeStamp: '2 hours ago'
  },
  {
    id: 3,
    profile_pic: require('../assets/raj.jpg'),
    title: 'This is my new video',
    views: 1220,
    duration: '2:06',
    cover_image: require('../assets/img3.jpg'),
    channel: 'Code channel',
    timeStamp: '1 hour ago'
  },
  {
    id: 4,
    profile_pic: require('../assets/pramod.jpg'),
    title: 'This is my new video',
    views: 1002,
    duration: '2:06',
    cover_image: require('../assets/img4.jpg'),
    channel: 'bussiness channel',
    timeStamp: '5 hours ago'
  },
  {
    id: 5,
    profile_pic: require('../assets/dharmistha.jpg'),
    title: 'This is my new video',
    views: 9220,
    duration: '2:06',
    cover_image: require('../assets/img5.jpg'),
    channel: 'Cooking channel',
    timeStamp: '3 hours ago'
  }
];

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
        <StatusBar backgroundColor='#333' barStyle='light-content' />
        <SafeAreaView style={{ paddingTop: 10, backgroundColor: '#333' }} />
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
          <View style={{ flex: 1 }}>
            <ScrollView>
              <FlatList
                data={data}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flex: 1,
                      height: 260,
                      borderBottomWidth: 0.5,
                      borderBottomColor: '#aaa'
                    }}
                  >
                    <View style={styles.imageContainer}>
                      <Image
                        source={item.cover_image}
                        style={{
                          width: null,
                          height: null,
                          flex: 1,
                          resizeMode: 'cover'
                        }}
                      />
                      <Text
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          margin: 10,
                          backgroundColor: '#000',
                          color: '#fff',
                          paddingHorizontal: 1
                        }}
                      >
                        {item.duration}
                      </Text>
                    </View>
                    <View style={styles.detailsContainer}>
                      <View style={{ flex: 1 }}>
                        <Image
                          source={item.profile_pic}
                          style={{ width: 40, height: 40, borderRadius: 20 }}
                        />
                      </View>
                      <View style={{ flex: 4, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>
                          {item.title}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ fontSize: 12, color: '#999' }}>
                            {item.channel}
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#999',
                              marginHorizontal: 18
                            }}
                          >
                            {item.views} views
                          </Text>
                          <Text style={{ fontSize: 12, color: '#999' }}>
                            {item.timeStamp}
                          </Text>
                        </View>
                      </View>
                      <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <MaterialIcons
                          name='more-vert'
                          size={30}
                          style={{ color: '#999' }}
                        />
                      </View>
                    </View>
                  </View>
                )}
              />
            </ScrollView>
          </View>
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
