const lerFotos = async callback => {
  const fotosHTTP = await fetch('http://localhost:3030/feed');
  const fotosJson = await fotosHTTP.json();
  callback(fotosJson);
};

export default lerFotos;
