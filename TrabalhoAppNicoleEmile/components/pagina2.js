import * as React from 'react';
import {Text, View, Image, StyleSheet,ScrollView,FlatList}from 'react-native';

export default function Pagina2(){
  return(
    <View  style ={styles.container}>
    
    <ScrollView>
   <Image style ={styles.capa} source={require('../assets/baleia-azul.png')} />
<Text style ={styles.ta}>
 BALEIA AZUL </Text>
  <FlatList data={arrayComponentes}
   renderItem={({item})=> (
    
     <Text>
     <Image style={styles.foto}source={item.foto}/>{'\n'} {'\n'} 
      <Text style={styles.texto}>As baleias-azuis eram, até ao início do século XX abundantes em quase todos os oceanos. Caçadas durante mais de um século, foram levadas à beira da extinção pelos baleeiros, até se tornarem objeto de mecanismos de proteção adotados pela comunidade internacional em 1996.</Text> {'\n'} {'\n'}
      <Text style={styles.cientifico}>Classificação científica</Text> {'\n'} {'\n'}
     <Text style={styles.sobre}>Reino:</Text> {item.reino}
      {'\n'} {'\n'} 
      <Text style={styles.sobre}>Filo:</Text> {item.filo}
      {'\n'} {'\n'} 
      <Text style={styles.sobre}>Classe:</Text> {item.classe}
      {'\n'} {'\n'} 
      <Text style={styles.sobre}>Ordem:</Text> {item.ordem}
      {'\n'} {'\n'} 
      <Text style={styles.sobre}>Familía:</Text> {item.familia}
      {'\n'} {'\n'} 
      <Text style={styles.sobre}>Gênero:</Text> {item.genero}
      {'\n'} {'\n'} 
      <Text style={styles.sobre}>Espécie:</Text> {item.especie}
      {'\n'} {'\n'} 
      <Text style={styles.cientifico}>Nome científico:</Text> {'\n'} {'\n'} {item.nome}
      {'\n'} {'\n'} 
     </Text>
  
   )}
   />
  
  </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#F0E9D2',
    padding: 8,
  },
  capa:{
   height:188,
  width:375
   
  },
  ta:{
fontSize:25,
    fontFamily: 'Bangers_400Regular',
    color: '#40513B',
    textAlign: 'center',
     margin: 20
  },
   foto:{
height:188,
  width:200,
  padding:20,
  margin:25,
  
   
  },
  texto: {
      fontSize:18,
    fontFamily: 'BalsamiqSans_700',
    color: '#03001C',
    padding: 10,
    borderRadius: 15,
   margin: 15,
   textAlign: 'center'
  },
  sobre: {
    margin: 15,
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    padding: 10,
    borderRadius: 10,
    fontFamily: 'BalsamiqSans_400Regular'
   },
    cientifico: {  margin: 15,
    fontSize: 23,
    color: '#609966',
    padding: 10,
    borderRadius: 10,
    fontFamily: 'BalsamiqSans_400Regular'
   },
  
});

const arrayComponentes = [
  {foto:require('../assets/pag2/baleiaazul.png'),
    reino:'Animalia',filo: 'Chordata', classe: 'Aves',ordem: 'Psittaciformes',familia: 'Psittacidae',

genero: 'Anodorhynchus',

especie: 'Anodorhynchus hyacinthinus',nome:'Anodorhynchus hyacinthinus',
},



  
  
];