
import { Settings, Text, View, ScrollView, Image } from 'react-native';
import Item from '../components/items'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import LOCALHOST from '../localhost/localhost'
import { FlatList } from 'react-native-gesture-handler';

const LoveStackScreen = () => {
    const [LoginInfor, setLoginInfor] = useState({})
    const [data, setData] = useState([]);
    const getwishlist = async () => {
        const value = await AsyncStorage.getItem('LoignInfor')
        setLoginInfor(JSON.parse(value))


    }
    const getData = () => {
        axios.get(LOCALHOST + '/getwishlist?iduser=' + LoginInfor.id)
            .then((json) => setData(json.data))

    }
    useEffect(() => {
        getwishlist()
        getData()
    }, []);
    const renderItem = ({ item }) => {

        return <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Image source={{ uri: item.thumbfood }} style={{ width: 100, height: 100, borderRadius: 5 }} />
            <Text style={{ marginLeft: 10, fontSize: 18 }}>{item.namefood}</Text>
        </View>
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <FlatList
                style={{ marginHorizontal: 10, marginTop: 100, marginBottom: 20 }}
                data={data.data}

                renderItem={renderItem}
                keyExtractor={item => item.iduser}
            />
        </View>
    );
}
export default LoveStackScreen;
