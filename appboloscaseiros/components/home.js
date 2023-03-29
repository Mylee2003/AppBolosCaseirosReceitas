import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> As melhores receitas de Bolo</Text>
      <ScrollView>
      <Image source={require('../assets/bolo.jpg')} />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('BoloChocolate');
        }}>
        <Text style={styles.blch}> Bolo de Chocolate</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('BoloFuba');
        }}>
        <Text style={styles.blch}> Bolo de Fubá</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('BoloMilho');
        }}>
        <Text style={styles.blch}> Bolo de Milho</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBC79E',
  },
  titulo: {
    margin: 24,
    fontSize: 29,
    color: '#FF0000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blch: {
    backgroundColor: '#E6E8FA',
    color: '#5C4033',
    borderRadius: 10,
    textAlign: 'center',
    height: 29,
    width: 250,
    fontSize: 20,
    fontWeight: 'bold',
    top: 10,
    margin: 25,
  },

});
