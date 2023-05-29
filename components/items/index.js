import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
const Itenms = ({ title, thumb, ingredients, instructions }) => {
    const navigation = useNavigation();
    const gotoDetail = () => {
        navigation.push('DetailsScreen', {
            title,
            thumb,
            ingredients,
            instructions,
            navigation
        });

    }
    return (
        <>
            <TouchableOpacity onPress={gotoDetail}>
                <View style={styles.viewList}>
                    <Image style={styles.IMG} source={thumb} />
                    <View style={styles.viewNameFood}>
                        <Text style={styles.nameFood}>{title}</Text>
                        <Text style={styles.timeFood}>50 min</Text>
                    </View>

                </View>
            </TouchableOpacity>

        </>

    )
}

export default Itenms