import  React,{useState} from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
   useFonts,
    Lusitana_400Regular,
     Lusitana_700Bold,
     Bangers_400Regular,
     Tangerine_700Bold,
     BalsamiqSans_700Bold,
     BalsamiqSans_700Bold_Italic } 
     from '@expo-google-fonts/dev';


export default function Home(props) {
   let [fontsLoaded] = useFonts({
    Lusitana_400Regular,
    Lusitana_700Bold,
Bangers_400Regular,
 Tangerine_700Bold,
 BalsamiqSans_700Bold,
 BalsamiqSans_700Bold_Italic
  });

  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Animais em extinção</Text>
     
        
       
      <ScrollView>
      <Image />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Pagina1');
        }}>
        <Text style={styles.blch}> Arara Azul</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Pagina2');
        }}>
        <Text style={styles.blch}> Baleia azul </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Pagina3');
        }}>
        <Text style={styles.blch}> Onça-pintada</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems: 'center',
  
    backgroundColor: '#B7B78A',
    padding: 20,
  },
  titulo: {
      fontSize:40,
      fontFamily:'Bangers_400Regular',
     color: '#40513B',
    padding: 50,
    borderRadius: 15,
    textAlign: 'center',
  },
  blch:{
    fontSize:20,
    fontFamily: 'BalsamiqSans_700Bold',
    color: '#609966',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#FFFFE8',
   margin: 15
   },
});
