import { View, Text, ScrollView, SafeAreaView, Image, TextInput, Button, TouchableOpacity, FlatList } from 'react-native'
import { React, useState, useEffect } from 'react'
import styles from './style'
import Items from '../../components/items'
import { PRO } from '../../data'
import axios from 'axios';
import LOCALHOST from '../../localhost/localhost'


const Home = () => {
    const [data, setData] = useState([]);

    const renderCategory = ({ item }) => {

        return <Items

            id={item.id}
            title={item.title}
            thumb={item.thumb}
            ingredients={item.ingredients}
            instructions={item.instructions}

        />
    }
    const getData = () => {
        axios.get(LOCALHOST)
            .then((json) => setData(json.data))

    }
    const [textSearch, setTextSearch] = useState('');
    useEffect(() => {
        getData();

    }, []);
    return (
        <>
            <View style={styles.Home}>

                <Text style={styles.text1}>Giới thiệu</Text>
                <View style={styles.viewImg}>
                    <ScrollView horizontal={true}>

                        <Image style={styles.imgHozi} source={require('../../images/food2.jpg')} />
                        <Image style={styles.imgHozi} source={require('../../images/food2.jpg')} />
                        <Image style={styles.imgHozi} source={require('../../images/food1.jpg')} />
                        <Image style={styles.imgHozi} source={require('../../images/food2.jpg')} />
                    </ScrollView>

                </View>
                <Text style={styles.text2}>Món ăn cho bạn</Text>
                <View style={styles.viewSearch}>
                    <TextInput style={styles.search} placeholder='Tìm kiếm'
                        onChangeText={(text) => {
                            setTextSearch(text)
                        }}

                    ></TextInput>
                </View>
                <FlatList
                    style={{ height: 410 }}
                    data={data.data.filter(foods => foods.title.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase()))}
                    // data={PRO.filter(foods => foods.title.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase()))}
                    renderItem={renderCategory}
                    keyExtractor={item => item.id}

                />
            </View>
        </>

    )
}


export default Home;