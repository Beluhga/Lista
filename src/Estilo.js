import {StyleSheet, Platform} from 'react-native';
import Style from '../Style'; 


const estilo = StyleSheet.create({

    container:{
      flexGrow:1,
    },

    fundo: {
      flexGrow: 3,
      
    },
    taskList:{
      flexGrow: 7

    },
    titleBar:{

      flex: 1,
      justifyContent: 'flex-end'

    },
    title:{

      fontFamily: Style.fontFamily,
      color: Style.colors.secondary,
      fontSize: 50,
      marginLeft: 20,
      marginBottom: 20,
    },
    subtitle:{

      fontFamily: Style.fontFamily,
      color: Style.colors.secondary,
      fontSize: 20,
      marginLeft: 20,
      marginBottom: 20,
    },
    iconBar:{

      flexDirection: 'row',
      marginHorizontal: 20,
      justifyContent: 'flex-end',
      marginTop: Platform.OS ===  'ios' ? 40 : 30
    },
    addBotao: {

      position: 'absolute',
      right: 30,
      bottom: 30,
      width: 41,
      backgroundColor: Style.colors.today,
      alignItems: 'center',
      borderRadius: 40,
      justifyContent: 'center'
    }

    });

    export default estilo;
