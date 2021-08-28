import { StyleSheet } from "react-native";

export default ProfileStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    avatarUser: {
        width: 200,
        height: 200,
        borderRadius: 150,
        borderWidth: 1.5,
        borderColor: '#ddd'
    },
    textHeaderNameUser: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
    },
    textHeaderEmail: {
        color: '#000',
        fontSize: 20,
    },
    touchableUpdateInfo: {
        padding: 10,
        borderRadius:25,
        marginVertical:15,
        borderColor:'#ddd',
        borderWidth:1,
        backgroundColor:'#fff',
        paddingHorizontal:20
    }

})