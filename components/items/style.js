import { StyleSheet } from 'react-native';
import color from '../../content/color'
const styles = StyleSheet.create({
    viewList: {
        marginHorizontal: 10,
        flexDirection: 'row',

        marginVertical: 10

    },
    IMG: {
        width: 100,
        height: 95,
        borderRadius: 7
    },
    nameFood: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    timeFood: {
        marginTop: 35,
        fontSize: 14,
        fontWeight: 'thin',
        marginLeft: 10
    }

})
export default styles;