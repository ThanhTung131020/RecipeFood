import { View, Text, ScrollView, SafeAreaView, Image, TextInput, Button, TouchableOpacity, FlatList } from 'react-native'
import { React, useState } from 'react'
import styles from './style'

const Home = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <>

            <View style={styles.Home}>

                <Text style={styles.text1}>Popular recipe</Text>
                <View style={styles.viewImg}>
                    <ScrollView horizontal={true}>
                        <Image style={styles.imgHozi} source={require('../../images/food1.jpg')} />
                        <Image style={styles.imgHozi} source={require('../../images/food2.jpg')} />
                        <Image style={styles.imgHozi} source={require('../../images/food1.jpg')} />
                        <Image style={styles.imgHozi} source={require('../../images/food2.jpg')} />
                    </ScrollView>

                </View>
                <Text style={styles.text2}>Recipe food</Text>
                <View style={styles.viewSearch}>
                    <TextInput style={styles.search} placeholder='  search'
                        onChangeText={(text) => {
                            setSearchText(text)
                        }}
                    ></TextInput>
                    <TouchableOpacity>
                        <Image source={require('../../images/find.png')} style={styles.iconSearch} />
                    </TouchableOpacity>

                </View>








            </View>






        </>



    )
}


export default Home;