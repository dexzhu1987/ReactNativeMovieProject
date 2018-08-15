import React from "react";
import { StackNavigator, createStackNavigator } from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import MovieDetailsScreen from "./components/MovieDetailsScreen";

// const AppNavigator = StackNavigator(
//   {
//     HomeScreen: {
//       screen: HomeScreen
//     },
//     MovieDetailsScreen: {
//       screen: MovieDetailsScreen
//     }
//   },
//   {
//     initialRouteName: "HomeScreen"
//   }
// );

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    MovieDetailsScreen: MovieDetailsScreen
  },
  {
    initialRouteName: "HomeScreen"
  }
);

export default class App extends React.Component {
  state = {
    item: []
  };

  showDetails = item => {
    this.setState({
      item: item
    });
  };

  render() {
    return (
      <AppNavigator
        screenProps={{
          showDetails: this.showDetails,
          getItem: this.state.item
        }}
      />
    );
  }
}
