    import React, { Component } from 'react';
    import {Platform, TextInput, TouchableOpacity, Modal, View, TouchableWithoutFeedback, Text} from 'react-native';
    import DateTimePicker from '@react-native-community/datetimepicker';
    import estilo from './EstiloAdd';


    import moment from 'moment'



        const initialState = {
            desc: '',
            date: new Date(),
            showDatePicker: false
        }

        export default class AddTask extends Component {

            state = {
                ...initialState
            }

            save = () => {
                const newTask = {
                    desc: this.state.desc,
                    date: this.state.date
                }

                this.props.onSave && this.props.onSave(newTask)
                this.setState({
                    ...initialState
                })


            }

        getDatePicker = () => {

            let datePicker = <DateTimePicker value={this.state.date} 
                onChange={(_, date) => this.setState ({date, showDatePicker:  false})}
                mode='date' />

            const dateString = moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')

                if(Platform.OS === 'android') {
                    datePicker = (
                <View>
                    
                    <TouchableOpacity onPress = {
                        () => this.setState({
                            showDatePicker: true
                        })
                    } >
                    <Text style = {estilo.date} > 
                    
                        {dateString} </Text>
                     </TouchableOpacity> 
                     
                     {this.state.showDatePicker && datePicker}

                    </View>
                )
            }

            return datePicker
        }

    render() {

        return (
        <Modal transparent={true} visible={this.props.isVisible}
            onRequestClose={this.props.onCancel} animationType='slide'>

        <TouchableWithoutFeedback
        onPress={this.props.onCancel}>

    <View style={estilo.fundo}></View>
        </TouchableWithoutFeedback>

    <View style={estilo.container}>
        <Text style={estilo.header}>Nova Tarefa</Text>

        <TextInput style={estilo.input} placeholder="Informe a Descrição..."
            value={this.state.desc} onChangeText={desc => this.setState({desc})} />

            {this.getDatePicker()}

    <View style={estilo.botoes}>

        <TouchableOpacity onPress={this.props.onCancel}>
        <Text style={estilo.botao}>Cancelar</Text>
        </TouchableOpacity>

        < TouchableOpacity onPress={this.save}>
        <Text style={estilo.botao}>Salvar</Text>
        </TouchableOpacity>

    </View>
    </View>

    <TouchableWithoutFeedback
    onPress={this.props.onCancel}>
    <View style={estilo.fundo}>
    </View>
    </TouchableWithoutFeedback>



    </Modal>
    )
    }
    }

    