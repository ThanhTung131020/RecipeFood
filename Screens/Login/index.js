import { ActivityIndicator, View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, NavigationContainer, Keyboard, Touchable, TouchableOpacity, ImageBackground, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import LOCALHOST from '../../localhost/localhost'
// import User from './User';

export default function Login(props) {
  const LOCAL = LOCALHOST
  const [userName, setUserName] = useState('')
  const [passWord, setpassWord] = useState('')
  const navigation = useNavigation();
  const gotoRegister = () => {
    navigation.push('Register', {

    })
  };

  const doLogin = () => {
    // validate
    if (userName.length == 0) {
      alert('enter user name'); return;
    }
    if (passWord.length == 0) {
      alert('enter password'); return;
    }
    let url = LOCAL + '/getusers?username=' + userName;
    fetch(url)
      .then((res) => {

        return res.json()
      })
      .then(async (resLogin) => {
        let objU = resLogin

        if (resLogin.data.length != 1) {
          alert('sai user name or trung lap du lieu')
          return
        }
        else {
          //số lượng lấy được 1 bản ghi => validate password

          if (objU.data[0].password != passWord) {
            alert('sai mat khau')
            return
          }
          else {
            //đúng pass word lưu thông tin vào storage
            try {


              await AsyncStorage.setItem('LoignInfor', JSON.stringify(objU.data[0]))
              alert('đăng nhập thành công')
              setUserName('')
              setpassWord('')
              // chuyen man hinh

              props.navigation.navigate('Detailuser')

            } catch (e) {
              // saving error
              console.log(e);
            }
          }

        }
      })
  }




  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/BG.jpg')} resizeMode="cover" style={styles.image}>

        <View>
          <TextInput style={styles.userName} placeholder='nhập tên tài khoản' placeholderTextColor={'green'} onChangeText={(text) => setUserName(text)} value={userName} />


          <TextInput style={styles.passWord} placeholder='nhập mật khẩu' placeholderTextColor={'green'} onChangeText={(text) => setpassWord(text)} value={passWord} />
        </View>

        <TouchableOpacity style={styles.btnDN} onPress={doLogin} >
          <Text style={styles.textDN}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDK} onPress={gotoRegister}>
          <Text style={styles.textDK}>
            đăng kí
          </Text>
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
    marginTop: 20,
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