import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, Dimensions, Linking } from 'react-native'

export default class MovieDetail extends Component {
  render() {
    return <ScrollView>
        <View style={styles.detailContainer}>
          <View style={styles.titleStyle}>
            <Text style={styles.movieTitle}> "Movie Title" </Text>
          </View>
        <View style={styles.detailTop}>
            <View style={styles.imageStyle}>
              <Image 
              style={styles.movieImage}
              source={require("../images/image2.jpg")}
              />>
            </View>
            <View style={styles.imageStyle} s>
                <Text style={styles.detailTextStyle}> Apr 2018 </Text>
                <Text style={styles.detailTextStyle}> 120 mins </Text>
                <Text style={styles.detailTextStyle}> 8.2/10 </Text>
                <Text 
                  style={styles.detailTextStyle}
                  onPress={() => Linking.openURL('http://google.com')}> website </Text>
              </View>
          </View>
          <View style={styles.textbox}>
            <Text style={styles.inboxTextTitle}> Overview </Text>
            <Text style={styles.inboxtextstyle}>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining
              essentially unchanged.
            </Text>
          </View>
        </View>
      </ScrollView>;
  }
}

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: "#000"
  },
  titleStyle: {
    padding: 16
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center"
  },
  detailTop: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  imageStyle: {
    margin: 2,
    height: 267,
    width: Dimensions.get("window").width / 2 - 4
  },
  movieImage: {
    flex: 1,
    width: null,
    alignSelf: "stretch"
  },
  detailTextStyle: {
    margin: 16,
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    textDecorationColor: "#fff",
    textDecorationLine: "underline",
  },
  textbox: {
    margin:8,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  inboxTextTitle: {
    marginBottom: 8,
    color: "#000",
    fontSize: 18,
    fontWeight: "bold"
  },
  inboxtextstyle: {
    color: "#000",
    textAlign: "left"
  }
});