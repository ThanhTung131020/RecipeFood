import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
const Itenms = ({ title, thumb, ingredients, instructions, id }) => {
    const navigation = useNavigation();
    const gotoDetail = () => {
        navigation.push('DetailsScreen', {
            id,
            title,
            thumb,
            ingredients,
            instructions,


        });

    }
    return (
        <>
            <TouchableOpacity onPress={gotoDetail}>
                <View style={styles.viewList}>
                    <Image style={styles.IMG} source={{ uri: thumb }} />
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