import React, {Fragment, useState, useEffect} from 'react';
import {FlatList, ScrollView, Platform, StatusBar} from 'react-native';
import {Cabecalho} from '../../Components/Cabecalho';
import {Foto} from '../../Components/Foto';
import lerFotos from '../../api/feed';
import {Comentarios} from '../../Components/Comentarios';
import {curtirFoto, imgLike} from '../../api/curtidas';
import adicionarComentario from '../../api/comentario';

const Feed: () => React$Node = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  let altura = 0;
  if (Platform.OS === 'ios') {
    altura = 35;
  }

  return (
    <ScrollView style={{marginTop: altura}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <FlatList
        data={fotos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} urlImage={item.userURL} />
            <Foto
              urlFoto={item.url}
              descricao={item.description}
              qtdLikes={item.likes}
              imgLike={imgLike}
              curtirFoto={curtirFoto}
            />
            <Comentarios
              comentarios={item.comentarios}
              adicionarComentario={adicionarComentario}
            />
          </Fragment>
        )}
      />
    </ScrollView>
  );
};

export default Feed;
