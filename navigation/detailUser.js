import { View, Text, Button, TouchableOpacity, RefreshControl, ScrollView, ImageBackground } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';

import axios from 'axios'

import LOCALHOST from '../localhost/localhost';

const DetailUser = (props) => {
    const LOCAL = LOCALHOST
    const [refreshing, setRefreshing] = useState(false);
    const [loginInfor, setLoginInfor] = useState({})
    const [pass, setPass] = useState('')
    const [repass, setrePass] = useState('')

    const getData = async () => {
        try {


            const value = await AsyncStorage.getItem('LoignInfor')
            if (value !== null) {
                //lấy được dữ liệu

                setLoginInfor(JSON.parse(value))



            }
        } catch (e) {
            // error reading value
            console.log(e);
        }
    }


    useEffect(() => {
        getData();
        Reload()
    }, []);
    const clearAllData = async () => {
        setLoginInfor('')
        await AsyncStorage.removeItem('LoginInfor')
        await AsyncStorage.clear();


        props.navigation.navigate('Login')




    }
    const Reload = async () => {




    }

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)

    }
    const changPass = () => {
        if (pass.length == 0 || repass.length == 0) {
            alert('vui lòng nhập mật khẩu mới')

        }
        else if (pass != repass) {
            alert('mật khẩu không giống nhau')
        }
        else {


            axios({
                url: LOCAL + '/user/update',
                method: 'PUT',
                data: {
                    username: loginInfor.username,
                    password: pass,
                    repassword: repass
                },
            }).then(result => {
                setPass('')
                setrePass('')
                alert('đổi mật khẩu thành công')
            }).catch(err => {

                console.log(err.response.data)

            })
        }

    }
    const deleteUser = () => {
        axios({
            url: LOCAL + '/user/delete',
            method: 'DELETE',
            data: {
                username: loginInfor.username,

            },
        }).then(result => {
            console.log(result.data)
            alert('xóa tài khoản thành công')
            setLoginInfor('')
        }).catch(err => {

            console.log(err.response.data)

        })
    }
    return (
        <View>
            <ImageBackground source={require('../assets/newBG.jpg')} resizeMode="cover">
                <View style={{ alignItems: 'center' }}>



                    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />} style={{ marginTop: 120 }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} >ID : {loginInfor.id}</Text>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', margin: 10 }} >tên tài khoản : {loginInfor.username}</Text>
                        <TextInput placeholder='nhập mật khẩu mới' style={{ height: 50, width: 300, backgroundColor: 'white', borderRadius: 5, color: 'black', marginTop: 20, paddingLeft: 10 }} onChangeText={(text) => setPass(text)} value={pass}></TextInput>
                        <TextInput placeholder='nhập lại mật khẩu mới' style={{ height: 50, width: 300, backgroundColor: 'white', borderRadius: 5, marginTop: 20, color: 'black', paddingLeft: 10 }} onChangeText={(text) => setrePass(text)} value={repass}></TextInput>
                        <TouchableOpacity onPress={changPass} style={{ marginTop: 30, backgroundColor: '#eff218', alignItems: 'center', borderRadius: 5, padding: 5 }} >
                            <Text >đổi mật khẩu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={deleteUser} style={{ marginTop: 320, backgroundColor: 'red', alignItems: 'center', borderRadius: 5, padding: 5 }} >
                            <Text>xóa tài khoản</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={clearAllData} style={{ marginTop: 10, backgroundColor: '#53bd78', alignItems: 'center', padding: 5, borderRadius: 5 }}>
                            <Text>đăng xuất</Text>
                        </TouchableOpacity>
                    </ScrollView>

                </View >
            </ImageBackground>
        </View>
    )
}

export default DetailUser