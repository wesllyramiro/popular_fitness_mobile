import React from 'react';

import { StyleSheet } from 'react-native'

import {
    InfoView,InfoText  
} from './styles'

export default function TextInfo({ children ,text , color }){
    const style = StyleSheet.create({
        color : {
            color:color
        }
    })
    return (
        <InfoView>
            <InfoText style={style.color}>
                {text}{"\n"}
                {"\n"}
                {children}
            </InfoText>
        </InfoView>
    )
}