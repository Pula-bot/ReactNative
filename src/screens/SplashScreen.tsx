import React from 'react';
import { ActivityIndicator, Image, ImageBackground } from 'react-native';
import { appInfos } from '../constants/appInfos';
import { appColors } from '../constants/appColors';
import { SpaceComponents } from '../components';

const SplashScreen = () => {
    return (
        <ImageBackground
            source={require('../assets/images/splash.png')}
            style={{ 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}
            imageStyle={{ 
                flex: 1,
            }}>
            <Image
                source={require('../assets/images/logo.png')}
                style={{
                    width: appInfos.sizes.WIDTH*0.7,
                    resizeMode: 'contain',
                }}
            />
            <SpaceComponents height={16} />
            <ActivityIndicator color={appColors.gray} size={22}/>
        </ImageBackground>
    );
};

export default SplashScreen;