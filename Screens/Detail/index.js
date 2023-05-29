import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native'

import React from 'react'
import styles from './style'

const Detail = ({ route }) => {

    return (
        <SafeAreaView>
            <ScrollView style={styles.container} >

                <Image source={route.params.thumb} style={styles.detailImage} />

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
                    </View>


                </View>

                <View style={styles.containerAbout}>
                    <Text style={styles.about}>about recipe</Text>
                    <Text style={styles.text}>
                        {route.params.ingredients}
                    </Text>
                </View>
                <View style={styles.containerAbout}>
                    <Text style={styles.about}>Ingredient</Text>
                    <Text style={styles.text}>
                        {route.params.instructions}
                    </Text>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Detail