import React, { useState } from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
export default function Login() {
    const [email, setEmail] = useState('');
    const [passorwd, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    function getLogin() {
        try {
            setLoading(true)

            if (!email || !passorwd) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
            }

            setTimeout(() => {
                if (email == 'Joao' && passorwd == '1234') {
                    Alert.alert('Logado com sucesso!')
                } else {
                    Alert.alert('Email ou senha incorreto')
                }

                setLoading(false)
            }, 3000)


        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>

            <View style={style.boxMid}>
                <Input
                    title="ENDEREÇO DE E-MAIL"
                    IconRigth={MaterialIcons}
                    iconRightName="email"
                />
                {/* <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themas.colors.gray}
                    />

                </View>

                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        value={passorwd}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons
                        name='remove-red-eye'
                        size={20}
                        color={themas.colors.gray}
                    />

                </View> */}
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                    {
                        loading ?
                            <ActivityIndicator color={'#fff'} size={"small"} />
                            :
                            <Text style={style.textButton}>Entrar</Text>}

                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta?<Text style={{ color: themas.colors.primary }}>Crie agora</Text></Text>
        </View>
    )
}