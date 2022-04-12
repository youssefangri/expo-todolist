import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Task from '../components/Task';


const HomeScreen = () => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () =>{
        Keyboard.dismiss()
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const handleCompletTask = (index)=>{
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index,1);
        setTaskItems(itemsCopy);
    }
  return (
    <View style={styles.container}>

     {/* Today's Task */}
     <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* all taskes here */}
          {
            taskItems.map((item,index) =>{
              return (
                <TouchableOpacity key={index} onPress={()=> handleCompletTask(index)}>
                    <Task text={item}/>
                </TouchableOpacity>
              )
              
            })
          }
          {/* <Task text={'this is task 1 '}/>
          <Task text={'this is task 2'}/> */}
        </View>
     </View>

     <KeyboardAvoidingView 
        behavior={Platform.OS==='ios'? 'padding':'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a Taks'} value={task} onChangeText={text =>{setTask(text)}}/>
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9F9',
  
    },
    tasksWrapper:{
      paddingTop:80,
      paddingHorizontal:20,
    },
    sectionTitle:{
      fontSize:24,
      fontWeight:'bold'
    },
    items:{
      marginTop:30
    },
    writeTaskWrapper:{
      position:'absolute',
      bottom:60,
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    },
    input:{
      paddingVertical:15,
      paddingHorizontal:15,
      width:250,
      backgroundColor:'#FFF',
      borderRadius:60,
      borderColor:'#C0C0C0',
      borderWidth:1,
    },
    addWrapper:{
      width:60,
      height:60,
      backgroundColor:'#FFF',
      borderRadius:60,
      justifyContent:'center',
      alignItems:'center',
      borderColor:'#C0C0C0',
      borderWidth:1
    },
    addText:{
  
    },
  });