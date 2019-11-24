import React from 'react';

import { 
    SelectButtonTouch ,SelectButtonText ,SelectButton
} from './styles'


export default function ButtonHome({ text,press }){
    return (
        <SelectButtonTouch onPress={press}>
            <SelectButton>
                <SelectButtonText>
                    {text}
                </SelectButtonText>
            </SelectButton>
        </SelectButtonTouch>
    )
}