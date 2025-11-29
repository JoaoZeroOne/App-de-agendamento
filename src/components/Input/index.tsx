import React,{forwardRef,Fragment, LegacyRef} from "react";
import {View, Text, TextInput, TextInputProps, TouchableOpacity} from 'react-native';
import {style} from "./style";
import {MaterialIcons, FontAwesome, Octicons} from '@expo/vector-icons';
import { themas } from "../../global/themes";

type IconComponet = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                    React.ComponentType<React.ComponentProps<typeof Octicons>>;
type Props = TextInputProps & {
    IconLeft?: IconComponet,
    IconRigth?: IconComponet,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRigthPres?: () => void
}

export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=>{

    const {IconLeft, IconRigth, iconLeftName, iconRightName, title, onIconLeftPress, onIconRigthPres, ...rest} = Props

    return(
    <Fragment>
       <Text style={style.titleInput}>{title}</Text>
       <View style={style.BoxInput}>
            {IconLeft && iconLeftName &&(
            <TouchableOpacity>
                <IconLeft name={iconLeftName as any} size={20} color={themas.colors.gray} style={style.Icon}/>
            </TouchableOpacity>

            )}
            <TextInput
                style={style.input}

            />
            {IconLeft && iconLeftName &&(
            <TouchableOpacity>
                <IconLeft name={iconLeftName as any} size={20} color={themas.colors.gray} style={style.Icon}/>
            </TouchableOpacity>
            )}

        </View>
    </Fragment>
    )
})