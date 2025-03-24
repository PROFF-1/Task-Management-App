import { FlatList, StyleSheet, Text, View,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TodoInput from '../component/TodoInput'
import TodoItem from '../component/TodoItem'

//
const TodoScreen = () => {

  const [todos,setTodos]=useState([])

  useEffect(()=>{
    saveTodo()
  }, [todos])

  useEffect(()=>{
    loadTodo()
  },[])

  const addTodo = (text)=>{
    setTodos([...todos ,{id: Date.now().toString(), text, completed:false}])
  }

  const deleteTodo=(id)=>{
    Alert.alert('Delete To do', "Are you sure you want to delete this todo?",[
      {
        text:'cancel',
        style:'cancel'
      },
      {
      text: 'Delete',
      styles: 'destructive',
      onPress:()=>setTodos(todos.filter((todo)=> todo.id !== id))
      }
    ])
  }


  const toggleComplete=(id)=>{
    setTodos(
      todos.map((todo)=>todo.id === id ?{...todo, completed: !todo.completed}: todo)
    )
  }


  const saveTodo =async()=>{
    try{
      await AsyncStorage.setItem("todos",JSON.stringify(todos))
    }
    catch{
      console.log('ERROR SAVING TODO', error)
    }
  }


  const loadTodo =async()=>{
    try {
      const saveTodos = await AsyncStorage.getItem("todos")
      
      if(saveTodo){
      setTodos(JSON.parse(todos))
    }
  }
    catch(error) {
      console.log('Error loading todos', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <TodoInput onAddTodo={addTodo}/>

      <FlatList
        data={todos}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <TodoItem item={item} onDelete={deleteTodo} onComplete={toggleComplete}/>
        )}
      />
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:60,
    backgroundColor:'white'
  },
  header:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom: 10,
    textAlign: 'center'
  }
})