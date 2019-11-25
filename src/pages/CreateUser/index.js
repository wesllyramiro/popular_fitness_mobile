import React from 'react';

import imageUser from '../../assets/BG_Usuário.png'
import ContainerImage from '../../components/ContainerImage'

import TextTitle from '../../components/TextTitle'
import TextInfo from '../../components/TextInfo'
import InputCreate from '../../components/InputCreate'
import ButtonHome from '../../components/ButtonHome'

import GoBack from '../../components/GoBack'

import api from '../../services/api'

import {
    Alert
} from 'react-native'

import {
    useState,
    useEffect
} from 'react'

export default function CreateUser({ navigation }){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [nome,setNome] = useState("")
    const [login,setLogin] = useState("")

    async function handleCreateUser(){
        await api.post('/usuario', {
            email,
            nome,
            password,
            login
        })

        Alert.alert("usuario salvo com sucesso")

        navigation.navigate("Home")
    }

    return (
        <ContainerImage image={imageUser}>
            <GoBack press={() => navigation.navigate("Home") } />
            <TextTitle text="POPULAR FITNESS" color="#FFFFFF"/>
            <TextInfo text="Caro Usuário," color="#FFFFFF">
                A Popular Fitness está ao seu dispor, com a melhor orientação para seu treino e dieta.
            </TextInfo>
            <InputCreate 
                textPlacehiolder="E-MAIL"
                change={(e) => setEmail(e)}
                value={email}
                keyboardType="email-address"
                color="#FFF"
            />
            <InputCreate 
                textPlacehiolder="NOME COMPLETO"
                change={(e) => setNome(e)}
                value={nome}
                keyboardType="default"
                color="#FFF"
            />
            <InputCreate 
                textPlacehiolder="LOGIN"
                change={(e) => setLogin(e)}
                value={login}
                keyboardType="default"
                color="#FFF"
            />
            <InputCreate 
                textPlacehiolder="PASSWORD"
                change={(e) => setPassword(e)}
                value={password}
                keyboardType="default"
                secure={true}
                color="#FFF"
            />
            <ButtonHome
                borderColor="#FFFFFF"
                text="CONCLUIR CADASTRO"
                textColor="#FFFFFF"
                press={handleCreateUser}
            />
        </ContainerImage>
    )
}