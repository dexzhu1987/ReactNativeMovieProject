import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Linking
} from "react-native";
import { Constants } from "expo";

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      url: '',
      time: null,
    };
  }

  backButton = () => {
    this.props.back(false);
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async (refreshing = false) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${+this.state.item.id}?api_key=36221fa11cf698f1df6c74005d924451&language=en-US`
      );
      const json = await response.json();

      this.setState({
        url: json.homepage,
        time: json.runtime
      });

    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.detailContainer}>
          <View style={styles.titleStyle}>
            <Text style={styles.movieTitle}> {this.state.item.title} </Text>
          </View>
          <View style={styles.detailTop}>
            <View style={styles.imageStyle}>
              <Image
                style={styles.movieImage}
                source={{
                  uri:
                    "https://image.tmdb.org/t/p/w500" +
                    this.state.item.poster_path
                }}
              />
              >
            </View>
            <View style={styles.imageStyle}>
              <Text style={styles.detailTextStyle}>
                {this.state.item.release_date}
              </Text>
              <Text style={styles.detailTextStyle}> {this.state.time} mins </Text>
              <Text style={styles.detailTextStyle}>
                {this.state.item.vote_average}
                /10
              </Text>
              <Text
                style={styles.detailTextStyle}
                onPress={() => Linking.openURL(this.state.url)}
              >
                website
              </Text>
            </View>
          </View>
          <View style={styles.textbox}>
            <Text style={styles.inboxTextTitle}> Overview </Text>
            <Text style={styles.inboxtextstyle}>
              {this.state.item.overview}
            </Text>
          </View>
          <Button onPress={this.backButton} title="Back" color="#ffffff" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: "#000",
    flex: 1,
    height: Dimensions.get("window").height,
    paddingTop: Constants.statusBarHeight
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
    textDecorationLine: "underline"
  },
  textbox: {
    margin: 8,
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
