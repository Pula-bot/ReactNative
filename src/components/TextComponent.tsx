import { Text, StyleProp, TextStyle, Platform } from 'react-native';
import React from 'react';
import { appColors } from '../constants/appColors'; 
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyles } from '../styles/globalStyles';  

interface Props {
    text: string;
    color?: string;
    size?: number;
    flex?: number;
    font?: string;
    styles?: StyleProp<TextStyle>;
    title?: boolean;
    numberOfLines?: number;
}

const TextComponent = (props: Props) => {
    const {text, color, size, flex, font, styles, title, numberOfLines} = props;
    const fontsizeDefault = Platform.OS === 'ios' ? 16 : 14;
    return (
        <Text
        numberOfLines={numberOfLines}
            style={[
                globalStyles.text,
                {
                    color: color ? color : appColors.text,
                    fontSize: size ? size : title? 24 : fontsizeDefault,
                    flex: flex ? flex : 0,
                    fontFamily: font ? font
                        ? font
                        ? title
                        ? fontFamilies.medium
                        : fontFamilies.regular,
                },
                styles,
            ]}>
            {text}
        </Text>
    );
};

export default TextComponent;