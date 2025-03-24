import { StyleSheet, TextInput, View,Button } from 'react-native'
import React, {useState} from 'react'

const TodoInput = ({onAddTodo}) => {

  const [text, setText]=useState()

  const handleAdd=()=>{
    if(text.trim().length > 0){
      onAddTodo(text)
      setText('')
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder='Enter A task.....'
        value={text}
        onChangeText={setText}
      />

     
      <Button
        title='Add'
        onPress={handleAdd}
      />
    </View>
  )
}

export default TodoInput

const styles = StyleSheet.create({

  inputContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'row',
    marginBottom: 10
  },

  input:{
    flex:1,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingLeft:10,
    marginRight: 20,
    borderRadius:5
  }
})