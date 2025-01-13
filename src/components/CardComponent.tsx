import { TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';

interface Props {
    children: ReactNode;
    styles?: StyleProp<ViewStyle>;
    bgColor?: string;
}

const CardComponent = (props: Props) => {
    const {children, styles, bgColor} = props;

    return (
       <TouchableOpacity
       style={[
        globalStyles.shadow,
        globalStyles.card,
        {
            backgroundColor: bgColor ?? appColors.white,
        },
        styles,

       ]}>
              {children}
         </TouchableOpacity>
    );
};

export default CardComponent;