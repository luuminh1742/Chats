import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: '#f5f6f1',
    },
    //----- Header ------------
    viewHeader: {
        flex: 1,
        backgroundColor: '#465efc',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textTitleHeader: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff',
        marginLeft: 10,
        marginTop: 9,
    },
    avatarUser: {
        width: 50,
        height: 50,
        borderRadius: 60,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    viewAvatar: {
        flexDirection: 'row',
        marginTop: 10,
    },
    headerRight: {
        flexDirection: 'row',
    },
    touchableSearch: {
        backgroundColor: '#ddd',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        marginTop: 15,
        marginLeft: 10
    },

    //----- End Header ------------


    viewChats: {
        flex: 4
    },
    //----- View Friends ------------

    viewGroups: {
        height: 100,
        borderRadius: 25,
        backgroundColor: '#fff',
        position: 'relative',
        top: -65,
        width: '100%',
        justifyContent: 'center',
    },
    textGroups:{
        zIndex:10,
        fontWeight: 'bold',
        fontSize:20,
        marginLeft:10,
        top:-30
    },
    viewFriends: {
        marginTop:25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    touchableAddNewFriend: {
        padding: 10,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#000',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    avatarFriends: {
        marginHorizontal: 10,
    },
    //----- End View Friends ------------

    //----- View History Chats ------------
    textHistoryMessage:{
        fontSize:25,
        fontWeight: 'bold',
        top:-10
    },
    viewHistoryChats: {
        padding: 10,
        top: -50
    },
    itemHistoryChats: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    textTextTitleHeader: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 13,
        marginLeft: 10
    }



    //----- End View History Chats ------------
})

export default HomeStyle;