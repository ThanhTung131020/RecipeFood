import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import LOCALHOST from '../../localhost/localhost'
const Register = () => {
    const LOCAL = LOCALHOST
    const [userName, setUserName] = useState('');
    const [passWord, setpassWord] = useState('');
    const [rePassWord, serRepassWord] = useState('');
    const [errUser, setErrUserName] = useState('')
    const [errPass, setErrpass] = useState('')
    const [errrePass, setErrrepass] = useState('')
    const sendData = () => {

        if (userName.length == 0) {
            setErrUserName('nhập tên tài khoản')
            setErrpass('')
            setErrrepass('')
        }
        else if (passWord.length == 0) {
            setErrpass('nhập mật khẩu')
            setErrUserName('')
            setErrrepass('')
        }
        else if (passWord.includes(rePassWord) == false || rePassWord.length == 0) {
            setErrrepass('mật khẩu không giống nhau')
            setErrpass('')
            setErrUserName('')
        }
        else {
            axios({
                url: LOCALHOST + '/users/add',
                method: 'POST',
                data: {
                    username: userName,
                    password: passWord,
                    repassword: rePassWord
                },
            }).then(result => {
                console.log(result.data)
                alert('đăng kí thành công')
            }).catch(err => {

                console.log(err.response.data)

            })
        }



    }


    //192.168.1.6:3000/users/add?username=tung?password=123
    //'192.168.1.6:3000/users/add?username=' + userName + '?password=' + passWord
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/BG.jpg')} resizeMode="cover" style={styles.image}>

                <View>
                    <TextInput style={styles.userName} placeholder='nhập tên tài khoản' placeholderTextColor={'green'} onChangeText={(text) => setUserName(text)} />
                    <Text style={{ color: 'red' }}>{errUser}</Text>

                    <TextInput style={styles.passWord} placeholder='nhập mật khẩu' placeholderTextColor={'green'} onChangeText={(text) => setpassWord(text)} />
                    <Text style={{ color: 'red' }}>{errPass}</Text>
                    <TextInput style={styles.passWord} placeholder='nhập mật lại mật khẩu' placeholderTextColor={'green'} onChangeText={(text) => serRepassWord(text)} />
                    <Text style={{ color: 'red' }}>{errrePass}</Text>
                </View>

                <TouchableOpacity style={styles.btnDN} onPress={sendData}  >
                    <Text style={styles.textDN}>Đăng kí</Text>
                </TouchableOpacity>


            </ImageBackground>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1,

        alignItems: 'center'
    },
    userName: {
        height: 50,
        width: 350,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 170,

    },
    passWord: {
        height: 50,
        width: 350,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 15,
    },
    btnDN: {
        backgroundColor: '#cfeb34',
        padding: 10,
        marginTop: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignContent: 'center'
    },
    textDN: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    textDK: {
        fontSize: 20,
        color: '#eb7d34',
        fontWeight: 'bold',
        textDecorationLine: 'underline',


    },
    btnDK: {
        marginTop: 100,

    },
    btnQMK: {
        marginTop: 20
    },
    textQMK: {
        fontSize: 20,
        color: '#34e5eb',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }

})

export default Register