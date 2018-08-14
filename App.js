import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Text
} from "react-native";
import { Constants } from "expo";
import MovieDetail from "./components/MovieDetail";

export default class Gallery extends Component {
  state = {
    data: [],
    showDetails: false,
    item: []
  };

  callDetail(item) {
    this.setState({
      showDetails: true,
      item: item
    });
  }

  componentWillMount() {
    this.fetchData();
    console.log(this.state.data.original_title);
  }

  fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=36221fa11cf698f1df6c74005d924451&language=en-US&page=1"
      );
      const json = await response.json();
      this.setState({
        data: json.results
      });
    } catch (error) {
      console.error(error);
    }
  };

  backFromChild = value => {
    this.setState({ showDetails: value });
  };

  render() {
    if (this.state.showDetails)
      return <MovieDetail item={this.state.item} back={this.backFromChild} />;
    return (
      <View style={styles.viewContainer}>
        <FlatList
          data={this.state.data}
          numColumns={2}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.imageGarelly}
              onPress={() => this.callDetail(item)}
            >
              <Image
                style={styles.movieImage}
                source={{
                  uri: "https://image.tmdb.org/t/p/w500" + item.poster_path
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#000"
  },
  imageGarelly: {
    margin: 2,
    height: 267,
    width: Dimensions.get("window").width / 2 - 4
  },
  movieImage: {
    flex: 1,
    alignSelf: "stretch"
  }
});
