import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './components/Navigator';


export default function App ()  {
const [fontsLoaded] = useFonts({
'Nunito400Regular': require('./assets/fonts/Nunito400Regular.ttf'),
});
if (!fontsLoaded) {
return (
<AppLoading />
)

}else{
  return (
<Navigator />
)

    
  }
}

