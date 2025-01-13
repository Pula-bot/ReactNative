import {
    
    View, 
    StyleProp,
    ViewStyle,
    TextStyle,
    TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import  TextComponent  from './TextComponent';
import { globalStyles  } from '../styles/globalStyles';
import { appColors } from '../constants/appColors'; 
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
    icon?: ReactNode;
    text: string;
    type?: 'primary' | 'text' | 'link';
    color?: string;
    styles?: StyleProp<ViewStyle>;
    textColor?: string;
    textStyle?: StyleProp<TextStyle>;
    textFont?: string;
    onPress?: () => void;
    iconFlex?: 'right' | 'left';
    disabled?: boolean;
}

const ButtonComponent = (props: Props) => {
    const {
        icon,
        text,
        type,
        color,
        styles,
        textStyle,
        textColor,
        textFont,
        onPress,
        iconFlex,
        disabled,
    } = props;

    return type === 'primary' ? (
        <View style ={{alignItems: 'center'}}>
            <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                globalStyles.button,
                globalStyles.shadow,
                {
                    backgroundColor: color
                        ? color
                        : disabled
                        ? appColors.gray4
                        : appColors.primary,
                    marginBottom: 17,
                    width: '90%',
                },
                styles,
            ]}>
            {icon && iconFlex === 'left' && icon}
            <TextComponent
                text={text}
                color={textColor ? textColor : appColors.white}
                font={textFont ? textFont : fontFamilies.medium}
                style={[
                    textStyle,
                    {
                        marginLeft: icon ? 12 : 0,
                        fontSize: 16,
                        textAlign: 'center',
                    },
                ]}
                flex={icon && iconFlex === 'right' ? 1 : 0}
                />
                {icon && iconFlex === 'right' && icon}
            </TouchableOpacity>
        </View>
    ) : (
        <TouchableOpacity onPress={onPress} style={styles}>
            <TextComponent
            flex={0}
            text={text}
            color={type === 'link' ? appColors.primary : appColors.text}
            />
        </TouchableOpacity>
    );
};

export default ButtonComponent;

