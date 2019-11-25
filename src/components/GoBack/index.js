import React from 'react';

import Image from '../../assets/Voltar.png'

import {
    GoView ,GoBackImage ,SelectButtonTouch
} from './styles'

export default function GoBack({ press }){
    return(
        <GoView>
            <SelectButtonTouch onPress={press}>
                <GoBackImage source={Image} />
            </SelectButtonTouch>
        </GoView>
    )
}
