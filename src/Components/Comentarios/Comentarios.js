import React, {Fragment, useState} from 'react';
import {
  Text,
  FlatList,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import estilo from './estilo';

const Comentarios = ({comentarios}) => {
  const [estComentarios, setComentario] = useState(comentarios);
  const adicionarComentario = () => {
    campoInput.clear();
    const novoComentario = {
      date: Date.now(),
      text: conteudoCampoInput,
      userName: 'Stany',
    };
    setComentario([...estComentarios, novoComentario]);
  };

  let campoInput;
  let conteudoCampoInput = '';
  return (
    <Fragment>
      <FlatList
        data={estComentarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={estilo.naMesmaLinha}>
            <Text style={estilo.userComentario}>{item.userName}</Text>
            <Text style={estilo.comentario}>{item.text}</Text>
          </View>
        )}
      />
      <View style={estilo.naMesmaLinha}>
        <TextInput
          ref={textInput => (campoInput = textInput)}
          onChangeText={texto => (conteudoCampoInput = texto)}
          placeholder={'Insira seu comentário...'}
          style={{flex: 1}}
        />
        <TouchableOpacity onPress={adicionarComentario}>
          <Image
            source={require('../../../res/img/send.png')}
            style={estilo.imgSend}
          />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Comentarios;
