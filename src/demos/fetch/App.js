import React, {useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

import {FilmCard} from '../../components';

function useFetchFilms() {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    setStatus('loading');

    fetch('https://swapi.dev/api/films/')
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then(res => res.json())
      .then(({results}) => {
        setStatus('success');
        setData(results);
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  return {
    status,
    data,
  };
}

export const App = () => {
  const {status, data: films} = useFetchFilms();

  if (status === 'loading') {
    return <Text>Fetching Star Wars data...</Text>;
  }

  if (status === 'error') {
    return <Text>Could not fetch Star Wars data</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {films.map(film => (
        <FilmCard key={film.episode_id} film={film} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
  },
});
