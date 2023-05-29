import { StyleSheet } from 'react-native';
import color from '../../content/color';
import home from '.';
const styles = StyleSheet.create({
    Home: {

    },
    text1: {

        fontSize: 28,
        color: color.green,
        marginTop: 10,
        fontWeight: 'bold',

        textDecorationLine: 'underline'
    },
    imgHozi: {
        width: 130,
        height: 95,
        margin: 5,
        borderRadius: 7,

    },
    viewImg: {
        marginTop: 15,
        flexDirection: 'row',

    },
    text2: {

        fontSize: 28,
        color: color.green,
        marginTop: 15,
        fontWeight: 'bold',

        textDecorationLine: 'underline'
    },
    search: {
        marginTop: 5,
        backgroundColor: color.search,
        height: 40,
        borderRadius: 5,
        width: 325

    },
    iconSearch: {
        width: 40,
        height: 40,
        marginHorizontal: 5
    },
    viewSearch: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    items: {
        marginTop: 20,

    },
    imageList: {
        width: 120,
        height: 100,
        borderRadius: 8
    }

})
export default styles;