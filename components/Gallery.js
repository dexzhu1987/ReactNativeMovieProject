import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

export default class Gallery extends Component {
  callDetail = () => {
    alert("Image Clicked!!!");
  }
  render() {
    return <ScrollView>
        <View style={styles.viewContainer}>
          <TouchableOpacity style={styles.imageGarelly} onPress={this.callDetail}>
            <Image style={styles.movieImage} source={require("../images/image1.jpeg")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageGarelly} onPress={this.callDetail}>
            <Image style={styles.movieImage} source={require("../images/image2.jpg")} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.imageGarelly} onPress={this.callDetail}>
            <Image style={styles.movieImage} source={require("../images/image3.jpg")} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.imageGarelly} onPress={this.callDetail}>
            <Image style={styles.movieImage} source={require("../images/image4.jpg")} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.imageGarelly} onPress={this.callDetail}>
            <Image style={styles.movieImage} source={require("../images/image5.jpg")} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.imageGarelly} onPress={this.callDetail}>
            <Image style={styles.movieImage} source={require("../images/image6.jpg")} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.imageGarelly} onPress={this.callDetail}>
            <Image style={styles.movieImage} source={require("../images/image7.jpg")} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.imageGarelly} onPress={this.callDetail}>
            <Image style={styles.movieImage} source={require("../images/image8.jpg")} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.imageGarelly} onPress={this.callDetail}>
            <Image style={styles.movieImage} source={require("../images/image9.jpg")} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.imageGarelly} onPress={this.callDetail}>
            <Image style={styles.movieImage} source={require("../images/image10.jpg")} />
          </TouchableOpacity>
        </View>
      </ScrollView>;
}
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#000',
  },
  imageGarelly: {
    margin: 2,
    height: 267,
    width: (Dimensions.get('window').width/2) - 4,
  },
  movieImage:{
    flex: 1,
    width: null ,
    alignSelf: 'stretch',
  }
});

