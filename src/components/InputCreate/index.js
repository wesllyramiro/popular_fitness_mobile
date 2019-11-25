import React from 'react';

import { StyleSheet } from 'react-native'

import {
    InputText
} from './styles'

export default function InputCreate({textPlacehiolder,change,value,keyboardType,secure,color}){
    const style = StyleSheet.create({
        color:{
            borderColor:color,
            color:color
        }
    })
    return (
        <>
            <InputText style={style.color}
                placeholder={textPlacehiolder}
                placeholderTextColor={color}
                keyboardType={keyboardType}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={change}
                secureTextEntry={secure}
                value={value}
            />
        </>
    )
}

