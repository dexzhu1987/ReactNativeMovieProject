import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList
} from "react-native";

export default class Gallery extends Component {

  state = {
    data: [],
  }

  callDetail = () => {
    console.log("Image Clicked!!!");
  }

  componentWillMount() {
    this.fetchData();
    console.log(this.state.data.original_title)
  }

  fetchData = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=36221fa11cf698f1df6c74005d924451&language=en-US&page=1");
      const json = await response.json();
      this.setState({
        data: json.results
      });
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <FlatList
          numColumns={2}
          data={this.state.data}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.imageGarelly} onPress={this.callDetail}>
              <Image
                style={styles.movieImage}
                source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }}
              />
            </TouchableOpacity>
          }
        />
      </View>
    )
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
    width: (Dimensions.get('window').width / 2) - 4,
  },
  movieImage: {
    flex: 1,
    alignSelf: 'stretch',
  }
});

