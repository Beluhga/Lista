import {StyleSheet} from 'react-native';
import Style from '../Style';

const estilo = StyleSheet.create ({

    fundo:{

    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },

    container:{

        backgroundColor: '#fff',
    },

    header:{

        fontFamily: Style.fontFamily,
        backgroundColor: Style.colors.today,
        color: Style.colors.secondary,
        textAlign: 'center',
        padding: 10,
        fontSize: 16
    },

    input:{

        fontFamily: Style.fontFamily,
        height: 40,
        marginTop: 15,
        marginLeft: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6

    },

    botoes:{

        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    botao:{

        margin: 20,
        marginRight: 30,
        color: Style.colors.today
    },

    date:{

        fontFamily: Style.fontFamily,
        fontSize: 20,
        marginLeft: 15
    }


    })

    export default estilo;