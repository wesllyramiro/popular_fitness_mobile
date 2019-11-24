import React from 'react';
import ImgHome from '../../assets/BG_Home.png'
import logo from '../../assets/PersonaliseYourBrand.png'
import ButtonHome from '../../components/ButtonHome'

import { 
    Container , Logo , TextWelcome , AlignButton
} from './styles'

export default function Home({ navigation }){

    return (
        <Container source={ImgHome} >
            <Logo source={logo} />
            <TextWelcome>Seja bem vindo(a),</TextWelcome>
            <AlignButton>
                <ButtonHome 
                    press={() => navigation.navigation('CreateUser') } 
                    text="USUÁRIO"/>
                <ButtonHome 
                    press={() => navigation.navigation('CreateProfessional') }
                    text="PROFISSIONAL"/>
            </AlignButton>
        </Container>
    )
}