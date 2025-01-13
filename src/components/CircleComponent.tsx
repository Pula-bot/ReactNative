import {View, Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';

interface Props {
    size?: number;
    children: ReactNode;
    color?: string;
    onPress?: () => void;
    styles?: StyleProp<ViewStyle>;
}

const CircleComponent = (props: Props) => {
    const {children, size, color, onPress, styles} = props;

    const loaclStyles: any = {
        width: size ?? 40,
        height: size ?? 40,
        backgroundColor: color ?? appColors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    };

    return onPress ? (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            style={[
                loaclStyles, styles,
            ]}>
            {children}
        </TouchableOpacity>
    ) : (
        <View
        style={[
            loaclStyles, styles,
        ]}>
            {children}
        </View>
    );
};

export default CircleComponent;