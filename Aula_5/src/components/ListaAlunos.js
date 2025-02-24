import React from 'react';
import { FlatList, Text, View } from 'react-native';

// Array de alunos
const alunos = [
    {id : 1 , nome : "Joaquim" , NumeberoFaltas : 2},
    {id : 2 , nome : "Pedro" , NumeberoFaltas : 5},
    {id : 3 , nome : "Maria" , NumeberoFaltas : 9},
    {id : 4 , nome : "Miguel" , NumeberoFaltas : 8},
    {id : 5 , nome : "Abner" , NumeberoFaltas : 1},
    {id : 6 , nome : "Caio" , NumeberoFaltas : 3},
    {id : 7 , nome : "Pablo" , NumeberoFaltas : 4},
    {id : 8 , nome : "Beatriz" , NumeberoFaltas : 6},
    {id : 9 , nome : "Francisco" , NumeberoFaltas : 7},
    {id : 10 , nome : "Erick" , NumeberoFaltas : 0},
];

export default function ListaAlunos() { 
    return (
        <View>
            <FlatList
                data={alunos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text>{item.nome}</Text> 
                )}
            />
        </View>
    );
}
