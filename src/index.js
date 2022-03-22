    import React, { Component } from 'react';
    import {Alert, View, Text, ImageBackground, FlatList, TouchableOpacity} from 'react-native';
    import Task from '../components/Task';
    import AddTask from './AddTask';
    import AsyncStorage from '@react-native-async-storage/async-storage';
    import estilo from './Estilo';
    import Style from '../Style'; 



    import { FontAwesome, AntDesign } from '@expo/vector-icons';
    import moment from 'moment'
    import 'moment/locale/pt-br';   //o import q esta no package.json

    const initialState = {
      showDoneTasks: true,
      showAddTask: false,
      visibleTasks: [],
      tasks: []
    }


    export default class TaskList extends Component {
      state= {
        ...initialState
      
    }

    componentDidMount = async() => {
        const stateString = await AsyncStorage.getItem('state')
          const state = JSON.parse(stateString) || initialState
            this.setState(state, this.filterTasks)
    }

    toggleFilter = () => {
      this.setState({ showDoneTasks: !this.state.showDoneTasks}, this.filterTasks) //para mudar o olho do app
    }

    filterTasks = () => {
      let visibleTasks = null
        if(this.state.showDoneTasks){
          visibleTasks =[...this.state.tasks]

      } else{
          const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending)   // para filtra apenas as tasks pendentes e nao as concluidas
      }

      this.setState({visibleTasks})
        AsyncStorage.setItem('state', JSON.stringify(this.state))   //volta o state la de cima
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
          this.setState({ tasks}, this.filterTasks)
    }



    toggleTask = taskId => {
      const tasks = [...this.state.tasks]
        tasks.forEach(task => {
          if(task.id === taskId){
            task.doneAt = task.doneAt ? null : new Date()
        }
      })

      this.setState({ tasks }, this.filterTasks)  //quando clica no olho as tarefas concluidas vao sumir

    }

    addTask = newTask => {
        if(!newTask.desc || !newTask.desc.trim()) {
          Alert.alert('Dados Invalidos', 'Descrição não informada!')
            return 
        }

        const tasks = [...this.state.tasks]
        tasks.push({
          id: Math.random(),
          desc: newTask.desc,
          estimateAt: newTask.date,
          doneAt: null
        })
        this.setState({
          tasks,
          showAddTask: false
        }, this.filterTasks)
        }

    render() {
      const today = moment().locale('pt-br').format('ddd, D [de] MMMM') //aqui aparece a data
        return (

      <View style={estilo.container}>

          <AddTask isVisible={this.state.showAddTask}
            onCancel={() => this.setState({showAddTask: false})}
              onSave={this.addTask} />

          <ImageBackground source={require('../assets/imgs/today.jpg')} style={estilo.fundo}>

      <View style={estilo.iconBar}>

            <TouchableOpacity onPress={this.toggleFilter}>

            <FontAwesome name={this.state.showDoneTasks ? "eye" : "eye-slash"} size={20} color={Style.colors.secondary} /> 
            </TouchableOpacity>

      </View>

      <View style={estilo.titleBar}>
          <Text style={estilo.title}>Hoje</Text>
          <Text style={estilo.subtitle}>{today}</Text>
        </View>
      </ImageBackground>

      <View  style={estilo.taskList}>
        <FlatList data={this.state.visibleTasks}
          ketExtractor={item => `${item.id}`}
          renderItem={({item}) => <Task {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask} />} />
      </View>

        <TouchableOpacity style={estilo.addBotao}
            activeOpacity={0.8}
            onPress={() => this.setState({showAddTask: true})} >

        <AntDesign name="pluscircleo" size={40} color={Style.colors.secondary} />
        </TouchableOpacity>
      </View>
      )
    }
    }

    