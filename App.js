import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import Post from './src/components/Post';

const App: () => React$Node = () => {
  const fotos = [
    {id: 1, usuario: 'eu 1'},
    {id: 2, usuario: 'eu 2'},
    {id: 3, usuario: 'eu 3'},
  ];

  return (
    <FlatList style={styles.container}
      data={fotos}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Post foto={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default App;
