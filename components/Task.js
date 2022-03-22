import React from 'react';
import {TouchableOpacity, View, Text, TouchableWithoutFeedback} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import estilo from './Estilo';



import moment from 'moment'
import 'moment/locale/pt-br'




export default props =>{

const doneOrNotStyle = props.doneAt != null ?
{ textDecorationLine: 'line-through'} : {}

const date = props.doneAt ? props.doneAt : props.estimateAt

const FormattedDate = moment(date).locale('pt-br') 
.format('ddd, D [de] MMMM')     //aqui mexe na data, e na forma q aparece no projeto

const getRightContent = () => {
    return (
        
        <TouchableOpacity style={estilo.right}
        onPress={() => props.onDelete && props.onDelete(props.id)} >
            <Entypo name="trash" size={25} color="#fff" />
        </TouchableOpacity>
    )
}

const getLeftContent = () => {
    return (
        
        <View style={estilo.left}>
            <Entypo name="trash" size={20} color="#fff" style={estilo.excludIcon} />
            <Text style={estilo.excludeText}>Excluir</Text>
        </View>
    )

}

return (
<GestureHandlerRootView>
< Swipeable
renderRightActions = {
    getRightContent
}
renderLeftActions = {
    getLeftContent
}
onSwipeableLeftOpen = {
    () => props.onDelete && props.onDelete(props.id)
} >


<View style={estilo.container}>

<TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>

<View style={estilo.checkContainer}>
{getCheckView(props.doneAt)}
</View>

</TouchableWithoutFeedback>

<View>
<Text style={[estilo.desc, doneOrNotStyle]}>{props.desc}</Text>
<Text style={estilo.date}>{FormattedDate}</Text>
</View>
</View>

</Swipeable>
</GestureHandlerRootView>


)
}

function getCheckView(doneAt){
if(doneAt != null){
return (
<View style={estilo.done}>
    <AntDesign name="check" size={20} color="white" />            
</View>
)
}else {
return (
<View style={estilo.pending}>
    
</View>
)
}

}


