import React from "react";

import {
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
export default function Login() {
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
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                    />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themas.colors.gray}
                    />

                </View>

                <Text style={style.titleInput}>SENHA</Text>
                <TextInput />
            </View>

            <View style={style.boxBottom}>

            </View>
        </View>
    )
}