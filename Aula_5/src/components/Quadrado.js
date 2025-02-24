import React from 'react';
import { View } from 'react-native';

export default function Quadrado(props) { 
    return (
        <View
            style={{
                height: 50,
                width: 50,
                backgroundColor: props.cor || '#000000'  // Se não passar cor, será preto
            }}
        />
    );
}
