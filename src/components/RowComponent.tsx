import React, { ReactNode } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
    styles?: StyleProp<ViewStyle>;
    children: ReactNode;
    onPress?: () => void;
}

const RowComponent = (props: Props) => {
    const {styles, justify, children, onPress} = props;
     
    const loaclStyles = [
        globalStyles.row,
        {justifyContent: justify ?? 'center'},
        styles,
    ];
    return onPress ? (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={loaclStyles}>
            {children}
        </TouchableOpacity>
    ) : (
        <View style={loaclStyles}>{children}</View>
    );
};

export default RowComponent;

