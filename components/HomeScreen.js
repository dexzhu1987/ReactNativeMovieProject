import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Constants } from "expo";

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home"
    };
  };

  state = {
    data: [],
    refreshing: false
  };

  page = 0;

  callDetail(item) {
    this.props.screenProps.showDetails(item);
    this.props.navigation.navigate("MovieDetailsScreen");
  }

  totop() {
    this.refs.listRef.scrollToOffset({ x: 0, y: 0, animated: true });
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
        this.setState({ data: json.results, refreshing: false });
      } else {
        this.setState({
          data: [...this.state.data, ...json.results],
          refreshing: false
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={styles.viewContainer}>
        <FlatList
          ref="listRef"
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
          onEndReached={() => this.fetchData()}
          onEndReachedThreshold={0.1}
          onRefresh={() => this.fetchData(true)}
          refreshing={this.state.refreshing}
        />
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            bottom: 30,
            right: 30
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              backgroundColor: "#fff",
              borderRadius: 100
            }}
          >
            <Button title="Top" onPress={() => this.totop()} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    // paddingTop: Constants.statusBarHeight,
    // flexDirection: "row",
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
