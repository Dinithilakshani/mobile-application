 import { View, Text ,TextInput} from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { Background } from '@react-navigation/elements'

const Index = () => {
  return (
    <View style ={{
        backgroundColor: "yellow", 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

        
        

       
    }}> 
      <Text style={
        {
        
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 20
        }
      }>Hello Dinu</Text>
   
      <Link href="/profile" style={{
        fontSize: 20,
        color: 'blue',
        

       

      }}>  Go to profile
      </Link>

      <Link href="/user" style={{
        fontSize: 20,
        color: 'blue',
       
        marginTop: 10
      }}>  Go to user
      </Link>
       

      <TextInput></TextInput>
    </View>
  )
}

export default Index