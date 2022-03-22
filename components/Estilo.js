import { StyleSheet } from 'react-native';
import Style from '../Style';

const estilo = StyleSheet.create({
    container:{
    flexDirection: 'row',
    borderColor: '#aaa',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff'
    },
    checkContainer:{
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    },
    pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#555'
    },
    done:{
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: '#4d7',
    alignItems: 'center',
    justifyContent: 'center'
    
    },
    desc:{
    fontFamily: Style.fontFamily,
    color: Style.colors.mainText,
    fontSize: 15,
    },
    date:{
    fontFamily: Style.fontFamily,
    color: Style.colors.subText,
    fontSize: 12
    
    },
    right:{
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    left:{
        
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
    },
    excludeText:{
        fontFamily: Style.fontFamily,
        color: '#fff',
        fontSize: 20,
        margin: 10
    
    },
    excludIcon:{
        marginLeft: 10
    }
    
    })

    export default estilo;