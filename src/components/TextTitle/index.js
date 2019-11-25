import React from 'react';

import { StyleSheet } from 'react-native'

import {
    TitleView,TitleText  
} from './styles'

export default function TextTitle({ text,color }){
    const style = StyleSheet.create({
        color : {
            color:color
        }
    })
    return (
        <TitleView>
            <TitleText style={style.color} >
                {text}
            </TitleText>
        </TitleView>
    )
}