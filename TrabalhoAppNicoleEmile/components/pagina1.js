import * as React from 'react';
import {Text, View, Image, StyleSheet,ScrollView,FlatList}from 'react-native';

export default function Pagina1(){
  return(
    <View  style ={styles.container}>
    <ScrollView>
    <Image style ={styles.capa} source={require('../assets/arara-azulr.png')} />
    
<Text style ={styles.ta}>
 ARARA AZUL </Text>
  <FlatList
  data={arrayComponentes}
   renderItem={({item})=> (
    
     <Text>
   
     <Image style={styles.foto}source={item.foto}/>{'\n'} {'\n'} 
     <Text style={styles.texto}>{item.araraazul}</Text> 
      {'\n'} {'\n'} 
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
      <Text style={styles.cientifico}>Nome científico:</Text> {'\n'} {item.nome}
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
  foto:{
height:188,
  width:200,
  padding:20,
  margin:25,
 
  },
  sobre: {  margin: 15,
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    padding: 10,
    borderRadius: 10,
    fontFamily: 'BalsamiqSans_400Regular'

  },
  texto: {
     margin: 15,
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    padding: 10,
    borderRadius: 10,
    fontFamily: 'BalsamiqSans_400'

  },
   cientifico: {  margin: 15,
    fontSize: 23,
    color: '#609966',
    padding: 10,
    borderRadius: 10,
    fontFamily: 'BalsamiqSans_400Regular'
   },
   ta:{
fontSize:25,
    fontFamily: 'Bangers_400Regular',
    color: '#40513B',
    textAlign: 'center',
    margin: 20
  },
  
});
const arrayComponentes = [
  {foto:require('../assets/pag1/arara-azul-grande.png'),
  araraazul:'As araras-azuis são animais que se destacam pela beleza, tamanho e comportamento. Essa ave está atualmente ameaçada de extinção devido à caça, ao comércio clandestino e à degradação em seu habitat natural por conta do desmatamento.',
    reino:'Animalia',filo: 'Chordata', classe: 'Aves',ordem: 'Psittaciformes',familia: 'Psittacidae',

genero: 'Anodorhynchus',

especie: 'Anodorhynchus hyacinthinus',nome:'Anodorhynchus hyacinthinus',
},


  {foto:require('../assets/pag1/ararinha_azul.jpg'),
  araraazul: 'A ararinha-azul, Cyanopsitta spixii, é uma espécie Criticamente em Perigo de extinção. Possivelmente extinta na natureza, restam pouco mais de 160 indivíduos em cativeiro. Um programa de reprodução envolvendo Brasil e parceiros internacionais vem trabalhando para reintrodução da espécie na natureza.',
    reino:'Animalia',filo: 'Chordata', classe: 'Aves',ordem: 'Psittaciformes',familia: 'Psittacidae',

genero: 'Cyanopsitta',

especie: 'C. spixii',nome:'Cyanopsitta spixii'
   
   },
   
   {foto:require('../assets/pag1/arara-azul-de-lear.png'),
   araraazul: 'A arara-azul-de-lear (Anodorhynchus leari) é uma espécie ameaçada de extinção que ocorre exclusivamente na caatinga baiana, na região conhecida como Raso da Catarina. O tráfico de animais silvestres e a destruição do habitat são os principais fatores de ameaça à espécie. Para tentar reverter esta situação, foi elaborado o Plano de Ação Nacional para a Conservação da Arara-Azul-de-Lear: Anodorhynchus leari, com vigência de 2006 a 2011. Atualmente, esta espécie está contemplada no Plano de Ação Nacional para Conservação das Aves da Caatinga.',
    reino:'Animalia',filo: 'Chordata', classe: 'Aves',ordem: 'Psittaciformes',familia: 'Psittacidae',

genero: '	Anodorhynchus',

especie: 'A. leari',nome:'Anodorhynchus leari'
   
   },
   
   {foto:require('../assets/pag1/arara-azul-pequena.jpg'),
   araraazul: 'A arara-azul-pequena (Anodorhynchus glaucus) era uma arara encontrada na baixa bacia dos rios Paraná e Uruguai, na Argentina, Paraguai, Uruguai e sul do Brasil. Era parente da arara-azul e da arara-azul-de-lear. Também é conhecida pelos nomes de arara-azul-claro, arara-celeste, arara-preta, araraúna e araúna. É considerada extinta por muitos pesquisadores por não ser avistada na natureza há mais de 80 anos, sendo que não existem exemplares em cativeiro.',
    reino:'Animalia',filo: 'Chordata', classe: 'Aves',ordem: 'Psittaciformes',familia: 'Psittacidae',

genero: 'Anodorhynchus',

especie: 'Anodorhynchus glaucus',nome:'Anodorhynchus glaucus'
}
   
  
  
];