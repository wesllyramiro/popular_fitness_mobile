import React from 'react';

import ImageNutri from '../../assets/BG_Nutri.png'

import TextTitle from '../../components/TextTitle'
import InputCreate from '../../components/InputCreate'
import ButtonHome from '../../components/ButtonHome'
import GoBack from '../../components/GoBack'

import api from '../../services/api'

import ContainerImage from '../../components/ContainerImage'

import {
    Alert
} from 'react-native'

import {
    InfoText,InfoView
} from './styles'

import {
    useState
} from 'react'

export default function CreateNutricionista({ navigation }){
    async function HandleCreateProfessional(){
        await api.post('/profissional', {
            email,
            nome,
            password,
            login,
            crn
        })
        
        Alert.alert("Salvo")
        navigation.navigate("Home")
    }

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [nome,setNome] = useState("")
    const [login,setLogin] = useState("")
    const [crn,setCrn] = useState("")

    return (
        <ContainerImage image={ImageNutri}>
            <GoBack press={() => navigation.navigate("ProfessionalOption") }/>
            <TextTitle text="POPULAR FITNESS" color="#000000"/>
            <InfoView>
                <InfoText>
                    Caro(a) Nutricionista,{"\n"}
                    {"\n"}
                    A participação na atividade é feita em caráter espontâneo e sem nenhum vínculo empregatício. 
                    Para participar, é exigido cadastro no CFN. O voluntário admite estar ciente de uma remuneração
                    inferior à de mercado, escolhendo o dia e horário em que poderá contribuir.
                </InfoText>
            </InfoView>
            <InputCreate 
                textPlacehiolder="E-MAIL"
                change={(e) => setEmail(e)}
                value={email}
                keyboardType="email-address"
            />
             <InputCreate 
                textPlacehiolder="NOME COMPLETO"
                change={(e) => setNome(e)}
                value={nome}
                keyboardType="default"
            />
             <InputCreate 
                textPlacehiolder="CRN"
                change={(e) => setCrn(e)}
                value={crn}
                keyboardType="default"
            />
             <InputCreate 
                textPlacehiolder="LOGIN"
                change={(e) => setLogin(e)}
                value={login}
                keyboardType="default"
            />
            <InputCreate 
                textPlacehiolder="PASSWORD"
                change={(e) => setPassword(e)}
                value={password}
                keyboardType="default"
                secure={true}
            />
            <ButtonHome
                borderColor="#000000"
                text="CONCLUIR CADASTRO"
                textColor="#000000"
                press={HandleCreateProfessional}
            />
        </ContainerImage>
    )
}