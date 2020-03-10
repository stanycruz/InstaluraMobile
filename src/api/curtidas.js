const imgLike = curtiu => {
  if (curtiu > 0) {
    return require('../../res/img/s2-checked.png');
  } else {
    return require('../../res/img/s2.png');
  }
};

const curtirFoto = (curtiu, likes) => {
  let qtd = likes;
  if (curtiu) {
    qtd--;
  } else {
    qtd++;
  }
  return [!curtiu, qtd];
};

export {imgLike, curtirFoto};
