import React from 'react';
import Gallery from './components/Gallery';
import MovieDetail from './components/MovieDetail';
import { StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return <View style={styles.container}>
        {/*<Gallery />*/}
        <MovieDetail />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
