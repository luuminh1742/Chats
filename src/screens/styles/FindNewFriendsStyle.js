import { StyleSheet } from "react-native";

export default FindNewFriendsStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ddd',

    },
    textInputSearch: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderRadius: 50
    },
    itemFriend: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        flexDirection: 'row',
        marginVertical: 10,
    },
    itemAvatar: {
        width: 70,
        height: 70,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: '#0084ff',
    },
    itemRight: {
        marginLeft: 10,
    },
    textFullName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    touchAddFriend: {
        backgroundColor: '#0084ff',
        padding:10,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:10,
        marginTop:5,
    },
    textTouchAddFriend: {
        color:'#fff'
    }

})