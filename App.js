import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Constants } from "expo";
import MovieDetail from "./components/MovieDetail";

export default class Gallery extends Component {
  state = {
    data: [],
    showDetails: false,
    item: [],
    refreshing: false,
  };

  page = 0;

  callDetail(item) {
    this.setState({
      showDetails: true,
      item: item
    });
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async (refreshing = false) => {
    const newPage = refreshing ? 1 : this.page + 1;
    this.setState({ refreshing });

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=36221fa11cf698f1df6c74005d924451&language=en-US&page=${newPage}`
      );
      const json = await response.json();
      this.page = newPage; 
      if (refreshing) {
        this.setState({  data: json.results, refreshing: false });
      } else {
        this.setState({data: [...this.state.data, ...json.results], refreshing: false})
      }
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
          onEndReached = {() => this.fetchData()}
          onEndReachedThreshold={0.1}
          onRefresh={() => this.fetchData(true)}
          refreshing={this.state.refreshing}
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
