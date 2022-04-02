import React, {Component} from 'react'
import {
    ImageBackground,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Alert
} from 'react-native'
import AuthInput from '../components/AuthInput';
import axios from 'axios'

import { server, showError, showSuccess} from './common';

import Style from '../Style';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false
  }

export default class Auth extends Component {
        state = {
           ...initialState
        }

        signinOrSignup = () => {
            if(this.state.stageNew) {
                this.signup()
            } else {
                Alert.alert("Sucesso!", "Logar")
            }
        }

        signup = async () => {
            try {
                await axios.post(`${server}/signup`,{
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword,
                })

                showSuccess("Usuário cadastrado!")
                this.setState({...initialState})

            }catch(e) {
                showError(e)
            }
        }

    render() {
        return (
            <ImageBackground 
            source={require('../assets/imgs/login.png')}
            style={estilo.background} >

                <Text style={estilo.title}>Lista </Text>
                <View style={estilo.formContainer}>
                    <Text style={estilo.subtitle}>
                    {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus sados'}
                    </Text>

                    {this.state.stageNew &&
                    <AuthInput
                    icon="user" 
                    placeholder='Nome' 
                    value={this.state.name}
                    style={estilo.input} 
                    onChangeText={name => this.setState({name})}/>
                    }   

                    <AuthInput
                    icon="at" 
                    placeholder='E-mail' 
                    value={this.state.email}
                    style={estilo.input} 
                    onChangeText={email => this.setState({email})}/>

                    <AuthInput
                    icon="lock" 
                    placeholder='Senha' 
                    value={this.state.password}
                    style={estilo.input} 
                    secureTextEntry={true} 
                    onChangeText={password => this.setState({password})}/>

                    {this.state.stageNew &&
                    <AuthInput
                    icon="asterisk" 
                    placeholder='Confirmação de Senha' 
                    value={this.state.confirmPassword}
                    style={estilo.input} 
                    secureTextEntry={true} 
                    onChangeText={confirmPassword => this.setState({confirmPassword})}/>
                    }

                    <TouchableOpacity 
                    onPress={this.signinOrSignup}>
                    <View style={estilo.button}>
                    <Text style={estilo.buttonText}>
                    {this.state.stageNew ? 'Registra' : 'Entrar'}
                    </Text>
                    </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                style={{padding: 10,}}
                onPress={
                () => this.setState({ stageNew: !this.state.stageNew })}>
                <Text style={estilo.buttonText}>
                {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                </Text>
                </TouchableOpacity>

            </ImageBackground>

        )
    }
}

const estilo = StyleSheet.create({
    background: {

        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: Style.fontFamily,
        color: Style.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subtitle:{
        fontFamily: Style.fontFamily,
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10

    },
    formContainer:{
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
        width: '90%',
        borderRadius: 20
    },
    input:{
        marginTop: 10,
        backgroundColor: '#fff',
    },
    button:{
        backgroundColor: 'purple',
        marginTop: 10,
        padding: 5,
        alignItems: 'center',
        borderRadius: 9
    },
    buttonText:{
        fontFamily: Style.fontFamily,
        color: '#fff',
        fontSize: 15
    }
})

/*

signup = async () => {
            try {
                await axios.post(`${server}/signup`,{
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword,
                })

            }catch(e) {
                showError(e)
            }
        }

        Para passar pro usuario q foi tudo bem sucedido ou nao

*/