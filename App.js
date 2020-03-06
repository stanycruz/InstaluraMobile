import React, {Fragment} from 'react';
import {Dimensions, StyleSheet, FlatList} from 'react-native';
import {Cabecalho} from './src/Components/Cabecalho';
import {Foto} from './src/Components/Foto';

const largura = Dimensions.get('screen').width;
const informacoes = [
  {id: 1, usuario: 'Ricardo'},
  {id: 2, usuario: 'Marina'},
  {id: 3, usuario: 'Stany Cruz'},
];

const App: () => React$Node = () => {
  return (
    <FlatList
      data={informacoes}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <Fragment>
          <Cabecalho nomeUsuario={item.usuario} />
          <Foto />
        </Fragment>
      )}
    />
  );
};

const estilo = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura,
  },
});

export default App;
