import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const imgWholeCookie = require ('./assets/WholeCookie-removebg-preview.png');
const imgBrokenCookie = require ('./assets/BrokenCookie.png');

const phrases = [
"Acredite em você e tudo será possível.",
"Grandes conquistas estão a caminho.",
"Hoje é um ótimo dia para recomeçar.",
"Notícias boas estão por vir.",
"Seu grande amor será revelado ainda hoje.",
"Você receberá uma notícia que mudará sua vida financeira."
];


export default function App(){
const [img, setImg] = useState(imgWholeCookie);
const [phrase, setPhrase] = useState('');

function BrokenCookie(){
    let randomNumber = Math.floor(Math.random() * phrases.length);
    setPhrase('"' + phrases[randomNumber] + '"');
    setImg(imgBrokenCookie);
}
function reiniciar() {
    setImg(imgWholeCookie);
    setPhrase('');
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textoPhrase}>{phrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={BrokenCookie}>
        <Text style={styles.textoBotao}>Quebrar Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoReiniciar]} onPress={reiniciar}>
        <Text style={styles.textoBotao}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    width: 250,
    height: 250,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  textoPhrase: {
    fontSize: 18,
    color: '#5C5C5C',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#8B008B',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  botaoReiniciar: {
    backgroundColor: '#C71585',
  },
});