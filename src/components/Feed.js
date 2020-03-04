import React, {Component} from 'react';
import {FlatList, StyleSheet, Platform, AsyncStorage} from 'react-native';
import Post from './Post';
import InstaluraFetchService from '../services/InstaluraFetchService';
import Notificacao from '../api/Notificacao';

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      fotos: [],
    };
  }

  componentDidMount() {
    InstaluraFetchService.get('/fotos?X-AUTH-TOKEN=').then(json =>
      this.setState({fotos: json}),
    );
  }

  like(idFoto) {
    const listaOriginal = this.state.fotos;
    const foto = this.state.fotos.find(foto => foto.id === idFoto);

    AsyncStorage.getItem('usuario')
      .then(usuarioLogado => {
        let novaLista = [];

        if (!foto.likeada) {
          novaLista = [...foto.likers, {login: usuarioLogado}];
        } else {
          novaLista = foto.likers.filter(liker => {
            return liker.login !== usuarioLogado;
          });
        }
        return novaLista;
      })
      .then(novaLista => {
        const fotoAtualizada = {
          ...foto,
          likeada: !foto.likeada,
          likers: novaLista,
        };

        const fotos = this.state.fotos.map(foto =>
          foto.id === fotoAtualizada.id ? fotoAtualizada : foto,
        );
        this.setState({fotos});
      });

    InstaluraFetchService.post(`/fotos/${idFoto}/like`).catch(e => {
      this.setState({fotos: listaOriginal});
      Notificacao.exibe('Ops...', 'Algo deu errado!');
    });
  }

  adicionaComentario(idFoto, valorComentario, inputComentario) {
    if (valorComentario === '') {
      return;
    }

    const foto = this.state.fotos.find(foto => foto.id === idFoto);
    const comentario = {
      texto: valorComentario,
    };

    InstaluraFetchService.post(`/fotos/${idFoto}/comment`, comentario)
      .then(comentario => [...foto.comentarios, comentario])
      .then(novaLista => {
        const fotoAtualizada = {
          ...foto,
          comentarios: novaLista,
        };

        const fotos = this.state.fotos.map(foto =>
          foto.id === fotoAtualizada.id ? fotoAtualizada : foto,
        );

        this.setState({fotos});
        inputComentario.clear();
      })
      .catch(e =>
        Notificacao.exibe('Ops...', 'Não foi possível adicionar o comentário!'),
      );
  }

  render() {
    return (
      <FlatList
        data={this.state.fotos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Post
            foto={item}
            likeCallback={this.like.bind(this)}
            comentarioCallback={this.adicionaComentario.bind(this)}
          />
        )}
      />
    );
  }
}

const margem = Platform.OS === 'ios' ? 20 : 0;
const styles = StyleSheet.create({
  container: {
    marginTop: margem,
  },
});
