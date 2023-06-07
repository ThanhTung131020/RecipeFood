import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import styles from './style'
import LOCALHOST from '../../localhost/localhost'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'

const Detail = ({ route }) => {
    const [LoginInfor, setLoginInfor] = useState({})
    const love = async () => {



        const value = await AsyncStorage.getItem('LoignInfor')
        setLoginInfor(JSON.parse(value))


        axios({
            url: LOCALHOST + '/wishlist/add',
            method: 'POST',
            data: {
                iduser: LoginInfor.id,
                idfood: route.params.id,
                namefood: route.params.title,
                thumbfood: route.params.thumb
            },
        }).then(result => {
            console.log(result.data)
            alert('thêm vào yêu thích thành công')
        }).catch(err => {

            console.log(err.response.data)

        })
    }

    return (

        <ScrollView style={styles.container} >

            <Image source={{ uri: route.params.thumb }} style={styles.detailImage} />

            <View style={styles.viewLevel}>
                <Text style={styles.nameFood}>{route.params.title}</Text>
                <View style={styles.viewIcon}>

                    <View style={styles.min} >
                        <Image source={require('../../images/level.jpg')} style={styles.level} />
                        <Text>easy</Text>
                    </View>
                    <View style={styles.min} >
                        <Image source={require('../../images/time.png')} style={styles.level} />
                        <Text>50min</Text>
                    </View>
                    <View style={styles.min} >
                        <Image source={require('../../images/calories.png')} style={styles.level} />
                        <Text>600kcl</Text>
                    </View>
                    <View style={styles.min} >
                        <TouchableOpacity onPress={love}>
                            <Image source={require('../../images/love.png')} style={styles.level} />
                            <Text>thích</Text>
                        </TouchableOpacity>

                    </View>
                </View>


            </View>

            <View style={styles.containerAbout}>

                <Text style={styles.about}>Nguyên liệu</Text>

                <Text style={styles.text}>
                    {route.params.ingredients}
                </Text>
            </View>
            <View style={styles.containerAbout}>
                <Text style={styles.about}>Hướng dẫn</Text>
                <Text style={styles.text}>
                    {route.params.instructions}
                </Text>
            </View>

        </ScrollView>


    )
}

export default Detail