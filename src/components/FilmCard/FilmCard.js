import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const FilmCard = ({film}) => {
  return (
    <View style={styles.filmCard}>
      <Text style={styles.filmTitle}>{film.title}</Text>
      <Text>{film.opening_crawl}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  filmCard: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#c7d2fe',
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 16,
  },
  filmTitle: {
    color: '#1e40af',
    fontSize: 24,
    marginBottom: 8,
  },
});
