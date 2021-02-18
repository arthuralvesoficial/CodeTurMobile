import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList,  Image } from 'react-native';
// import ItemEvento from '../../components/ItemEvento';
 
// import AsyncStorage from '@react-native-async-storage/async-storage';
 
const ListarPacotes = () => {
 
       const [pacotes, setPacotes] = useState([]);
 
    // useEffect(() => {
    //     listarEventos();
    // },[])
 
    // const listarEventos = () => {
    //     fetch(`http://192.168.3.55:5000/api/eventos`)
    //     .then(response => response.json())
    //     .then(dados => {
    //         setEventos(dados.data);
    //         console.log(dados.data);
    //     })
    //     .catch(err => console.error(err));
    // }
 
    // const renderItem = (evento) => {
    //     return (
    //        <ItemEvento 
    //         nome={evento.item.nome} 
    //         imagem={evento.item.urlImagem} 
    //         link={evento.item.link} />
    //     )
    // }
 
    return(
        <View style={styles.container}>
            <Text>Listar PACOTES</Text>
 
            {/* <Image
                style={styles.logo}
                source={{
                    uri: 'https://raw.githubusercontent.com/sena-code/React-Node/main/4%20-%20Trabalhando%20com%20react-bootstrap%20e%20react-router-dom/nyous-react/src/assets/img/Logo.svg',
                }}
            />
            <FlatList
                data={eventos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            /> */}
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo : {
        width: 200,
        height: 200,
    }
  });

  export default ListarPacotes;