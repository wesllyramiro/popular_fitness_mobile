import React from 'react';

import {
    StyleSheet
} from 'react-native'

import { 
    SelectButtonTouch ,SelectButtonText ,SelectButton
} from './styles'


export default function ButtonHome({ text,press,textColor,borderColor }){

    const style = StyleSheet.create({
        borderColor: {
            borderColor:borderColor,   
        },
        textColor: {
            color:textColor
        }
    })
    return (
        <SelectButtonTouch onPress={press}>
            <SelectButton style={style.borderColor}>
                <SelectButtonText style={style.textColor}>
                    {text}
                </SelectButtonText>
            </SelectButton>
        </SelectButtonTouch>
    )
}