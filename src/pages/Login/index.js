import React from 'react';
import logo from '../../assets/PersonaliseYourBrand.png'
import imageBackgroundDefault from '../../assets/Default.png'

import ButtonHome from '../../components/ButtonHome'
import ContainerImage from '../../components/ContainerImage'
import GoBack from '../../components/GoBack'

import InputCreate from '../../components/InputCreate'

import {
    Logo
} from './styles'

import api from '../../services/api'

import {
    Alert
} from 'react-native'

import {
    useState
} from 'react'

export default function Login({ navigation }){
    const [password,setPassword] = useState("")
    const [login,setLogin] = useState("")

    async function HandleSingIn(){
        await api.post('/login',{
            login,
            password
        }).then(()=>{
            navigation.navigate("Painel")
        }).catch(()=>{

        })
    }

    return (
        <ContainerImage image={imageBackgroundDefault} >
            <GoBack press={() => navigation.navigate("Home") } />
            <Logo source={logo} />
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
                text="FAZER LOGIN"
                textColor="#000000"
                press={HandleSingIn}
            />
        </ContainerImage>
    )
}