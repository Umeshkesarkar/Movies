import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const movies = [
  {
    id: '1',
    name: '3 Idiots',
    image: require('../../assets/img/3idiots.jpg'),
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Ae Dil He Mushkil',
    image: require('../../assets/img/AeDilHeMushkil.jpg'),
    rating: 4.2,
  },
  {
    id: '3',
    name: 'Bajirao Mastani',
    image: require('../../assets/img/BajiraoMastani.jpg'),
    rating: 3.8,
  },
  {
    id: '4',
    name: 'Barfi',
    image: require('../../assets/img/Barfi.jpg'),
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Devdas',
    image: require('../../assets/img/Devdas.jpg'),
    rating: 4.2,
  },
  {
    id: '6',
    name: 'Highway',
    image: require('../../assets/img/Highway.jpg'),
    rating: 3.8,
  },
  {
    id: '7',
    name: 'Jab We Met',
    image: require('../../assets/img/JabWeMet.jpg'),
    rating: 4.5,
  },
  {
    id: '8',
    name: 'KGF',
    image: require('../../assets/img/KGF.jpg'),
    rating: 4.2,
  },
  {
    id: '9',
    name: 'Kill',
    image: require('../../assets/img/Kill.jpg'),
    rating: 3.8,
  },
  {
    id: '10',
    name: 'Maharaja',
    image: require('../../assets/img/Maharaja.jpg'),
    rating: 4.5,
  },
  {
    id: '11',
    name: 'Padmavat',
    image: require('../../assets/img/Padmavati.jpg'),
    rating: 4.2,
  },
  {
    id: '12',
    name: 'Piku',
    image: require('../../assets/img/Piku.jpg'),
    rating: 3.8,
  },
  {
    id: '13',
    name: 'PK',
    image: require('../../assets/img/Pk.jpg'),
    rating: 4.5,
  },
  {
    id: '14',
    name: 'Queen',
    image: require('../../assets/img/Queen.jpg'),
    rating: 4.2,
  },
  {
    id: '15',
    name: 'Raazi',
    image: require('../../assets/img/Raazi.jpg'),
    rating: 3.8,
  },
  {
    id: '16',
    name: 'RRR',
    image: require('../../assets/img/RRR.jpg'),
    rating: 4.5,
  },
  {
    id: '17',
    name: 'Student Of The Year',
    image: require('../../assets/img/StudentOfTheYear.jpg'),
    rating: 4.2,
  },
  {
    id: '18',
    name: 'Tamasha',
    image: require('../../assets/img/Tamasha.jpg'),
    rating: 3.8,
  },
  {
    id: '19',
    name: 'Yeh Jawani He Diwani',
    image: require('../../assets/img/YehJawaniHeDiwani.jpg'),
    rating: 4.5,
  },
  {
    id: '20',
    name: 'Zindagi Na Milegi Dobara',
    image: require('../../assets/img/ZindagiNaMilegiDobara.jpg'),
    rating: 4.2,
  },
];

const Listing = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderDropdownItem = ({item}) => (
    <TouchableOpacity
      style={styles.dropdownItem}
      onPress={() => {
        setSearchText(item.name);
        navigation.navigate('DetailScreen', {movie: item});
      }}>
      <Text style={styles.dropdownText}>{item.name}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={[
        styles.movieContainer,
        filteredMovies.length === 1 && index === 0
          ? styles.singleItem
          : styles.singleItem2,
      ]}
      onPress={() => navigation.navigate('DetailScreen', {movie: item})}>
      <View style={styles.image}>
        <Image source={item.image} style={styles.image2} />
      </View>

      <Text style={styles.movieName} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.rating}>Rating: {item.rating}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={styles.wel}>Welcome, Guest!</Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                source={require('../../assets/img/notification.png')}
                style={[styles.imageL, {marginRight: 10}]}
              />
            </View>
            <TouchableOpacity onPress={handleProfilePress}>
              <Image
                source={require('../../assets/img/settings.png')}
                style={styles.imageL}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          style={styles.searchBar}
          placeholder="Search Movies..."
          placeholderTextColor="#000"
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText.length > 0 && (
          <View style={styles.dropdownContainer}>
            <FlatList
              data={filteredMovies}
              renderItem={renderDropdownItem}
              keyExtractor={item => item.id}
              style={styles.dropdownList}
            />
          </View>
        )}
      </View>

      <FlatList
        data={filteredMovies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        style={styles.list} // Added style for the FlatList
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 10,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  topContainer: {
    backgroundColor: '#ffcc00',
    //alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    //marginBottom: 10,
    width: '100%',
  },
  grid: {
    justifyContent: 'space-between',
  },
  list: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  movieContainer: {
    width: width * 0.44,
    height: height * 0.35,
    marginVertical: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 8,
  },
  singleItem: {
    alignSelf: 'flex-start',
  },
  singleItem2: {
    alignSelf: 'center',
  },
  image: {
    width: width * 0.44,
    height: height * 0.27,
  },
  image2: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imageL: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
  movieName: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  wel: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  spacer: {
    height: 800,
  },
  dropdownContainer: {
    maxHeight: height * 0.3,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    //marginTop: 5,
  },
  dropdownList: {
    flexGrow: 0,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Listing;
