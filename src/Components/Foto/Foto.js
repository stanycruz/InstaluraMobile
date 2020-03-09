import React, {Fragment, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import estilo from './estilo';

const Foto = ({urlFoto, descricao, qtdLikes}) => {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qtdLikes);
  const curtirFoto = () => {
    let qtd = likes;
    if (curtiu) {
      qtd--;
    } else {
      qtd++;
    }
    setLikes(qtd);
    setCurtiu(!curtiu);
  }
  return (
    <Fragment>
      <Image source={{uri: urlFoto}} style={estilo.imagem} />
      <Text>{descricao}</Text>
      <View style={estilo.viewLike}>
        <TouchableOpacity onPress={curtirFoto}>
          <Image source={imgLike(curtiu)} style={estilo.like} />
        </TouchableOpacity>
        <Text>{likes} curtidas</Text>
      </View>
    </Fragment>
  );
};

const imgLike = curtiu => {
  if (curtiu > 0) {
    return require('../../../res/img/s2-checked.png');
  } else {
    return require('../../../res/img/s2.png');
  }
};

export default Foto;
