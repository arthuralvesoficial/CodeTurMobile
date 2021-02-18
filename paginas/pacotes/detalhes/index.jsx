import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList,  Image } from 'react-native';
import { CardViewWithImage } from 'react-native-simple-card-view'
 
const DetalhesPacotes = ({ route}) => {
    const {pacote} = route.params;
    return (
        <View>
            <CardViewWithImage
                width={'100%'}
                source={ {uri: pacote.imagem} }
                content={ pacote.descricao }
                title={ pacote.titulo}
                imageWidth={ '100%' }
                imageHeight={ 300 }
                roundedImage={ false }
            />
        </View>
    )
}

export default DetalhesPacotes;