import { View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';


const Login = () => {
  const { isUser, logOut, login } = useAuth();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router =   useRouter()

  const handleLogin = () => {
    if (username === "admin" && password === "1234"){
        alert("login successfull")
    // You can pass username/password to login() if needed
    login();
    router.replace("/")
    }
  };

  return (
    <View className="flex-1 w-full bg-[#6488acff] justify-center items-center px-5">
      
      {/* Username input */}
        <TextInput
        placeholder="Username"
        placeholderTextColor="#fff"
        className="w-full border border-rose-300 rounded-md p-3 bg-white mb-4"
        value={username}
        onChangeText={setUsername}
      />
      

      {/* Password input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#fff"
        className="w-full border border-rose-300 rounded-md p-3 bg-white mb-4"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Login button */}
      <TouchableOpacity
        onPress={handleLogin}
        className="mt-5 bg-blue-500 px-4 py-2 rounded"
      >
        <Text className="text-white text-lg font-semibold">Login</Text>
      </TouchableOpacity>

     
    </View>
  );
};

export default Login;
