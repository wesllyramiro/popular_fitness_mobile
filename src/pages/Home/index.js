import React from 'react';
import ImgHome from '../../assets/BG_Home.png'
import logo from '../../assets/PersonaliseYourBrand.png'

import ButtonHome from '../../components/ButtonHome'
import ContainerImage from '../../components/ContainerImage'

import { 
    Logo , TextWelcome , AlignButton
} from './styles'

export default function Home({ navigation }){

    return (
        <ContainerImage image={ImgHome} >
            <Logo source={logo} />
            <TextWelcome>Seja bem vindo(a),</TextWelcome>
            <AlignButton>
                <ButtonHome 
                    borderColor="#FFFFFF"
                    textColor="#074470"
                    press={() => navigation.navigate('CreateUser') } 
                    text="USUÁRIO"/>
                <ButtonHome 
                    borderColor="#FFFFFF"
                    textColor="#074470"
                    press={() => navigation.navigate('ProfessionalOption') }
                    text="PROFISSIONAL"/>
            </AlignButton>
        </ContainerImage>
    )
}   