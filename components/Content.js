import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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

class Content extends Component {
  render() {
    return (
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
    );
  }
}
export default Content;

const styles = StyleSheet.create({
  imageContainer: {
    height: 200
  },
  detailsContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
