import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default props => {
    return(
        <View style={[estilo.container, props.style]}>
            <FontAwesome name={props.icon} size={20} style={estilo.icon} />
            <TextInput {...props} style={estilo.input} /> 

        </View>
    )
}

const estilo=StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        backgroundColor: "#EEE",
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon:{
        color: '#333',
        marginLeft: 20

    },
    input:{
        marginLeft: 20,
        width: '70%'
    }

})




/*

<TextInput {...props} />
 ira substituir na tela de autenticação (Auth), onde tiver "TextInput"
 era substituir para funciona no TextInput exemplo (placeHolder, onChangeText...)


*/