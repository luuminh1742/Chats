import { StyleSheet } from "react-native";

const TEXT = {
    color: '#52796f',
    fontSize: 18
}

const RegisterStyle = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent:'center',
        backgroundColor: '#eff6ff'
    },

    textWelcome: {
        color: '#52796f',
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 15,
        textAlign:'center',

    },
    viewForm: {
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    itemInput: {
        width: '80%',
        marginTop: 15,
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 25,
        width: '100%',
        paddingVertical: 10,
        paddingLeft: 50,
        paddingRight: 15,
        ...TEXT,
    },
    iconInput: {
        position: 'absolute',
        zIndex: 10,
        left: 10,
        top: 10
    },
    textRegister: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    touchRegister: {
        backgroundColor: '#52796f',
        padding: 10,
        borderRadius: 25,
        marginVertical: 15,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchLogin: {
        marginVertical: 15,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogin: {
        fontSize: 20,
        color: '#1f5199',
    },
    radioButton: {
        flexDirection: 'row',
        marginHorizontal: 5,
    },
    textRadioButton: {
        fontSize: 17,
        color: '#000',
        marginTop: 5,
    },
    itemGender: {
        width: '80%',
        marginTop: 15,
    },
    textLabelGender: {
        fontSize: 17,
        color: '#000',
        marginTop: 5,
        marginLeft: 5,
    },
    gender:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 25,
        width: '100%',
        paddingVertical: 5,
    }
})

export default RegisterStyle;