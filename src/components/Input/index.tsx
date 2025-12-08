import React, { forwardRef, Fragment, LegacyRef } from "react";

import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import { style } from "./style";
import { themas } from "../../global/themes";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRigth?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRigthPress?: () => void

}

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) => {

    const { IconLeft, IconRigth, iconLeftName, iconRightName, title, onIconLeftPress, onIconRigthPress, ...rest } = Props

    return (
        <Fragment>
            <Text style={style.titleInput}>{title}</Text>
            <View style={style.boxInput}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity>
                        <IconLeft name={iconLeftName as any} size={20} color={themas.colors.gray} style={style.Icon} />
                    </TouchableOpacity>

                )}
                <TextInput
                    style={style.input}
                />
                <MaterialIcons
                    name="email"
                    size={20}
                    color={themas.colors.gray}

                />

            </View>
        </Fragment>
    )
})