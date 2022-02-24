/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';

const App: () => Node = () => {
  const [showStorybook, setShowStorybook] = useState(false);

  if (showStorybook) {
    const StorybookUI = require('./storybook').default;
    return <StorybookUI />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Pressable style={styles.button} onPress={() => setShowStorybook(true)}>
        <Text style={styles.buttonText}>Press me to show storybook</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#ff4785',
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default App;
