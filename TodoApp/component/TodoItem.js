import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TodoItem = ({item, onDelete, onComplete}) => {
  return (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={()=> onComplete(item.id)}>
        <Text
        styles={[styles.todoText, item.complete && styles.completed]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>onDelete(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>
          x
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({

  todoItem:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    padding: 15,
    margin: 10
  },

  todoText:{
    fontSize:60,
  },

  completed:{
    textDecorationLine:'line-through'
  },

  deleteButton:{
    backgroundColor:'red',
    padding:5,
    borderRadius:5,

  },

  deleteText:{
    color:'white',
    fontWeight:'bold',
    fontSize:24
  }
})