import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const LoginScreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError] = useState('')

    // const handleSignUp = () => {
    //       auth
    //       .createUserWithEmailAndPassword(email, password)
    //       .then((userCredentials) => {
    //           const user = userCredentials.user;
    //             console.log(user);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //     };

    async function signIn() {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError({
            error
          })
        }
      }
  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS==='ios'? 'padding':'height'}
        style={styles.container}
      >
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            value={email}
            onChangeText={text=>{
                setEmail(text);
            }
                }
            placeholder={'Email'}
            />
        <TextInput
            style={styles.input}
            value={password}
            onChangeText={text=> setPassword(text)}
            placeholder={'Password]'}
            secureTextEntry
            />
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={signIn}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.button,styles.buttonOutline]}
            // onPress={}
        >
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
    </View>
      </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',        
        
    },
    inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        backgroundColor:'#0782F9',
        width:'100%',
        padding:15,
        borderRadius:10,
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#0782F9',
        borderWidth:2,
    },
    buttonOutlineText:{
        color:'#0782F9',
        fontWeight:'700',
        fontSize:16,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
})