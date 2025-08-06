import { View, Text, Pressable } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'

const FooterNav = () => {

    const router = useRouter();
  return (
     <View
     className='w-full flex-row bg-black  p-[30px] justify-evenly ]'>
           
          <Pressable>
            
          </Pressable>
            <View>
              <Link
                href="/home/"
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
                Home index
              </Link>
            </View>
             <View>
              <Link
                href="/home//test"
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
                Home test
              </Link>
            </View>
            <View>
              <Link
                href={{
                    pathname: "/item/[id]",
                    params: { 
                        id: "1",
                        name:"dinu",
                        age:29,
                        address:"kathmandu"
                     }
                }}
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
              goto item
              </Link>
            </View>
            <View>
              <Link
                href="/"
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
                Home
              </Link>
            </View>
            <View>
              <Link
                href="/profile"
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
                Profile
              </Link>
            </View>
             <View>
              <Link
                href="/login"
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
                User Login
              </Link>
            </View>
            <View>
              <Link
                href="/user"
                style={{
                  color: "white",
                  fontSize:20
                }}
              >
                User
              </Link>
            </View>
            
          </View>
         )}

export default FooterNav