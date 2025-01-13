import { Image, Switch } from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponents,
  TextComponent,

} from '../../components';
import { appColors } from '../../constants/appColors';
import {Lock, Sms} from 'iconsax-react-native';
import { Validate } from '../../utils/validate';


const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const emailValidation = Validate.email(email);
    if (!email || ! password || !emailValidation) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [email, password]);

  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
      styles={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 75,
      }}>
        <Image
          source={require('../../constants/assets/images/text-logo.png')}
          style={{
            width: 162,
            height: 114,
            marginBottom: 30,
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent size={24} title text='Sign In' />  
        <SpaceComponents height={21} />
        <InputComponent
          value={email}
          placeholder='Email'
          onChange={val => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
          />
        <InputComponent
          value={password}
          placeholder='Password'
          onChange={val => setPassword(val)}
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
          />
        <RowComponent justify='space-between'>
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
              trackColor={{true: appColors.white}}
              thumbColor={appColors.white}
            />
            <SpaceComponents width={4} />
            <TextComponent text='Remember me' />
          </RowComponent>
          
        <ButtonComponent
          text='Forgot Password?'
          onPress={() => navigation.navigate('ForgotPassword')}
          type='text'
          />
        </RowComponent>
        </SectionComponent>
        <SpaceComponents height={16}/>
        <SectionComponent>
          <ButtonComponent
            text='SIGN IN'
            // onPress={handleLogin}
            disabled={isDisabled}
            type='primary'
          />
        </SectionComponent>
        {/* <SocialLogin /> */}
        <SectionComponent>
          <RowComponent justify='center'>
            <TextComponent text='Don’t have an account?' />
            <ButtonComponent
              text='Sign Up'
              onPress={() => navigation.navigate('SignUpScreen')}
              type='link'
            />
          </RowComponent>
        </SectionComponent>
    </ContainerComponent>
  );
};


export default LoginScreen;