import React, { useState } from 'react';
import { View, Text, Image, Stylesheet, TouchableOpacity } from 'react-native';

const imgWholeCookie = require ('./assets/Cookies-inteiro.png');
const imgBrokenCookie = require ('./assets/Cookies-quebrado.png');

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
};