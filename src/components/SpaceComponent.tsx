import { View, Text } from 'react-native';
import React from 'react';

interface Props {
    width?: number;
    height?: number;
}

const SpaceComponent = (props: Props) => {
    const { width, height } = props;

    return (
        <View style={{ width, height }}>
            <Text>SpaceComponents</Text>
        </View>
    );
};

export default SpaceComponent;