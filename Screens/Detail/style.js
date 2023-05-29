import { StyleSheet } from "react-native";
import color from '../../content/color'
const style = StyleSheet.create({
    viewLevel: {
        marginHorizontal: 10,
        height: 120,
        borderRadius: 10,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "black",
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailImage: {
        width: '100%',
        height: '30%'
    },
    level: {

        overflow: "hidden",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        width: 50,
        height: 50,

    },
    nameFood: {
        marginBottom: 18,
        fontSize: 15,
        textAlign: 'center',
        fontStyle: 'italic',
        marginVertical: 10

    },
    min: {
        marginHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewIcon: {
        flexDirection: "row",

    },
    about: {
        fontSize: 30,
        textDecorationLine: 'underline',
        textDecorationColor: color.green,
        color: color.green,
        marginTop: 15,
        fontWeight: 'bold'
    },
    containerAbout: {
        marginHorizontal: 20,


    }, text: {
        fontSize: 15,
        marginTop: 5,

    },
    container: {

    }

})
export default style