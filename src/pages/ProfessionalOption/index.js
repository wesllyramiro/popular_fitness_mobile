import React from 'react';
import logo from '../../assets/PersonaliseYourBrand.png'
import imageBackgroundDefault from '../../assets/Default.png'

import ButtonHome from '../../components/ButtonHome'
import ContainerImage from '../../components/ContainerImage'
import GoBack from '../../components/GoBack'

import { 
    Logo,TextWelcome,AlignButton
} from './styles'

export default function ProfessionalOption({ navigation }){
    return(
        <ContainerImage image={imageBackgroundDefault}>
             <GoBack press={() => navigation.navigate("Home") } />
            <Logo source={logo} />
            <TextWelcome>Qual sua formação ?</TextWelcome>
            <AlignButton>
                <ButtonHome 
                    borderColor="#FFFFFF"
                    textColor="#FFFFFF"
                    press={() => navigation.navigate('CreateNutricionista') } 
                    text="NUTRICIONISTA"/>
                <ButtonHome 
                    borderColor="#FFFFFF"
                    textColor="#FFFFFF"
                    press={() => navigation.navigate('CreatePersonal') }
                    text="PERSONAL TRAINER"/>
            </AlignButton>
        </ContainerImage>
    )
} 