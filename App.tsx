import React, { useEffect, useState} from "react";
import { SplashScreen }  from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigators/AuthNavigator";
import MainNavigator from "./src/navigators/MainNavigator";
import { StatusBar } from "react-native"; 
import { useAsyncStorage } from "@react-native-async-storage/async-storage";


const App = () => {
  // su dung useState de luu thoi gian 1.5s
  const [isShowSplash, setIsShowSplash] = useState(true); 
  //muon luu lien thi dung store redux toolkit
  const [accessToken, setAccessToken] = useState('');
  //kiem tra dang nhap
  const { getItem, setItem } = useAsyncStorage('accessToken');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    }
  }, []);
//chay 1 lan thi dung useEffect khong tham so []
useEffect(() => {
  checkLogin();
}, []);

const checkLogin = async () => {
  const token = await getItem();
  console.log('token', token);
  //check token
  token && setAccessToken(token);
};
  //dung dau ! de phu dinh dieu kien
  // bg nam duoi thanh status bar

  return <>
  <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} /> 
  {
    !isShowSplash ? (
      <SplashScreen />
    ) : (
      <NavigationContainer>
        {/* <AuthNavigator /> kiem tra token neu co thi tra ve Main khong thi tra ve Auth */}
        {accessToken ? <MainNavigator /> : < AuthNavigator /> }
      </NavigationContainer>
    )
  }
  </>
};

export default App;