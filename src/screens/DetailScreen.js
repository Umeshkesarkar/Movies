import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const DetailScreen = ({route}) => {
  const {movie} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageC}>
        <Image source={movie.image} style={styles.image} />
      </View>

      <Text style={styles.movieName}>{movie.name}</Text>
      <Text style={styles.rating}>Rating: {movie.rating}</Text>
      <Text style={styles.lorem}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    //adding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageC: {
    width: width,
    height: height * 0.65,
  },
  movieName: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  rating: {
    marginTop: 10,
    fontSize: 18,
    color: '#888',
  },
  lorem: {
    marginTop: 8,
    fontSize: 15,
    color: '#888',
    paddingHorizontal: 10,
    textAlign: 'justify',
  },
});

export default DetailScreen;
