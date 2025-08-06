import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ProfileScreen = () => {
  return (
    <View style={{flex:1,
        width: '100%',
        backgroundColor: 'yellow',
        

    }}>
      <Text style={{
        fontSize: 30,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50
      }}>This is Profile Screen</Text>
       <Link href="/" style={{
              fontSize: 20,
              color: 'blue',
              textAlign: 'center',
              marginTop: 20
            }}>Go to home</Link>
    </View>
  )
}

export default ProfileScreen